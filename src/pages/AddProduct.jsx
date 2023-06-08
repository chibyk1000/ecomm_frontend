import { useState } from 'react';
import axios from 'axios';
const AddProduct = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
 
  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const formdata = new FormData()
      formdata.append('title', title)
      formdata.append('price', price)
      formdata.append('description', description)
      formdata.append('file', file[0])
      const resp = await axios.post('http://localhost:8080/admin/add-products', formdata)
      if (resp.status === 200) {
     alert('uploaded')
   }
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-2/3 shadow
        border mx-auto p-4 text-Slate-900 font-semibold"
      >
        <h2 className="text-3xl text-center">Add Product</h2>
        <input
          type="text"
          className="border  block w-full  my-3 h-12"
          placeholder="Title"
          onChange={(event) => setTitle(event.target.value)}
        />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem perspiciatis soluta.
        <input
          type="text"
          className=" block  my-3 h-12 w-full"
          placeholder="Price"
          onChange={(event) => setPrice(event.target.value)}
        />
        
        <input
          type="file"
          className=" block my-3"
          onChange={(event) => setFile(event.target.files)}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Description"
          className="border focus:outline-none block w-full my-3"
        ></textarea>

        <div className='flex justify-end'>

        <button className='bg-yellow-700 text-white px-3 py-1 '>ADD products</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct