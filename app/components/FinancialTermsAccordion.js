"use client"

import { useState } from "react"

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 px-6 bg-white text-[#656565] font-medium flex justify-between items-center hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold">{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 text-[#00a86b] ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && <div className="py-4 px-6 bg-white text-[#656565]">{content}</div>}
    </div>
  )
}

const FinancialTermsAccordion = () => {
  const financialTerms = [
    {
      title: "Interest Rate",
      content: "The percentage charged by the lender on your loan amount. Lower rates mean lower repayments.",
    },
    {
      title: "Loan-to-Value (LTV)",
      content: "The percentage of your home's value that the bank is willing to finance.",
    },
    {
      title: "Loan Term",
      content: "The period over which you repay the loan, typically 20 to 30 years.",
    },
    {
      title: "Instalments",
      content: "The monthly repayment amount you will owe on your home loan.",
    },
    {
      title: "Credit Check",
      content: "Banks use this to assess your financial history.",
    },
    {
      title: "Interest Rate Type",
      content: "Fixed vs. variable interest rates and how they impact your repayments.",
    },
    {
      title: "Deposit",
      content:
        "The upfront amount you pay towards the purchase price. The more you put down, the lower your loan amount.",
    },
    {
      title: "Bond Registration Fees",
      content: "Fees paid to register your home loan with the Deeds Office.",
    },
    {
      title: "Transfer Duties",
      content: "A tax paid to transfer ownership of a property. Properties under a certain threshold may be exempt.",
    },
  ]

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-[#00a86b]">Key Terms to Know</h2>
      <div className="border border-gray-200 rounded-md overflow-hidden">
        {financialTerms.map((term, index) => (
          <AccordionItem key={index} title={term.title} content={term.content} />
        ))}
      </div>
    </div>
  )
}

export default FinancialTermsAccordion

