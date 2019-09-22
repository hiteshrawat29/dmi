export const APIConstant={
    //POST
LOGIN_API:"v1/auth/",
FORGOTPASSWORD:"v1/paasword/forgot/password",
LOANINFO:"v1/loan/applicant/loan/information/",
PERSONALDETAILS:"v1/loan/application/applicant/personal/detail/",
GENERATEOTP:"v1/common/contact/verification/mobile",
VERIFYOTP:"v1/common/contact/verification/mobile/verify",
UPDATESALARYINC:"v1/loan/application/applicant/income/salary",
UPDATEITR:"v1/loan/application/applicant/income/financialitr",
LIANDASSET:"v1/loan/application/applicant/liability/",

//GET
GETLEADINFO:"v1/lead/all/2",
GETLOAN_INFO:"v1/loan/applicant/loan/information/4",
GETPERSONAL_DET:"v1/loan/application/applicant/personal/detail/4",
GETSALARYINCOME:"v1/loan/application/applicant/income/salary/5",
GETITRINCOME:"v1/loan/application/applicant/income/itr/5",
GETLIABANDASSET:"v1/loan/application/applicant/liability/4",

//Dropdowns
MASTERS:"v1/master?mastersName=LoanType,Branch,LoanProduct,LoanPurpose,LoanScheme,LoanInformationInterestType,SourcingChannelPartner,ChannelPartnerName",
LOANPRODUCT:"v1/master/loan-product-purpose"
};