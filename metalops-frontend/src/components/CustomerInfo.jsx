import React, { useEffect, useState } from 'react'
import { deleteCustomer, getCustomer, updateCustomer } from '../service/CustomerService';
import { useNavigate, useParams } from 'react-router-dom';

export default function CustomerInfo() {
    const [customer, setCustomer] = useState({});
    const {id} = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        getCustomerInfo();
    }, []);

    function getCustomerInfo() {
        getCustomer(id).then((response) => {
            setCustomer(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }

    function editCustomer() {
        navigator(`/edit-customer/${id}`)
    }

    function removeCustomer() {
        deleteCustomer(id).then((response) =>{
            console.log(response.data);
            navigator('/customers')
        }).catch((error) => {
            console.error(error);
        })
    }

  return (
    <div className='p-4'>
        {/* Title */}
        <div className='text-2xl mb-4'>Customer Info</div>

        {/* Customer Info */}
        <table className='w-full'>
            <tbody>
                <tr>
                    <td className='px-2'>Customer Id</td>
                    <td>:</td>
                    <td className='px-2'>{customer.customerId}</td>
                </tr>
                <tr>
                    <td className='px-2'>Name</td>
                    <td>:</td>
                    <td className='px-2'>{customer.name}</td>
                </tr>
                <tr>
                    <td className='px-2'>Company</td>
                    <td>:</td>
                    <td className='px-2'>{customer.companyName}</td>
                </tr>
                <tr>
                    <td className='px-2'>Address</td>
                    <td>:</td>
                    <td className='px-2'>{customer.address}</td>
                </tr>
                <tr>
                    <td className='px-2'>Contact</td>
                    <td>:</td>
                    <td className='px-2'>{customer.contact}</td>
                </tr>
                <tr>
                    <td className='px-2'>Email Id</td>
                    <td>:</td>
                    <td className='px-2'>{customer.email}</td>
                </tr>
            </tbody>    
        </table>

        {/* Buttons */}
        <div className='mt-4 flex gap-4'>
            <button className='border rounded-lg py-2 px-4 bg-blue-600 text-white text-sm flex items-center justify-center gap-2 w-1/2' onClick={editCustomer}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                <div>Edit</div>
            </button>
            <button className='border rounded-lg py-2 px-4 bg-red-600 text-white text-sm flex items-center justify-center gap-2 w-1/2' onClick={removeCustomer}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
                <div>Delete</div>
            </button>
        </div>
        
    </div>
  )
}
