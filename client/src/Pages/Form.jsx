import React from 'react'

const Form = () => {
  return (
    <div className="border rounded-lg sm:w-[300] md:w-106.25 px-5 pt-5 pb-3">
      <h3 className="font-bold mb-3 text-[#21262B]">Add an expense</h3>
      <form action="">
        <p className="flex flex-col">
          <label htmlFor="" className=''>Expense name</label>
          <input type="text" className='border rounded-lg border-[#F1EAD9]' />
        </p>
        <p className="flex flex-col">
          <label htmlFor="">Amount (&#8358;)</label>
          <input type="number" />
        </p>
        <p className="flex flex-col">
          <label htmlFor="">Category</label>
          <input type="text" />
        </p>
        <p className="flex flex-col">
          <label htmlFor="">Date</label>
          <input type="date" />
        </p>

        <button
          type="submit"
          className="mt-12 bg-[#D9A441] text-[#21262B]  mb-2 w-full rounded-lg py-2 font-medium "
        >
          Save expense
        </button>
      </form>
    </div>
  );
}

export default Form
