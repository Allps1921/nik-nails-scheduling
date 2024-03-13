import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Main = () => {
const Registered = (e) => {
    e.preventDefault();

    alert('Registered')
}
const Saved = (e) => {
    e.preventDefault();

    alert('Saved')
}

    return (
        <div>
            <div className=''>

                <form className='w-full ml-10 bg-sky-300 mx-auto'>
                    <div className='row flex'>

                        {/* div for controlling the input data labels */}

                        <div className='col ml-[15%]'>
                            <label className='text-white'>Products</label>
                            <input type='text' className='form-control ml-2 rounded border font-semibold' placeholder="Enter product" />
                        </div>
                        <div className='col ml-[15%] '>
                            <label className='text-white'>Amount</label>
                            <input
                                type='number' min='1' step='any'
                                className='text-slate-900 form-control ml-2 rounded border font-semibold items-center px-0.2'
                                placeholder="R$ 0,00" />
                        </div>
                    </div>
                    {/* Button div for controlling the buttons input data */}

                    <div className='flex justify-center button-group items-center mt-2 '>
                        <button   onClick   ={Registered} 
                            className='bg-white -text-black rounded px-3 py-1.1'
                            >Registered
                            </button>
                        <button onClick={Saved}
                            className='bg-black text-white rounded ml-2 px-3 py-1.1'
                            >Save</button>
                    </div>
                </form>

                <table 
                    className='table-auto justify-center text-white bg-zinc-500 mt-4 mx-10 me-2.5 w-full'>
                    <thead className=''>
                        <tr className=''>
                            <th>Products</th>
                            <th>Amount</th>
                            <th>Individual Price</th>
                            <th>Total Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='p-32'>
                        <tr className='justify-evenly'>
                            <td className='border-b'>Product 1</td>
                            <td className='border-b'>1</td>
                            <td className='border-b'>R$ 10,00</td>
                            <td className='border-b'>R$ 10,00</td>
                            <td className='border-b'>
                                <div className='flex items-center justify-center'>
                                    <button className='bg-white text-black rounded px-3 py-1.1'>
                                        <AiFillEdit size={20}/>
                                    </button>
                                    <button className='bg-black text-white rounded ml-2 px-3 py-1.1'>
                                        <AiFillDelete size={20} />
                                    </button>
                                </div>
                            </td>
                            
                        </tr>
                        <tr>
                            <td className='border-b'>Product 1</td>
                            <td className='border-b'>1</td>
                            <td className='border-b'>R$ 10,00</td>
                            <td className='border-b'>R$ 10,00</td>
                            <td className='border-b'>
                                <div className='flex items-center justify-center'>
                                    <button className='bg-white text-black rounded px-3 py-1.1'>
                                        <AiFillEdit size={20}/>
                                    </button>
                                    <button className='bg-black text-white rounded ml-2 px-3 py-1.1'>
                                        <AiFillDelete size={20} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='border-b'>Product 1</td>
                            <td className='border-b'>1</td>
                            <td className='border-b'>R$ 10,00</td>
                            <td className='border-b'>R$ 10,00</td>
                            <td className='border-b'>
                                <div className='flex items-center justify-center'>
                                    <button className='bg-white text-black rounded px-3 py-1.1'>
                                        <AiFillEdit size={20}/>
                                    </button>
                                    <button className='bg-black text-white rounded ml-2 px-3 py-1.1'>
                                        <AiFillDelete size={20} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Main;