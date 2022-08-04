import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loansearchfilter'
})
export class LoansearchfilterPipe implements PipeTransform {

  transform(loanDetails: any[], searchValue: string): any[] {

    if (!loanDetails || !searchValue) {
      return loanDetails;
    }
    return loanDetails.filter((loanDetails: {
      loanNumber: { toString: () => string | string[]; };
      loanAccountHolderFirstName: { toString: () => string; };
      loanAccountHolderLastName: { toString: () => string; };
    },) =>
      loanDetails.loanNumber.toString().includes(searchValue.toString()) ||
      loanDetails.loanAccountHolderFirstName.toString().toLocaleLowerCase().includes(searchValue.toString()) ||
      loanDetails.loanAccountHolderLastName.toString().toLocaleLowerCase().includes(searchValue.toString())
    );

  }

}
