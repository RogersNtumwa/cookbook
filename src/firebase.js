import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQDo6Id3MLR-wFBUmj03wH2AwjPn58Okg",
  authDomain: "cookbook-db890.firebaseapp.com",
  projectId: "cookbook-db890",
  storageBucket: "cookbook-db890.appspot.com",
  messagingSenderId: "277998662499",
  appId: "1:277998662499:web:ea2587d5f1516ac64c9956",
};
// Initialize Firebase

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.db = firebase.firestore();
  }
  async getRecipes() {
    const recipeArray = [];
    const recipes = await firebase.firestore().collection("receipe").get();
    recipes.forEach((recipe) => {
      recipeArray.push({ id: recipe.id, data: recipe.data() });
    });
    return recipeArray;
  }

  async getRecipeDetails(id) {
    const recipe = await firebase
      .firestore()
      .collection("receipe")
      .doc(id)
      .get();

    const recipeDeatils = recipe.data();
    return recipeDeatils;
  }

  async addRecipe(formData) {
    const recipe = await firebase
      .firestore()
      .collection("receipe")
      .add(formData);
    return recipe;
  }
}

export default new Firebase();
