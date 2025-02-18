import React from "react";

const OrdersPage=()=>{
    return(
        <div className="bg-peach font-youngSerif text-rust">
            <div className="p-4 lg:px-20 xl:px-40 ">
                <table className="w-full table-fixed border-spacing-3 border-separate">
                    <thead className="font-youngSerif text-lg text-rust tracking-wider">
                        <tr>
                            <th className="hidden md:block">Order Id</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th className="hidden lg:block">Details</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr className="bg-burnt_orange text-peach align-middle">
                            <td className="hidden md:block p-4 align-middle">1234567812345678</td>
                            <td className=" p-4">17.02.2025</td>
                            <td className=" p-4">89.90</td>
                            <td className="hidden lg:block p-4">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L(2)</td>
                            <td className=" p-4">On the way (approx. 10 mins.)....</td>
                        </tr>
                        <tr className="odd:bg-salmon align-middle">
                            <td className="hidden md:block p-4 align-middle">1234567812345678</td>
                            <td className=" p-4">17.02.2025</td>
                            <td className=" p-4">89.90</td>
                            <td className="hidden lg:block p-4">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L(2)</td>
                            <td className=" p-4">On the way (approx. 10 mins.)....</td>
                        </tr>
                        <tr className="odd:bg-salmon align-middle">
                            <td className="hidden md:block p-4 align-middle">1234567812345678</td>
                            <td className=" p-4">17.02.2025</td>
                            <td className=" p-4">89.90</td>
                            <td className="hidden lg:block p-4">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L(2)</td>
                            <td className=" p-4">On the way (approx. 10 mins.)....</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default OrdersPage