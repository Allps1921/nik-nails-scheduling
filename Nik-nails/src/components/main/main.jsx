import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Alert } from "../ui/alert";
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from '../ui/table';
import { Input } from "../ui/input";
import { useState, useEffect } from "react";


const Main = () => {
        const [individualPrice, setIndividualPrice] = useState (0);
        const [amount, setAmount] = useState (0);
        const [totalPrice, setTotalPrice] = useState (0);
    
        const individualPriceChange = (e) => {
            setIndividualPrice(parseFloat (e.target.value));
            }
    
        const handleAmountChange = (e) => {
                setAmount(parseFloat (e.target.value));
            }
    
        const calculateTotalPrice = () => {
                setTotalPrice(individualPrice * amount);
            }

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
            <div className='p-1 max-w-4xl mx-auto text-white rounded border-pink-200'>

                <form className='rounded bg-fuchsia-500'>
                    <div className='row flex auto-cols-auto justify-between mt-2 max'>

                        {/* div for controlling the input data labels */}

                        <div className='col'>
                            <Input 
                                type='text' 
                                className='text-gray-800 form-control ml-1rounded border font-semibold' 
                                placeholder="Enter product" />
                        </div>
                        <div className='col'>
                            <Input
                                type='number' min='1' step='any'
                                className='text-gray-800 form-control ml-1  rounded border font-semibold items-center'
                                placeholder="Insert amount"
                                onChange={handleAmountChange} />
                        </div>
                        <div className='col'>
                            <Input
                                type='money' min='1' step='any'
                                className='text-gray-800 form-control mr-auto rounded border font-semibold items-center'
                                placeholder="Insert Price" 
                                onChange={individualPriceChange}/>
                        </div>  
                    </div>

                    {/* Button div for controlling the buttons input data */}
                    <div className='flex justify-center button-group items-center mt-2 mb-4'>
                        <button   onClick   ={Registered, calculateTotalPrice}
                            className='bg-slate-400 -text-black rounded px-3 py-1.1'
                            >Registered
                            </button>
                        <button onClick={Saved}
                            className='bg-black text-white rounded ml-2 px-3 py-1.1'
                            >Save</button>
                    </div>
                </form>

                <Table className=''> 
                    <TableHeader className='justify-evenly'>
                        <TableHead>Products</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Individual Price</TableHead>
                        <TableHead>Total Price</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell className='border-b'>Product 0</TableCell>
                            <TableCell className='border-b'>{amount}</TableCell>
                            <TableCell className='border-b'>R$ {individualPrice.toFixed(2)}</TableCell>
                            <TableCell className='border-b'>R$ {totalPrice.toFixed(2)}</TableCell>
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
                            <TableCell className='border-b'>3</TableCell>
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
                            <TableCell className='border-b'>Product 2</TableCell>
                            <TableCell className='border-b'>5</TableCell>
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