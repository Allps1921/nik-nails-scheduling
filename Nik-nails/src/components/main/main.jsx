import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Alert } from "../ui/alert";
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from '../ui/table';

const Main = () => {
const Registered = (e) => {
    e.preventDefault();

    Alert('Registered')
}
const Saved = (e) => {
    e.preventDefault();

    alert('Saved')
}

    return (
        <div>
            <div className='p-1 max-w-4xl mx-auto text-white'>

                <form className=' bg-fuchsia-500'>
                    <div className='row flex auto-cols-auto justify-between *:mt-2'>

                        {/* div for controlling the input data labels */}

                        <div className='col'>
                            <label className='text-white'>Products</label>
                            <input 
                                type='text' 
                                className='text-gray-800 form-control ml-2 rounded border font-semibold' 
                                placeholder="Enter product" />
                        </div>
                        <div className='col'>
                            <label className=' ml-4 text-white px-auto'>Amount</label>
                            <input
                                type='number' min='1' step='any'
                                className='text-gray-800 form-control ml-1 rounded border font-semibold items-center'
                                placeholder="R$ 0,00" />
                        </div>
                        <div className='col'>
                            <label className=' ml-4 text-white px-auto'>Price</label>
                            <input
                                type='money' min='1' step='any'
                                className='text-gray-800 form-control ml-1 rounded border font-semibold items-center'
                                placeholder="R$ 0,00" />
                        </div>  
                    </div>
                    {/* Button div for controlling the buttons input data */}

                    <div className='flex justify-center button-group items-center mt-2 '>
                        <button   onClick   ={Registered} 
                            className='bg-slate-400 -text-black rounded px-3 py-1.1'
                            >Registered
                            </button>
                        <button onClick={Saved}
                            className='bg-black text-white rounded ml-2 px-3 py-1.1'
                            >Save</button>
                    </div>
                </form>

                <Table> 
                    <TableHeader className=''>
                        <TableHead>Products</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Individual Price</TableHead>
                        <TableHead>Total Price</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell className='border-b'>Product 1</TableCell>
                            <TableCell className='border-b'>1</TableCell>
                            <TableCell className='border-b'>R$ 10,00</TableCell>
                            <TableCell className='border-b'>R$ 10,00</TableCell>
                            <TableCell className='border-b'>
                                <div className='flex items-center justify-center'>
                                    <button className='bg-slate-400 text-black rounded px-3 py-1.1'>
                                        <AiFillEdit size={20}/>
                                    </button>
                                    <button className='bg-black text-white rounded ml-2 px-3 py-1.1'>
                                        <AiFillDelete size={20} />
                                    </button>
                                </div>
                            </TableCell>
                            
                        </TableRow>
                        <TableRow>
                            <TableCell className='border-b'>Product 1</TableCell>
                            <TableCell className='border-b'>1</TableCell>
                            <TableCell className='border-b'>R$ 10,00</TableCell>
                            <TableCell className='border-b'>R$ 10,00</TableCell>
                            <TableCell className='border-b'>
                                <div className='flex items-center justify-center'>
                                    <button className='bg-slate-400 text-black rounded px-3 py-1.1'>
                                        <AiFillEdit size={20}/>
                                    </button>
                                    <button className='bg-black text-white rounded ml-2 px-3 py-1.1'>
                                        <AiFillDelete size={20} />
                                    </button>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='border-b'>Product 1</TableCell>
                            <TableCell className='border-b'>1</TableCell>
                            <TableCell className='border-b'>R$ 10,00</TableCell>
                            <TableCell className='border-b'>R$ 10,00</TableCell>
                            <TableCell className='border-b'>
                                <div className='flex items-center justify-center'>
                                    <button className='bg-slate-400 text-black rounded px-3 py-1.1'>
                                        <AiFillEdit size={20}/>
                                    </button>
                                    <button className='bg-black text-white rounded ml-2 px-3 py-1.1'>
                                        <AiFillDelete size={20} />
                                    </button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>

                </Table>
            </div>
        </div>
    )
}

export default Main;