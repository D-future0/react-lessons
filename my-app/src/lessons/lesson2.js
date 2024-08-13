import React from "react";

const allbooks = [
  {
  image:"https://manybooks.net/sites/default/files/styles/220x330sc/public/webform/ebook_feature_application/10010/hahedi_5.000x8.000-ebook.jpg?itok=oOI2vLrp",
  title: "Pegasus",
  author: "H.G Ahedi",
  id:1234
},
{
  image:"https://manybooks.net/sites/default/files/styles/220h330sc_new/public/webform/ebook_feature_application/10000/center-of-enigma-final-small-size.jpg?itok=DcUC0rAG",
  title: "center of enigma",
  author: "R.F Whong",
  id:5678
},
{
  image:"https://manybooks.net/sites/default/files/styles/220h330sc_new/public/2024-08/5131tXyLBuL._SY466_.jpg?itok=0q7vDn8M",
  title: "shadows behind closed doors",
  author: "keke sharice",
  id: 9123
}
];

const BookList = ()=>{
  return(
  <div className='bookList'>
    {allbooks.map(book=>{
  return (<Book key={book.id} {...book}/>)
})}
  
  </div>
  );
}
const Book = (props) => {
  const { image, title, author } = props
  return (
    <div className="book">
      <img src={image} alt="image"></img>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

// variables
{/*const img =
  "https://manybooks.net/sites/default/files/styles/220x330sc/public/webform/ebook_feature_application/10010/hahedi_5.000x8.000-ebook.jpg?itok=oOI2vLrp";
const title = "Pegasus";
const author = "H.G Ahedi";
*/}
{
  /*const Image = () => {
  return (
    <img
      src="https://manybooks.net/sites/default/files/styles/220x330sc/public/webform/ebook_feature_application/10010/hahedi_5.000x8.000-ebook.jpg?itok=oOI2vLrp"
      alt="book"
    ></img>
  );
};
const Author = () => {
  return (
    <>
      <h3>Pegasus</h3>
    </>
  );
};
const Title = () => {
  return (
    <>
      <p>H.G Ahedi</p>
    </>
  );
};*/
}

export default BookList;
