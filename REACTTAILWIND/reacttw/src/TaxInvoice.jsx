import React from 'react'

export const TaxInvoice = () => {
    return (
        <div className='p-12 font-sans'>

            <div className="bg-black w-full text-white grid grid-cols-3 items-center px-14">
                <div></div>
                <div className="text-center font-bold text-4xl">TAX INVOICE</div>
                <div className="text-right font-bold text-xl">
                    <p>Invoice No. 123456</p>
                    <p>Invoice Date: 01/01/2021</p>
                </div>
            </div>

            <div className=" border-1 flex flex-col justify-between items-center p-4">
                <div className='text-5xl font-bold'>BUSINESS NAME</div>
                <div className='text-xl'>
                    <p>132 Street City, State, PIN</p>
                    <p>GSTIN: AAA213465</p>
                    <p>Email: 122@gmail.com</p>
                    <p>PAN No: AAA213465</p>
                </div>
            </div>

            <div className="grid grid-cols-2 border border-t-0">
                <div className='border-r-1'>
                    <p className='text-2xl font-bold'>Bill To:</p>
                    <p>Customer Name</p>
                    <p>Address</p>
                    <p>City, State, PIN</p>
                    <p>GSTIN: AAA213465</p>
                </div>
                <div className='flex flex-col justify-center items-start'>
                    <p>Payment Due Date</p>
                    <p>Payment Mode</p>

                </div>
            </div>

            <div className='grid grid-cols-2 border border-t-0'>

                <div className='h-80'>
                    <div className='text-lg border-b-1 py-1.5'>Description</div>
                </div>

                <div className='grid grid-cols-4 divide-x-2 h-80 border-1 border-t-0'>

                    <div>
                        <div className='flex items-center justify-center py-2 border-b-1'>HSN</div>

                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="flex items-center justify-center py-2 border-b">Qty</div>
                        <div className="flex items-center justify-center border-t-1">Total</div>
                    </div>


                    <div className="flex flex-col justify-between">
                        <div className='flex items-center justify-center border-b py-2'>Rate</div>
                        <div className='flex items-center justify-center border-t-1 '>
                            <span className='text-transparent'>Total</span>
                        </div>

                    </div>

                    <div className="flex flex-col justify-between">
                        <div className='flex items-center justify-center border-b py-2'>Amount</div>
                        <div className='flex items-center justify-center border-t-1 '>
                            <span className='text-transparent'>Total</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className='grid grid-cols-2 divide-x-2 border-1 border-t-0'>

                <div>
                    <p>Terms & Conditions</p>
                    <p>1.</p>
                    <p>2.</p>
                    <p>3.</p>
                    <p>4.</p>
                    <p>5.</p>
                </div>

                <div>
                    <div className='flex justify-between py-1 px-3'>
                        <p>Add : CGST @ 14%</p>
                        <p>-</p>
                    </div>
                    <div className='flex justify-between py-1 px-3'>
                        <p>Add : SGST @ 14%</p>
                        <p>-</p>
                    </div>
                    <div className='flex justify-between py-1 px-3'>
                        <p>Balance Received : </p>
                        <p>-</p>
                    </div>
                    <div className='flex justify-between py-1 px-3'>
                        <p>Balance Due : </p>
                        <p>-</p>
                    </div>
                    <div className='flex justify-between py-2 px-3 text-white bg-black'>
                        <p>Grand Total</p>
                        <p>-</p>
                    </div>
                </div>

            </div>

            <div>
                <p className='underline border-1 pt-4 pb-8'>Total Amount (₹ - In Words)</p>
            </div>

            <div className='border-1'>
                <div className='mt-6'>For : Business Name</div>
                <div className='mt-20'>Authorized Signatory</div>
            </div>
        </div>
    )
}
