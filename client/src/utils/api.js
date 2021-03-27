import axios from "axios";

const API = {

    getBooks: function(search) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${search}`);
      },

    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
      } 

};

export default API;

