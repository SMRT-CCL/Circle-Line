/* Location Selection */
const locationSelect = document.getElementById('location-choice');
const defaultPage = document.getElementById('default-page');
const dsmPage = document.getElementById('dsm-page');

locationSelect.addEventListener('change', function() {
    if (this.value === 'default') {
        defaultPage.style.display = 'block';
        dsmPage.style.display = 'none';
    } else if (this.value === 'dsm') {
        defaultPage.style.display = 'none';
        dsmPage.style.display = 'block';
    }
});

/* Distance Status for DSM */
const distance1 = Math.floor(Math.random() * 20) + 1;
const result1 = document.getElementById("dsm-distance1")
result1.innerHTML = distance1;

const distance2 = Math.floor(Math.random() * 20) + 1;
const result2 = document.getElementById("dsm-distance2")
result2.innerHTML = distance2;

const distance3 = Math.floor(Math.random() * 20) + 1;
const result3 = document.getElementById("dsm-distance3")
result3.innerHTML = distance3;

const distance4 = Math.floor(Math.random() * 20) + 1;
const result4 = document.getElementById("dsm-distance4")
result4.innerHTML = distance4;

const default_user_selection = document.getElementById('default-username');

const defaultSCD_0number = document.getElementById('default-scd-number-option');

const defaultSelect = document.getElementById('default-scd-number');
const defaultSCD_selection = document.getElementById('default-scd-pm-pic');
const default1SCD_selection = document.getElementById('default-1scd-pm-pic');
const default2SCD_selection = document.getElementById('default-2scd-pm-pic');
const default3SCD_selection = document.getElementById('default-3scd-pm-pic');
const default4SCD_selection = document.getElementById('default-4scd-pm-pic');
const defaultSCD_number = document.getElementById('default-scd-number-pm-pic-option');

const defaultSelectMOC = document.getElementById('default-scd-number-moc');
const defaultSCD_selection_moc = document.getElementById('default-scd-moc');
const default1SCD_selection_moc = document.getElementById('default-1scd-moc');
const default2SCD_selection_moc = document.getElementById('default-2scd-moc');
const default3SCD_selection_moc = document.getElementById('default-3scd-moc');
const default4SCD_selection_moc = document.getElementById('default-4scd-moc');
const defaultSCD_number_moc = document.getElementById('default-scd-number-moc-option');

default_user_selection.addEventListener('change', function(){
  if (this.value === 'default-user'){
    defaultSCD_0number.style.display = 'flex';
    defaultSCD_number.style.display = 'none';
    defaultSCD_number_moc.style.display = 'none';

    defaultSelect.value = 'default-0scd';
    default1SCD_selection.value = 'default-scd0';
    default2SCD_selection.value = 'default-scd0';
    default3SCD_selection.value = 'default-scd0';
    default4SCD_selection.value = 'default-scd0';

    defaultSelectMOC.value = 'default-0scd';
    default1SCD_selection_moc.value = 'default-scd0';
    default2SCD_selection_moc.value = 'default-scd0';
    default3SCD_selection_moc.value = 'default-scd0';
    default4SCD_selection_moc.value = 'default-scd0';

    function toggleDisplay(elementId, displayValue) {
      document.getElementById(elementId).style.display = displayValue;
    }

    toggleDisplay('default-scd-selection-pm-pic', 'flex');
    toggleDisplay('default-1scd-selection-pm-pic', 'none');
    toggleDisplay('default-2scd-selection-pm-pic', 'none');
    toggleDisplay('default-3scd-selection-pm-pic', 'none');
    toggleDisplay('default-4scd-selection-pm-pic', 'none');

    toggleDisplay('default-scd-selection-moc', 'none');
    toggleDisplay('default-1scd-selection-moc', 'none');
    toggleDisplay('default-2scd-selection-moc', 'none');
    toggleDisplay('default-3scd-selection-moc', 'none');
    toggleDisplay('default-4scd-selection-moc', 'none');

    const default1SCD_bottom_bar_pm_pic = document.getElementById('default-bottom-bar-pm-pic');
    const default1SCD_bottom_selection_pm_pic = document.getElementById('default-bottom-selection-pm-pic');
    const default1SCD_part1_loan = document.getElementById('default-part1-loan');
    const default1SCD_part3_return = document.getElementById('default-part3-return');
    const default1SCD_part1_loan_option = document.getElementById('default-part1-form-loan-option');
    const default1SCD_part3_return_option = document.getElementById('default-part3-form-return-option');

    default1SCD_bottom_bar_pm_pic.style.display = 'none';
    default1SCD_bottom_selection_pm_pic.style.display = 'none';
    default1SCD_part1_loan.style.display = 'none';
    default1SCD_part3_return.style.display = 'none';
    default1SCD_part1_loan_option.style.display = 'none';
    default1SCD_part3_return_option.style.display = 'none';

    const default2SCD_bottom_bar_pm_pic = document.getElementById('default-bottom-bar-2scd-pm-pic');
    const default2SCD_bottom_selection_pm_pic = document.getElementById('default-bottom-selection-2scd-pm-pic');
    const default2SCD_part1_loan = document.getElementById('default-part1-loan-2scd');
    const default2SCD_part3_return = document.getElementById('default-part3-return-2scd');
    const default2SCD_part1_loan_option = document.getElementById('default-part1-form-loan-option-2scd');
    const default2SCD_part3_return_option = document.getElementById('default-part3-form-return-option-2scd');

    default2SCD_bottom_bar_pm_pic.style.display = 'none';
    default2SCD_bottom_selection_pm_pic.style.display = 'none';
    default2SCD_part1_loan.style.display = 'none';
    default2SCD_part3_return.style.display = 'none';
    default2SCD_part1_loan_option.style.display = 'none';
    default2SCD_part3_return_option.style.display = 'none';

    const default3SCD_bottom_bar_pm_pic = document.getElementById('default-bottom-bar-3scd-pm-pic');
    const default3SCD_bottom_selection_pm_pic = document.getElementById('default-bottom-selection-3scd-pm-pic');
    const default3SCD_part1_loan = document.getElementById('default-part1-loan-3scd');
    const default3SCD_part3_return = document.getElementById('default-part3-return-3scd');
    const default3SCD_part1_loan_option = document.getElementById('default-part1-form-loan-option-3scd');
    const default3SCD_part3_return_option = document.getElementById('default-part3-form-return-option-3scd');

    default3SCD_bottom_bar_pm_pic.style.display = 'none';
    default3SCD_bottom_selection_pm_pic.style.display = 'none';
    default3SCD_part1_loan.style.display = 'none';
    default3SCD_part3_return.style.display = 'none';
    default3SCD_part1_loan_option.style.display = 'none';
    default3SCD_part3_return_option.style.display = 'none';

    const default4SCD_bottom_bar_pm_pic = document.getElementById('default-bottom-bar-4scd-pm-pic');
    const default4SCD_bottom_selection_pm_pic = document.getElementById('default-bottom-selection-4scd-pm-pic');
    const default4SCD_part1_loan = document.getElementById('default-part1-loan-4scd');
    const default4SCD_part3_return = document.getElementById('default-part3-return-4scd');
    const default4SCD_part1_loan_option = document.getElementById('default-part1-form-loan-option-4scd');
    const default4SCD_part3_return_option = document.getElementById('default-part3-form-return-option-4scd');

    default4SCD_bottom_bar_pm_pic.style.display = 'none';
    default4SCD_bottom_selection_pm_pic.style.display = 'none';
    default4SCD_part1_loan.style.display = 'none';
    default4SCD_part3_return.style.display = 'none';
    default4SCD_part1_loan_option.style.display = 'none';
    default4SCD_part3_return_option.style.display = 'none';

    const default1SCD_bottom_bar_moc = document.getElementById('default-bottom-bar-moc');
    const default1SCD_bottom_selection_moc = document.getElementById('default-bottom-selection-moc');
    const default1SCD_part2_loan = document.getElementById('default-part2-loan');
    const default1SCD_part4_return = document.getElementById('default-part4-return');
    const default1SCD_part2_loan_option = document.getElementById('default-part2-form-loan-option');
    const default1SCD_part4_return_option = document.getElementById('default-part4-form-return-option');

    default1SCD_bottom_bar_moc.style.display = 'none';
    default1SCD_bottom_selection_moc.style.display = 'none';
    default1SCD_part2_loan.style.display = 'none';
    default1SCD_part4_return.style.display = 'none';
    default1SCD_part2_loan_option.style.display = 'none';
    default1SCD_part4_return_option.style.display = 'none';

    const default2SCD_bottom_bar_moc = document.getElementById('default-bottom-bar-2scd-moc');
    const default2SCD_bottom_selection_moc = document.getElementById('default-bottom-selection-2scd-moc');
    const default2SCD_part2_loan = document.getElementById('default-part2-loan-2scd');
    const default2SCD_part4_return = document.getElementById('default-part4-return-2scd');
    const default2SCD_part2_loan_option = document.getElementById('default-part2-form-loan-option-2scd');
    const default2SCD_part4_return_option = document.getElementById('default-part4-form-return-option-2scd');

    default2SCD_bottom_bar_moc.style.display = 'none';
    default2SCD_bottom_selection_moc.style.display = 'none';
    default2SCD_part2_loan.style.display = 'none';
    default2SCD_part4_return.style.display = 'none';
    default2SCD_part2_loan_option.style.display = 'none';
    default2SCD_part4_return_option.style.display = 'none';

    const default3SCD_bottom_bar_moc = document.getElementById('default-bottom-bar-3scd-moc');
    const default3SCD_bottom_selection_moc = document.getElementById('default-bottom-selection-3scd-moc');
    const default3SCD_part2_loan = document.getElementById('default-part2-loan-3scd');
    const default3SCD_part4_return = document.getElementById('default-part4-return-3scd');
    const default3SCD_part2_loan_option = document.getElementById('default-part2-form-loan-option-3scd');
    const default3SCD_part4_return_option = document.getElementById('default-part4-form-return-option-3scd');

    default3SCD_bottom_bar_moc.style.display = 'none';
    default3SCD_bottom_selection_moc.style.display = 'none';
    default3SCD_part2_loan.style.display = 'none';
    default3SCD_part4_return.style.display = 'none';
    default3SCD_part2_loan_option.style.display = 'none';
    default3SCD_part4_return_option.style.display = 'none';

    const default4SCD_bottom_bar_moc = document.getElementById('default-bottom-bar-4scd-moc');
    const default4SCD_bottom_selection_moc = document.getElementById('default-bottom-selection-4scd-moc');
    const default4SCD_part2_loan = document.getElementById('default-part2-loan-4scd');
    const default4SCD_part4_return = document.getElementById('default-part4-return-4scd');
    const default4SCD_part2_loan_option = document.getElementById('default-part2-form-loan-option-4scd');
    const default4SCD_part4_return_option = document.getElementById('default-part4-form-return-option-4scd');

    default4SCD_bottom_bar_moc.style.display = 'none';
    default4SCD_bottom_selection_moc.style.display = 'none';
    default4SCD_part2_loan.style.display = 'none';
    default4SCD_part4_return.style.display = 'none';
    default4SCD_part2_loan_option.style.display = 'none';
    default4SCD_part4_return_option.style.display = 'none';

  } else if (this.value === 'default-pm-pic'){
    defaultSCD_0number.style.display = 'none';
    defaultSCD_number.style.display = 'flex';
    defaultSCD_number_moc.style.display = 'none';

    defaultSelect.value = 'default-0scd';
    default1SCD_selection.value = 'default-scd0';
    default2SCD_selection.value = 'default-scd0';
    default3SCD_selection.value = 'default-scd0';
    default4SCD_selection.value = 'default-scd0';

    defaultSelectMOC.value = 'default-0scd';
    default1SCD_selection_moc.value = 'default-scd0';
    default2SCD_selection_moc.value = 'default-scd0';
    default3SCD_selection_moc.value = 'default-scd0';
    default4SCD_selection_moc.value = 'default-scd0';

    function toggleDisplay(elementId, displayValue) {
      document.getElementById(elementId).style.display = displayValue;
    }

    toggleDisplay('default-scd-selection-pm-pic', 'flex');
    toggleDisplay('default-1scd-selection-pm-pic', 'none');
    toggleDisplay('default-2scd-selection-pm-pic', 'none');
    toggleDisplay('default-3scd-selection-pm-pic', 'none');
    toggleDisplay('default-4scd-selection-pm-pic', 'none');

    toggleDisplay('default-scd-selection-moc', 'none');
    toggleDisplay('default-1scd-selection-moc', 'none');
    toggleDisplay('default-2scd-selection-moc', 'none');
    toggleDisplay('default-3scd-selection-moc', 'none');
    toggleDisplay('default-4scd-selection-moc', 'none');

    const default1SCD_bottom_bar_pm_pic = document.getElementById('default-bottom-bar-pm-pic');
    const default1SCD_bottom_selection_pm_pic = document.getElementById('default-bottom-selection-pm-pic');
    const default1SCD_part1_loan = document.getElementById('default-part1-loan');
    const default1SCD_part3_return = document.getElementById('default-part3-return');
    const default1SCD_part1_loan_option = document.getElementById('default-part1-form-loan-option');
    const default1SCD_part3_return_option = document.getElementById('default-part3-form-return-option');

    default1SCD_bottom_bar_pm_pic.style.display = 'none';
    default1SCD_bottom_selection_pm_pic.style.display = 'none';
    default1SCD_part1_loan.style.display = 'none';
    default1SCD_part3_return.style.display = 'none';
    default1SCD_part1_loan_option.style.display = 'none';
    default1SCD_part3_return_option.style.display = 'none';

    const default2SCD_bottom_bar_pm_pic = document.getElementById('default-bottom-bar-2scd-pm-pic');
    const default2SCD_bottom_selection_pm_pic = document.getElementById('default-bottom-selection-2scd-pm-pic');
    const default2SCD_part1_loan = document.getElementById('default-part1-loan-2scd');
    const default2SCD_part3_return = document.getElementById('default-part3-return-2scd');
    const default2SCD_part1_loan_option = document.getElementById('default-part1-form-loan-option-2scd');
    const default2SCD_part3_return_option = document.getElementById('default-part3-form-return-option-2scd');

    default2SCD_bottom_bar_pm_pic.style.display = 'none';
    default2SCD_bottom_selection_pm_pic.style.display = 'none';
    default2SCD_part1_loan.style.display = 'none';
    default2SCD_part3_return.style.display = 'none';
    default2SCD_part1_loan_option.style.display = 'none';
    default2SCD_part3_return_option.style.display = 'none';

    const default3SCD_bottom_bar_pm_pic = document.getElementById('default-bottom-bar-3scd-pm-pic');
    const default3SCD_bottom_selection_pm_pic = document.getElementById('default-bottom-selection-3scd-pm-pic');
    const default3SCD_part1_loan = document.getElementById('default-part1-loan-3scd');
    const default3SCD_part3_return = document.getElementById('default-part3-return-3scd');
    const default3SCD_part1_loan_option = document.getElementById('default-part1-form-loan-option-3scd');
    const default3SCD_part3_return_option = document.getElementById('default-part3-form-return-option-3scd');

    default3SCD_bottom_bar_pm_pic.style.display = 'none';
    default3SCD_bottom_selection_pm_pic.style.display = 'none';
    default3SCD_part1_loan.style.display = 'none';
    default3SCD_part3_return.style.display = 'none';
    default3SCD_part1_loan_option.style.display = 'none';
    default3SCD_part3_return_option.style.display = 'none';

    const default4SCD_bottom_bar_pm_pic = document.getElementById('default-bottom-bar-4scd-pm-pic');
    const default4SCD_bottom_selection_pm_pic = document.getElementById('default-bottom-selection-4scd-pm-pic');
    const default4SCD_part1_loan = document.getElementById('default-part1-loan-4scd');
    const default4SCD_part3_return = document.getElementById('default-part3-return-4scd');
    const default4SCD_part1_loan_option = document.getElementById('default-part1-form-loan-option-4scd');
    const default4SCD_part3_return_option = document.getElementById('default-part3-form-return-option-4scd');

    default4SCD_bottom_bar_pm_pic.style.display = 'none';
    default4SCD_bottom_selection_pm_pic.style.display = 'none';
    default4SCD_part1_loan.style.display = 'none';
    default4SCD_part3_return.style.display = 'none';
    default4SCD_part1_loan_option.style.display = 'none';
    default4SCD_part3_return_option.style.display = 'none';

    const default1SCD_bottom_bar_moc = document.getElementById('default-bottom-bar-moc');
    const default1SCD_bottom_selection_moc = document.getElementById('default-bottom-selection-moc');
    const default1SCD_part2_loan = document.getElementById('default-part2-loan');
    const default1SCD_part4_return = document.getElementById('default-part4-return');
    const default1SCD_part2_loan_option = document.getElementById('default-part2-form-loan-option');
    const default1SCD_part4_return_option = document.getElementById('default-part4-form-return-option');

    default1SCD_bottom_bar_moc.style.display = 'none';
    default1SCD_bottom_selection_moc.style.display = 'none';
    default1SCD_part2_loan.style.display = 'none';
    default1SCD_part4_return.style.display = 'none';
    default1SCD_part2_loan_option.style.display = 'none';
    default1SCD_part4_return_option.style.display = 'none';

    const default2SCD_bottom_bar_moc = document.getElementById('default-bottom-bar-2scd-moc');
    const default2SCD_bottom_selection_moc = document.getElementById('default-bottom-selection-2scd-moc');
    const default2SCD_part2_loan = document.getElementById('default-part2-loan-2scd');
    const default2SCD_part4_return = document.getElementById('default-part4-return-2scd');
    const default2SCD_part2_loan_option = document.getElementById('default-part2-form-loan-option-2scd');
    const default2SCD_part4_return_option = document.getElementById('default-part4-form-return-option-2scd');

    default2SCD_bottom_bar_moc.style.display = 'none';
    default2SCD_bottom_selection_moc.style.display = 'none';
    default2SCD_part2_loan.style.display = 'none';
    default2SCD_part4_return.style.display = 'none';
    default2SCD_part2_loan_option.style.display = 'none';
    default2SCD_part4_return_option.style.display = 'none';

    const default3SCD_bottom_bar_moc = document.getElementById('default-bottom-bar-3scd-moc');
    const default3SCD_bottom_selection_moc = document.getElementById('default-bottom-selection-3scd-moc');
    const default3SCD_part2_loan = document.getElementById('default-part2-loan-3scd');
    const default3SCD_part4_return = document.getElementById('default-part4-return-3scd');
    const default3SCD_part2_loan_option = document.getElementById('default-part2-form-loan-option-3scd');
    const default3SCD_part4_return_option = document.getElementById('default-part4-form-return-option-3scd');

    default3SCD_bottom_bar_moc.style.display = 'none';
    default3SCD_bottom_selection_moc.style.display = 'none';
    default3SCD_part2_loan.style.display = 'none';
    default3SCD_part4_return.style.display = 'none';
    default3SCD_part2_loan_option.style.display = 'none';
    default3SCD_part4_return_option.style.display = 'none';

    const default4SCD_bottom_bar_moc = document.getElementById('default-bottom-bar-4scd-moc');
    const default4SCD_bottom_selection_moc = document.getElementById('default-bottom-selection-4scd-moc');
    const default4SCD_part2_loan = document.getElementById('default-part2-loan-4scd');
    const default4SCD_part4_return = document.getElementById('default-part4-return-4scd');
    const default4SCD_part2_loan_option = document.getElementById('default-part2-form-loan-option-4scd');
    const default4SCD_part4_return_option = document.getElementById('default-part4-form-return-option-4scd');

    default4SCD_bottom_bar_moc.style.display = 'none';
    default4SCD_bottom_selection_moc.style.display = 'none';
    default4SCD_part2_loan.style.display = 'none';
    default4SCD_part4_return.style.display = 'none';
    default4SCD_part2_loan_option.style.display = 'none';
    default4SCD_part4_return_option.style.display = 'none';

    defaultSelect.addEventListener('change', function() {
      switch (this.value) {
        case 'default-0scd':
          toggleDisplay('default-scd-selection-pm-pic', 'flex');
          toggleDisplay('default-1scd-selection-pm-pic', 'none');
          toggleDisplay('default-2scd-selection-pm-pic', 'none');
          toggleDisplay('default-3scd-selection-pm-pic', 'none');
          toggleDisplay('default-4scd-selection-pm-pic', 'none');

          toggleDisplay('default-bottom-bar-pm-pic', 'none');
          toggleDisplay('default-bottom-selection-pm-pic', 'none');
          toggleDisplay('default-part1-loan', 'none');
          toggleDisplay('default-part3-return', 'none');
          toggleDisplay('default-part1-form-loan-option', 'none');
          toggleDisplay('default-part3-form-return-option', 'none');

          toggleDisplay('default-bottom-bar-2scd-pm-pic', 'none');
          toggleDisplay('default-bottom-selection-2scd-pm-pic', 'none');
          toggleDisplay('default-part1-loan-2scd', 'none');
          toggleDisplay('default-part3-return-2scd', 'none');
          toggleDisplay('default-part1-form-loan-option-2scd', 'none');
          toggleDisplay('default-part3-form-return-option-2scd', 'none');

          toggleDisplay('default-bottom-bar-3scd-pm-pic', 'none');
          toggleDisplay('default-bottom-selection-3scd-pm-pic', 'none');
          toggleDisplay('default-part1-loan-3scd', 'none');
          toggleDisplay('default-part3-return-3scd', 'none');
          toggleDisplay('default-part1-form-loan-option-3scd', 'none');
          toggleDisplay('default-part3-form-return-option-3scd', 'none');

          toggleDisplay('default-bottom-bar-4scd-pm-pic', 'none');
          toggleDisplay('default-bottom-selection-4scd-pm-pic', 'none');
          toggleDisplay('default-part1-loan-4scd', 'none');
          toggleDisplay('default-part3-return-4scd', 'none');
          toggleDisplay('default-part1-form-loan-option-4scd', 'none');
          toggleDisplay('default-part3-form-return-option-4scd', 'none');
          break;

        case 'default-1scd':
          toggleDisplay('default-scd-selection-pm-pic', 'none');
          toggleDisplay('default-1scd-selection-pm-pic', 'flex');
          toggleDisplay('default-2scd-selection-pm-pic', 'none');
          toggleDisplay('default-3scd-selection-pm-pic', 'none');
          toggleDisplay('default-4scd-selection-pm-pic', 'none');

          toggleDisplay('default-bottom-bar-pm-pic', 'flex');
          toggleDisplay('default-bottom-selection-pm-pic', 'flex');
          toggleDisplay('default-part1-loan', 'flex');
          toggleDisplay('default-part3-return', 'flex');
          toggleDisplay('default-part1-form-loan-option', 'flex');
          toggleDisplay('default-part3-form-return-option', 'flex');

          toggleDisplay('default-bottom-bar-2scd-pm-pic', 'none');
          toggleDisplay('default-bottom-selection-2scd-pm-pic', 'none');
          toggleDisplay('default-part1-loan-2scd', 'none');
          toggleDisplay('default-part3-return-2scd', 'none');
          toggleDisplay('default-part1-form-loan-option-2scd', 'none');
          toggleDisplay('default-part3-form-return-option-2scd', 'none');

          toggleDisplay('default-bottom-bar-3scd-pm-pic', 'none');
          toggleDisplay('default-bottom-selection-3scd-pm-pic', 'none');
          toggleDisplay('default-part1-loan-3scd', 'none');
          toggleDisplay('default-part3-return-3scd', 'none');
          toggleDisplay('default-part1-form-loan-option-3scd', 'none');
          toggleDisplay('default-part3-form-return-option-3scd', 'none');

          toggleDisplay('default-bottom-bar-4scd-pm-pic', 'none');
          toggleDisplay('default-bottom-selection-4scd-pm-pic', 'none');
          toggleDisplay('default-part1-loan-4scd', 'none');
          toggleDisplay('default-part3-return-4scd', 'none');
          toggleDisplay('default-part1-form-loan-option-4scd', 'none');
          toggleDisplay('default-part3-form-return-option-4scd', 'none');

          default1SCD_selection.value = 'default-scd0';
          toggleDisplay('default-scd1-loan', 'none');
          toggleDisplay('default-scd2-loan', 'none');
          toggleDisplay('default-scd3-loan', 'none');
          toggleDisplay('default-scd4-loan', 'none');

          toggleDisplay('default-scd1-return', 'none');
          toggleDisplay('default-scd2-return', 'none');
          toggleDisplay('default-scd3-return', 'none');
          toggleDisplay('default-scd4-return', 'none');

          default1SCD_selection.addEventListener('change', function() {
            if (this.value === 'default-scd0') {
              toggleDisplay('default-scd1-loan', 'none');
              toggleDisplay('default-scd2-loan', 'none');
              toggleDisplay('default-scd3-loan', 'none');
              toggleDisplay('default-scd4-loan', 'none');
    
              toggleDisplay('default-scd1-return', 'none');
              toggleDisplay('default-scd2-return', 'none');
              toggleDisplay('default-scd3-return', 'none');
              toggleDisplay('default-scd4-return', 'none');
            } else if (this.value === 'default-scd1') {
              toggleDisplay('default-scd1-loan', 'flex');
              toggleDisplay('default-scd2-loan', 'none');
              toggleDisplay('default-scd3-loan', 'none');
              toggleDisplay('default-scd4-loan', 'none');
    
              toggleDisplay('default-scd1-return', 'flex');
              toggleDisplay('default-scd2-return', 'none');
              toggleDisplay('default-scd3-return', 'none');
              toggleDisplay('default-scd4-return', 'none');
            } else if (this.value === 'default-scd2') {
              toggleDisplay('default-scd1-loan', 'none');
              toggleDisplay('default-scd2-loan', 'flex');
              toggleDisplay('default-scd3-loan', 'none');
              toggleDisplay('default-scd4-loan', 'none');
    
              toggleDisplay('default-scd1-return', 'none');
              toggleDisplay('default-scd2-return', 'flex');
              toggleDisplay('default-scd3-return', 'none');
              toggleDisplay('default-scd4-return', 'none');
            } else if (this.value === 'default-scd3') {
              toggleDisplay('default-scd1-loan', 'none');
              toggleDisplay('default-scd2-loan', 'none');
              toggleDisplay('default-scd3-loan', 'flex');
              toggleDisplay('default-scd4-loan', 'none');
    
              toggleDisplay('default-scd1-return', 'none');
              toggleDisplay('default-scd2-return', 'none');
              toggleDisplay('default-scd3-return', 'flex');
              toggleDisplay('default-scd4-return', 'none');
            } else if (this.value === 'default-scd4') {
              toggleDisplay('default-scd1-loan', 'none');
              toggleDisplay('default-scd2-loan', 'none');
              toggleDisplay('default-scd3-loan', 'none');
              toggleDisplay('default-scd4-loan', 'flex');
    
              toggleDisplay('default-scd1-return', 'none');
              toggleDisplay('default-scd2-return', 'none');
              toggleDisplay('default-scd3-return', 'none');
              toggleDisplay('default-scd4-return', 'flex');
            }
          });
          break;
    
        case 'default-2scd':
          toggleDisplay('default-scd-selection-pm-pic', 'none');
          toggleDisplay('default-1scd-selection-pm-pic', 'none');
          toggleDisplay('default-2scd-selection-pm-pic', 'flex');
          toggleDisplay('default-3scd-selection-pm-pic', 'none');
          toggleDisplay('default-4scd-selection-pm-pic', 'none');

          toggleDisplay('default-bottom-bar-pm-pic', 'none');
          toggleDisplay('default-bottom-selection-pm-pic', 'none');
          toggleDisplay('default-part1-loan', 'none');
          toggleDisplay('default-part3-return', 'none');
          toggleDisplay('default-part1-form-loan-option', 'none');
          toggleDisplay('default-part3-form-return-option', 'none');

          toggleDisplay('default-bottom-bar-2scd-pm-pic', 'flex');
          toggleDisplay('default-bottom-selection-2scd-pm-pic', 'flex');
          toggleDisplay('default-part1-loan-2scd', 'flex');
          toggleDisplay('default-part3-return-2scd', 'flex');
          toggleDisplay('default-part1-form-loan-option-2scd', 'flex');
          toggleDisplay('default-part3-form-return-option-2scd', 'flex');

          toggleDisplay('default-bottom-bar-3scd-pm-pic', 'none');
          toggleDisplay('default-bottom-selection-3scd-pm-pic', 'none');
          toggleDisplay('default-part1-loan-3scd', 'none');
          toggleDisplay('default-part3-return-3scd', 'none');
          toggleDisplay('default-part1-form-loan-option-3scd', 'none');
          toggleDisplay('default-part3-form-return-option-3scd', 'none');

          toggleDisplay('default-bottom-bar-4scd-pm-pic', 'none');
          toggleDisplay('default-bottom-selection-4scd-pm-pic', 'none');
          toggleDisplay('default-part1-loan-4scd', 'none');
          toggleDisplay('default-part3-return-4scd', 'none');
          toggleDisplay('default-part1-form-loan-option-4scd', 'none');
          toggleDisplay('default-part3-form-return-option-4scd', 'none');

          default2SCD_selection.value = 'default-scd0';
          toggleDisplay('default-scd1-2-loan', 'none');
          toggleDisplay('default-scd1-3-loan', 'none');
          toggleDisplay('default-scd1-4-loan', 'none');
          toggleDisplay('default-scd2-3-loan', 'none');
          toggleDisplay('default-scd2-4-loan', 'none');
          toggleDisplay('default-scd3-4-loan', 'none');
          toggleDisplay('default-scd1-2-return', 'none');
          toggleDisplay('default-scd1-3-return', 'none');
          toggleDisplay('default-scd1-4-return', 'none');
          toggleDisplay('default-scd2-3-return', 'none');
          toggleDisplay('default-scd2-4-return', 'none');
          toggleDisplay('default-scd3-4-return', 'none');
    
          default2SCD_selection.addEventListener('change', function() {
            if (this.value === 'default-scd0') {
              toggleDisplay('default-scd1-2-loan', 'none');
              toggleDisplay('default-scd1-3-loan', 'none');
              toggleDisplay('default-scd1-4-loan', 'none');
              toggleDisplay('default-scd2-3-loan', 'none');
              toggleDisplay('default-scd2-4-loan', 'none');
              toggleDisplay('default-scd3-4-loan', 'none');
    
              toggleDisplay('default-scd1-2-return', 'none');
              toggleDisplay('default-scd1-3-return', 'none');
              toggleDisplay('default-scd1-4-return', 'none');
              toggleDisplay('default-scd2-3-return', 'none');
              toggleDisplay('default-scd2-4-return', 'none');
              toggleDisplay('default-scd3-4-return', 'none');
            } else if (this.value === 'default-scd1-2') {
              toggleDisplay('default-scd1-2-loan', 'flex');
              toggleDisplay('default-scd1-3-loan', 'none');
              toggleDisplay('default-scd1-4-loan', 'none');
              toggleDisplay('default-scd2-3-loan', 'none');
              toggleDisplay('default-scd2-4-loan', 'none');
              toggleDisplay('default-scd3-4-loan', 'none');
    
              toggleDisplay('default-scd1-2-return', 'flex');
              toggleDisplay('default-scd1-3-return', 'none');
              toggleDisplay('default-scd1-4-return', 'none');
              toggleDisplay('default-scd2-3-return', 'none');
              toggleDisplay('default-scd2-4-return', 'none');
              toggleDisplay('default-scd3-4-return', 'none');
            } else if (this.value === 'default-scd1-3') {
              toggleDisplay('default-scd1-2-loan', 'none');
              toggleDisplay('default-scd1-3-loan', 'flex');
              toggleDisplay('default-scd1-4-loan', 'none');
              toggleDisplay('default-scd2-3-loan', 'none');
              toggleDisplay('default-scd2-4-loan', 'none');
              toggleDisplay('default-scd3-4-loan', 'none');
    
              toggleDisplay('default-scd1-2-return', 'none');
              toggleDisplay('default-scd1-3-return', 'flex');
              toggleDisplay('default-scd1-4-return', 'none');
              toggleDisplay('default-scd2-3-return', 'none');
              toggleDisplay('default-scd2-4-return', 'none');
              toggleDisplay('default-scd3-4-return', 'none');
            } else if (this.value === 'default-scd1-4') {
              toggleDisplay('default-scd1-2-loan', 'none');
              toggleDisplay('default-scd1-3-loan', 'none');
              toggleDisplay('default-scd1-4-loan', 'flex');
              toggleDisplay('default-scd2-3-loan', 'none');
              toggleDisplay('default-scd2-4-loan', 'none');
              toggleDisplay('default-scd3-4-loan', 'none');
    
              toggleDisplay('default-scd1-2-return', 'none');
              toggleDisplay('default-scd1-3-return', 'none');
              toggleDisplay('default-scd1-4-return', 'flex');
              toggleDisplay('default-scd2-3-return', 'none');
              toggleDisplay('default-scd2-4-return', 'none');
              toggleDisplay('default-scd3-4-return', 'none');
            } else if (this.value === 'default-scd2-3') {
              toggleDisplay('default-scd1-2-loan', 'none');
              toggleDisplay('default-scd1-3-loan', 'none');
              toggleDisplay('default-scd1-4-loan', 'none');
              toggleDisplay('default-scd2-3-loan', 'flex');
              toggleDisplay('default-scd2-4-loan', 'none');
              toggleDisplay('default-scd3-4-loan', 'none');
    
              toggleDisplay('default-scd1-2-return', 'none');
              toggleDisplay('default-scd1-3-return', 'none');
              toggleDisplay('default-scd1-4-return', 'none');
              toggleDisplay('default-scd2-3-return', 'flex');
              toggleDisplay('default-scd2-4-return', 'none');
              toggleDisplay('default-scd3-4-return', 'none');
            } else if (this.value === 'default-scd2-4') {
              toggleDisplay('default-scd1-2-loan', 'none');
              toggleDisplay('default-scd1-3-loan', 'none');
              toggleDisplay('default-scd1-4-loan', 'none');
              toggleDisplay('default-scd2-3-loan', 'none');
              toggleDisplay('default-scd2-4-loan', 'flex');
              toggleDisplay('default-scd3-4-loan', 'none');
    
              toggleDisplay('default-scd1-2-return', 'none');
              toggleDisplay('default-scd1-3-return', 'none');
              toggleDisplay('default-scd1-4-return', 'none');
              toggleDisplay('default-scd2-3-return', 'none');
              toggleDisplay('default-scd2-4-return', 'flex');
              toggleDisplay('default-scd3-4-return', 'none');
            } else if (this.value === 'default-scd3-4') {
              toggleDisplay('default-scd1-2-loan', 'none');
              toggleDisplay('default-scd1-3-loan', 'none');
              toggleDisplay('default-scd1-4-loan', 'none');
              toggleDisplay('default-scd2-3-loan', 'none');
              toggleDisplay('default-scd2-4-loan', 'none');
              toggleDisplay('default-scd3-4-loan', 'flex');
    
              toggleDisplay('default-scd1-2-return', 'none');
              toggleDisplay('default-scd1-3-return', 'none');
              toggleDisplay('default-scd1-4-return', 'none');
              toggleDisplay('default-scd2-3-return', 'none');
              toggleDisplay('default-scd2-4-return', 'none');
              toggleDisplay('default-scd3-4-return', 'flex');
            }
          });
          break;
        
        case 'default-3scd':
          toggleDisplay('default-scd-selection-pm-pic', 'none');
          toggleDisplay('default-1scd-selection-pm-pic', 'none');
          toggleDisplay('default-2scd-selection-pm-pic', 'none');
          toggleDisplay('default-3scd-selection-pm-pic', 'flex');
          toggleDisplay('default-4scd-selection-pm-pic', 'none');

          toggleDisplay('default-bottom-bar-pm-pic', 'none');
          toggleDisplay('default-bottom-selection-pm-pic', 'none');
          toggleDisplay('default-part1-loan', 'none');
          toggleDisplay('default-part3-return', 'none');
          toggleDisplay('default-part1-form-loan-option', 'none');
          toggleDisplay('default-part3-form-return-option', 'none');

          toggleDisplay('default-bottom-bar-2scd-pm-pic', 'none');
          toggleDisplay('default-bottom-selection-2scd-pm-pic', 'none');
          toggleDisplay('default-part1-loan-2scd', 'none');
          toggleDisplay('default-part3-return-2scd', 'none');
          toggleDisplay('default-part1-form-loan-option-2scd', 'none');
          toggleDisplay('default-part3-form-return-option-2scd', 'none');

          toggleDisplay('default-bottom-bar-3scd-pm-pic', 'flex');
          toggleDisplay('default-bottom-selection-3scd-pm-pic', 'flex');
          toggleDisplay('default-part1-loan-3scd', 'flex');
          toggleDisplay('default-part3-return-3scd', 'flex');
          toggleDisplay('default-part1-form-loan-option-3scd', 'flex');
          toggleDisplay('default-part3-form-return-option-3scd', 'flex');

          toggleDisplay('default-bottom-bar-4scd-pm-pic', 'none');
          toggleDisplay('default-bottom-selection-4scd-pm-pic', 'none');
          toggleDisplay('default-part1-loan-4scd', 'none');
          toggleDisplay('default-part3-return-4scd', 'none');
          toggleDisplay('default-part1-form-loan-option-4scd', 'none');
          toggleDisplay('default-part3-form-return-option-4scd', 'none');

          default3SCD_selection.value = 'default-scd0';
          toggleDisplay('default-scd1-2-3-loan', 'none');
          toggleDisplay('default-scd1-2-4-loan', 'none');
          toggleDisplay('default-scd1-3-4-loan', 'none');
          toggleDisplay('default-scd2-3-4-loan', 'none');
          toggleDisplay('default-scd1-2-3-return', 'none');
          toggleDisplay('default-scd1-2-4-return', 'none');
          toggleDisplay('default-scd1-3-4-return', 'none');
          toggleDisplay('default-scd2-3-4-return', 'none');
    
          default3SCD_selection.addEventListener('change', function() {
            if (this.value === 'default-scd0') {
              toggleDisplay('default-scd1-2-3-loan', 'none');
              toggleDisplay('default-scd1-2-4-loan', 'none');
              toggleDisplay('default-scd1-3-4-loan', 'none');
              toggleDisplay('default-scd2-3-4-loan', 'none');
    
              toggleDisplay('default-scd1-2-3-return', 'none');
              toggleDisplay('default-scd1-2-4-return', 'none');
              toggleDisplay('default-scd1-3-4-return', 'none');
              toggleDisplay('default-scd2-3-4-return', 'none');
            } else if (this.value === 'default-scd1-2-3') {
              toggleDisplay('default-scd1-2-3-loan', 'flex');
              toggleDisplay('default-scd1-2-4-loan', 'none');
              toggleDisplay('default-scd1-3-4-loan', 'none');
              toggleDisplay('default-scd2-3-4-loan', 'none');
    
              toggleDisplay('default-scd1-2-3-return', 'flex');
              toggleDisplay('default-scd1-2-4-return', 'none');
              toggleDisplay('default-scd1-3-4-return', 'none');
              toggleDisplay('default-scd2-3-4-return', 'none');
            } else if (this.value === 'default-scd1-2-4') {
              toggleDisplay('default-scd1-2-3-loan', 'none');
              toggleDisplay('default-scd1-2-4-loan', 'flex');
              toggleDisplay('default-scd1-3-4-loan', 'none');
              toggleDisplay('default-scd2-3-4-loan', 'none');
    
              toggleDisplay('default-scd1-2-3-return', 'none');
              toggleDisplay('default-scd1-2-4-return', 'flex');
              toggleDisplay('default-scd1-3-4-return', 'none');
              toggleDisplay('default-scd2-3-4-return', 'none');
            } else if (this.value === 'default-scd1-3-4') {
              toggleDisplay('default-scd1-2-3-loan', 'none');
              toggleDisplay('default-scd1-2-4-loan', 'none');
              toggleDisplay('default-scd1-3-4-loan', 'flex');
              toggleDisplay('default-scd2-3-4-loan', 'none');
    
              toggleDisplay('default-scd1-2-3-return', 'none');
              toggleDisplay('default-scd1-2-4-return', 'none');
              toggleDisplay('default-scd1-3-4-return', 'flex');
              toggleDisplay('default-scd2-3-4-return', 'none');
            } else if (this.value === 'default-scd2-3-4') {
              toggleDisplay('default-scd1-2-3-loan', 'none');
              toggleDisplay('default-scd1-2-4-loan', 'none');
              toggleDisplay('default-scd1-3-4-loan', 'none');
              toggleDisplay('default-scd2-3-4-loan', 'flex');
    
              toggleDisplay('default-scd1-2-3-return', 'none');
              toggleDisplay('default-scd1-2-4-return', 'none');
              toggleDisplay('default-scd1-3-4-return', 'none');
              toggleDisplay('default-scd2-3-4-return', 'flex');
            }
          });
          break;
    
        case 'default-4scd':
          toggleDisplay('default-scd-selection-pm-pic', 'none');
          toggleDisplay('default-1scd-selection-pm-pic', 'none');
          toggleDisplay('default-2scd-selection-pm-pic', 'none');
          toggleDisplay('default-3scd-selection-pm-pic', 'none');
          toggleDisplay('default-4scd-selection-pm-pic', 'flex');

          toggleDisplay('default-bottom-bar-pm-pic', 'none');
          toggleDisplay('default-bottom-selection-pm-pic', 'none');
          toggleDisplay('default-part1-loan', 'none');
          toggleDisplay('default-part3-return', 'none');
          toggleDisplay('default-part1-form-loan-option', 'none');
          toggleDisplay('default-part3-form-return-option', 'none');

          toggleDisplay('default-bottom-bar-2scd-pm-pic', 'none');
          toggleDisplay('default-bottom-selection-2scd-pm-pic', 'none');
          toggleDisplay('default-part1-loan-2scd', 'none');
          toggleDisplay('default-part3-return-2scd', 'none');
          toggleDisplay('default-part1-form-loan-option-2scd', 'none');
          toggleDisplay('default-part3-form-return-option-2scd', 'none');

          toggleDisplay('default-bottom-bar-3scd-pm-pic', 'none');
          toggleDisplay('default-bottom-selection-3scd-pm-pic', 'none');
          toggleDisplay('default-part1-loan-3scd', 'none');
          toggleDisplay('default-part3-return-3scd', 'none');
          toggleDisplay('default-part1-form-loan-option-3scd', 'none');
          toggleDisplay('default-part3-form-return-option-3scd', 'none');

          toggleDisplay('default-bottom-bar-4scd-pm-pic', 'flex');
          toggleDisplay('default-bottom-selection-4scd-pm-pic', 'flex');
          toggleDisplay('default-part1-loan-4scd', 'flex');
          toggleDisplay('default-part3-return-4scd', 'flex');
          toggleDisplay('default-part1-form-loan-option-4scd', 'flex');
          toggleDisplay('default-part3-form-return-option-4scd', 'flex');

          default4SCD_selection.value = 'default-scd0';
          toggleDisplay('default-scd1-2-3-4-loan', 'none');
          toggleDisplay('default-scd1-2-3-4-return', 'none');
    
          default4SCD_selection.addEventListener('change', function() {
            if (this.value === 'default-scd0') {
              toggleDisplay('default-scd1-2-3-4-loan', 'none');
    
              toggleDisplay('default-scd1-2-3-4-return', 'none');
            } else if (this.value === 'default-scd1-2-3-4') {
              toggleDisplay('default-scd1-2-3-4-loan', 'flex');
    
              toggleDisplay('default-scd1-2-3-4-return', 'flex');
            }
          });
          break;
      };
    });
  } else if (this.value === 'default-moc') {
    defaultSCD_0number.style.display = 'none';
    defaultSCD_number.style.display = 'none';
    defaultSCD_number_moc.style.display = 'flex';

    defaultSelect.value = 'default-0scd';
    default1SCD_selection.value = 'default-scd0';
    default2SCD_selection.value = 'default-scd0';
    default3SCD_selection.value = 'default-scd0';
    default4SCD_selection.value = 'default-scd0';

    defaultSelectMOC.value = 'default-0scd';
    default1SCD_selection_moc.value = 'default-scd0';
    default2SCD_selection_moc.value = 'default-scd0';
    default3SCD_selection_moc.value = 'default-scd0';
    default4SCD_selection_moc.value = 'default-scd0';

    function toggleDisplay(elementId, displayValue) {
      const element = document.getElementById(elementId);
      if (element) {
        element.style.display = displayValue;
      } else {
        console.warn(`Element with ID ${elementId} not found`);
      }
    }

    toggleDisplay('default-scd-selection-pm-pic', 'none');
    toggleDisplay('default-1scd-selection-pm-pic', 'none');
    toggleDisplay('default-2scd-selection-pm-pic', 'none');
    toggleDisplay('default-3scd-selection-pm-pic', 'none');
    toggleDisplay('default-4scd-selection-pm-pic', 'none');

    toggleDisplay('default-scd-selection-moc', 'flex');
    toggleDisplay('default-1scd-selection-moc', 'none');
    toggleDisplay('default-2scd-selection-moc', 'none');
    toggleDisplay('default-3scd-selection-moc', 'none');
    toggleDisplay('default-4scd-selection-moc', 'none');

    const default1SCD_bottom_bar_pm_pic = document.getElementById('default-bottom-bar-pm-pic');
    const default1SCD_bottom_selection_pm_pic = document.getElementById('default-bottom-selection-pm-pic');
    const default1SCD_part1_loan = document.getElementById('default-part1-loan');
    const default1SCD_part3_return = document.getElementById('default-part3-return');
    const default1SCD_part1_loan_option = document.getElementById('default-part1-form-loan-option');
    const default1SCD_part3_return_option = document.getElementById('default-part3-form-return-option');

    default1SCD_bottom_bar_pm_pic.style.display = 'none';
    default1SCD_bottom_selection_pm_pic.style.display = 'none';
    default1SCD_part1_loan.style.display = 'none';
    default1SCD_part3_return.style.display = 'none';
    default1SCD_part1_loan_option.style.display = 'none';
    default1SCD_part3_return_option.style.display = 'none';

    const default2SCD_bottom_bar_pm_pic = document.getElementById('default-bottom-bar-2scd-pm-pic');
    const default2SCD_bottom_selection_pm_pic = document.getElementById('default-bottom-selection-2scd-pm-pic');
    const default2SCD_part1_loan = document.getElementById('default-part1-loan-2scd');
    const default2SCD_part3_return = document.getElementById('default-part3-return-2scd');
    const default2SCD_part1_loan_option = document.getElementById('default-part1-form-loan-option-2scd');
    const default2SCD_part3_return_option = document.getElementById('default-part3-form-return-option-2scd');

    default2SCD_bottom_bar_pm_pic.style.display = 'none';
    default2SCD_bottom_selection_pm_pic.style.display = 'none';
    default2SCD_part1_loan.style.display = 'none';
    default2SCD_part3_return.style.display = 'none';
    default2SCD_part1_loan_option.style.display = 'none';
    default2SCD_part3_return_option.style.display = 'none';

    const default3SCD_bottom_bar_pm_pic = document.getElementById('default-bottom-bar-3scd-pm-pic');
    const default3SCD_bottom_selection_pm_pic = document.getElementById('default-bottom-selection-3scd-pm-pic');
    const default3SCD_part1_loan = document.getElementById('default-part1-loan-3scd');
    const default3SCD_part3_return = document.getElementById('default-part3-return-3scd');
    const default3SCD_part1_loan_option = document.getElementById('default-part1-form-loan-option-3scd');
    const default3SCD_part3_return_option = document.getElementById('default-part3-form-return-option-3scd');

    default3SCD_bottom_bar_pm_pic.style.display = 'none';
    default3SCD_bottom_selection_pm_pic.style.display = 'none';
    default3SCD_part1_loan.style.display = 'none';
    default3SCD_part3_return.style.display = 'none';
    default3SCD_part1_loan_option.style.display = 'none';
    default3SCD_part3_return_option.style.display = 'none';

    const default4SCD_bottom_bar_pm_pic = document.getElementById('default-bottom-bar-4scd-pm-pic');
    const default4SCD_bottom_selection_pm_pic = document.getElementById('default-bottom-selection-4scd-pm-pic');
    const default4SCD_part1_loan = document.getElementById('default-part1-loan-4scd');
    const default4SCD_part3_return = document.getElementById('default-part3-return-4scd');
    const default4SCD_part1_loan_option = document.getElementById('default-part1-form-loan-option-4scd');
    const default4SCD_part3_return_option = document.getElementById('default-part3-form-return-option-4scd');

    default4SCD_bottom_bar_pm_pic.style.display = 'none';
    default4SCD_bottom_selection_pm_pic.style.display = 'none';
    default4SCD_part1_loan.style.display = 'none';
    default4SCD_part3_return.style.display = 'none';
    default4SCD_part1_loan_option.style.display = 'none';
    default4SCD_part3_return_option.style.display = 'none';

    const default1SCD_bottom_bar_moc = document.getElementById('default-bottom-bar-moc');
    const default1SCD_bottom_selection_moc = document.getElementById('default-bottom-selection-moc');
    const default1SCD_part2_loan = document.getElementById('default-part2-loan');
    const default1SCD_part4_return = document.getElementById('default-part4-return');
    const default1SCD_part2_loan_option = document.getElementById('default-part2-form-loan-option');
    const default1SCD_part4_return_option = document.getElementById('default-part4-form-return-option');

    default1SCD_bottom_bar_moc.style.display = 'none';
    default1SCD_bottom_selection_moc.style.display = 'none';
    default1SCD_part2_loan.style.display = 'none';
    default1SCD_part4_return.style.display = 'none';
    default1SCD_part2_loan_option.style.display = 'none';
    default1SCD_part4_return_option.style.display = 'none';

    const default2SCD_bottom_bar_moc = document.getElementById('default-bottom-bar-2scd-moc');
    const default2SCD_bottom_selection_moc = document.getElementById('default-bottom-selection-2scd-moc');
    const default2SCD_part2_loan = document.getElementById('default-part2-loan-2scd');
    const default2SCD_part4_return = document.getElementById('default-part4-return-2scd');
    const default2SCD_part2_loan_option = document.getElementById('default-part2-form-loan-option-2scd');
    const default2SCD_part4_return_option = document.getElementById('default-part4-form-return-option-2scd');

    default2SCD_bottom_bar_moc.style.display = 'none';
    default2SCD_bottom_selection_moc.style.display = 'none';
    default2SCD_part2_loan.style.display = 'none';
    default2SCD_part4_return.style.display = 'none';
    default2SCD_part2_loan_option.style.display = 'none';
    default2SCD_part4_return_option.style.display = 'none';

    const default3SCD_bottom_bar_moc = document.getElementById('default-bottom-bar-3scd-moc');
    const default3SCD_bottom_selection_moc = document.getElementById('default-bottom-selection-3scd-moc');
    const default3SCD_part2_loan = document.getElementById('default-part2-loan-3scd');
    const default3SCD_part4_return = document.getElementById('default-part4-return-3scd');
    const default3SCD_part2_loan_option = document.getElementById('default-part2-form-loan-option-3scd');
    const default3SCD_part4_return_option = document.getElementById('default-part4-form-return-option-3scd');

    default3SCD_bottom_bar_moc.style.display = 'none';
    default3SCD_bottom_selection_moc.style.display = 'none';
    default3SCD_part2_loan.style.display = 'none';
    default3SCD_part4_return.style.display = 'none';
    default3SCD_part2_loan_option.style.display = 'none';
    default3SCD_part4_return_option.style.display = 'none';

    const default4SCD_bottom_bar_moc = document.getElementById('default-bottom-bar-4scd-moc');
    const default4SCD_bottom_selection_moc = document.getElementById('default-bottom-selection-4scd-moc');
    const default4SCD_part2_loan = document.getElementById('default-part2-loan-4scd');
    const default4SCD_part4_return = document.getElementById('default-part4-return-4scd');
    const default4SCD_part2_loan_option = document.getElementById('default-part2-form-loan-option-4scd');
    const default4SCD_part4_return_option = document.getElementById('default-part4-form-return-option-4scd');

    default4SCD_bottom_bar_moc.style.display = 'none';
    default4SCD_bottom_selection_moc.style.display = 'none';
    default4SCD_part2_loan.style.display = 'none';
    default4SCD_part4_return.style.display = 'none';
    default4SCD_part2_loan_option.style.display = 'none';
    default4SCD_part4_return_option.style.display = 'none';

    defaultSelectMOC.addEventListener('change', function() {
      switch (this.value) {
        case 'default-0scd':
          toggleDisplay('default-scd-selection', 'none');
          toggleDisplay('default-1scd-selection', 'none');
          toggleDisplay('default-2scd-selection', 'none');
          toggleDisplay('default-3scd-selection', 'none');
          toggleDisplay('default-4scd-selection', 'none');

          toggleDisplay('default-scd-selection-moc', 'flex');
          toggleDisplay('default-1scd-selection-moc', 'none');
          toggleDisplay('default-2scd-selection-moc', 'none');
          toggleDisplay('default-3scd-selection-moc', 'none');
          toggleDisplay('default-4scd-selection-moc', 'none');

          toggleDisplay('default-bottom-bar-moc', 'none');
          toggleDisplay('default-bottom-selection-moc', 'none');
          toggleDisplay('default-part2-loan', 'none');
          toggleDisplay('default-part4-return', 'none');
          toggleDisplay('default-part2-form-loan-option', 'none');
          toggleDisplay('default-part4-form-return-option', 'none');

          toggleDisplay('default-bottom-bar-2scd-moc', 'none');
          toggleDisplay('default-bottom-selection-2scd-moc', 'none');
          toggleDisplay('default-part2-loan-2scd', 'none');
          toggleDisplay('default-part4-return-2scd', 'none');
          toggleDisplay('default-part2-form-loan-option-2scd', 'none');
          toggleDisplay('default-part4-form-return-option-2scd', 'none');

          toggleDisplay('default-bottom-bar-3scd-moc', 'none');
          toggleDisplay('default-bottom-selection-3scd-moc', 'none');
          toggleDisplay('default-part2-loan-3scd', 'none');
          toggleDisplay('default-part4-return-3scd', 'none');
          toggleDisplay('default-part2-form-loan-option-3scd', 'none');
          toggleDisplay('default-part4-form-return-option-3scd', 'none');

          toggleDisplay('default-bottom-bar-4scd-moc', 'none');
          toggleDisplay('default-bottom-selection-4scd-moc', 'none');
          toggleDisplay('default-part2-loan-4scd', 'none');
          toggleDisplay('default-part4-return-4scd', 'none');
          toggleDisplay('default-part2-form-loan-option-4scd', 'none');
          toggleDisplay('default-part4-form-return-option-4scd', 'none');
          break;

        case 'default-1scd':
          toggleDisplay('default-scd-selection', 'none');
          toggleDisplay('default-1scd-selection', 'none');
          toggleDisplay('default-2scd-selection', 'none');
          toggleDisplay('default-3scd-selection', 'none');
          toggleDisplay('default-4scd-selection', 'none');

          toggleDisplay('default-scd-selection-moc', 'none');
          toggleDisplay('default-1scd-selection-moc', 'flex');
          toggleDisplay('default-2scd-selection-moc', 'none');
          toggleDisplay('default-3scd-selection-moc', 'none');
          toggleDisplay('default-4scd-selection-moc', 'none');

          toggleDisplay('default-bottom-bar-moc', 'flex');
          toggleDisplay('default-bottom-selection-moc', 'flex');
          toggleDisplay('default-part2-loan', 'flex');
          toggleDisplay('default-part4-return', 'flex');
          toggleDisplay('default-part2-form-loan-option', 'flex');
          toggleDisplay('default-part4-form-return-option', 'flex');

          toggleDisplay('default-bottom-bar-2scd-moc', 'none');
          toggleDisplay('default-bottom-selection-2scd-moc', 'none');
          toggleDisplay('default-part2-loan-2scd', 'none');
          toggleDisplay('default-part4-return-2scd', 'none');
          toggleDisplay('default-part2-form-loan-option-2scd', 'none');
          toggleDisplay('default-part4-form-return-option-2scd', 'none');

          toggleDisplay('default-bottom-bar-3scd-moc', 'none');
          toggleDisplay('default-bottom-selection-3scd-moc', 'none');
          toggleDisplay('default-part2-loan-3scd', 'none');
          toggleDisplay('default-part4-return-3scd', 'none');
          toggleDisplay('default-part2-form-loan-option-3scd', 'none');
          toggleDisplay('default-part4-form-return-option-3scd', 'none');

          toggleDisplay('default-bottom-bar-4scd-moc', 'none');
          toggleDisplay('default-bottom-selection-4scd-moc', 'none');
          toggleDisplay('default-part2-loan-4scd', 'none');
          toggleDisplay('default-part4-return-4scd', 'none');
          toggleDisplay('default-part2-form-loan-option-4scd', 'none');
          toggleDisplay('default-part4-form-return-option-4scd', 'none');

          default1SCD_selection_moc.value = 'default-scd0';
          toggleDisplay('default-scd1-loan-moc', 'none');
          toggleDisplay('default-scd2-loan-moc', 'none');
          toggleDisplay('default-scd3-loan-moc', 'none');
          toggleDisplay('default-scd4-loan-moc', 'none');
          toggleDisplay('default-scd1-return-moc', 'none');
          toggleDisplay('default-scd2-return-moc', 'none');
          toggleDisplay('default-scd3-return-moc', 'none');
          toggleDisplay('default-scd4-return-moc', 'none');
    
          default1SCD_selection_moc.addEventListener('change', function() {
            if (this.value === 'default-scd0') {
              toggleDisplay('default-scd1-loan-moc', 'none');
              toggleDisplay('default-scd2-loan-moc', 'none');
              toggleDisplay('default-scd3-loan-moc', 'none');
              toggleDisplay('default-scd4-loan-moc', 'none');
    
              toggleDisplay('default-scd1-return-moc', 'none');
              toggleDisplay('default-scd2-return-moc', 'none');
              toggleDisplay('default-scd3-return-moc', 'none');
              toggleDisplay('default-scd4-return-moc', 'none');
            } else if (this.value === 'default-scd1') {
              toggleDisplay('default-scd1-loan-moc', 'flex');
              toggleDisplay('default-scd2-loan-moc', 'none');
              toggleDisplay('default-scd3-loan-moc', 'none');
              toggleDisplay('default-scd4-loan-moc', 'none');
    
              toggleDisplay('default-scd1-return-moc', 'flex');
              toggleDisplay('default-scd2-return-moc', 'none');
              toggleDisplay('default-scd3-return-moc', 'none');
              toggleDisplay('default-scd4-return-moc', 'none');
            } else if (this.value === 'default-scd2') {
              toggleDisplay('default-scd1-loan-moc', 'none');
              toggleDisplay('default-scd2-loan-moc', 'flex');
              toggleDisplay('default-scd3-loan-moc', 'none');
              toggleDisplay('default-scd4-loan-moc', 'none');
    
              toggleDisplay('default-scd1-return-moc', 'none');
              toggleDisplay('default-scd2-return-moc', 'flex');
              toggleDisplay('default-scd3-return-moc', 'none');
              toggleDisplay('default-scd4-return-moc', 'none');
            } else if (this.value === 'default-scd3') {
              toggleDisplay('default-scd1-loan-moc', 'none');
              toggleDisplay('default-scd2-loan-moc', 'none');
              toggleDisplay('default-scd3-loan-moc', 'flex');
              toggleDisplay('default-scd4-loan-moc', 'none');
    
              toggleDisplay('default-scd1-return-moc', 'none');
              toggleDisplay('default-scd2-return-moc', 'none');
              toggleDisplay('default-scd3-return-moc', 'flex');
              toggleDisplay('default-scd4-return-moc', 'none');
            } else if (this.value === 'default-scd4') {
              toggleDisplay('default-scd1-loan-moc', 'none');
              toggleDisplay('default-scd2-loan-moc', 'none');
              toggleDisplay('default-scd3-loan-moc', 'none');
              toggleDisplay('default-scd4-loan-moc', 'flex');
    
              toggleDisplay('default-scd1-return-moc', 'none');
              toggleDisplay('default-scd2-return-moc', 'none');
              toggleDisplay('default-scd3-return-moc', 'none');
              toggleDisplay('default-scd4-return-moc', 'flex');
            }
          });
          break;
    
        case 'default-2scd':
          toggleDisplay('default-scd-selection', 'none');
          toggleDisplay('default-1scd-selection', 'none');
          toggleDisplay('default-2scd-selection', 'none');
          toggleDisplay('default-3scd-selection', 'none');
          toggleDisplay('default-4scd-selection', 'none');
        
          toggleDisplay('default-scd-selection-moc', 'none');
          toggleDisplay('default-1scd-selection-moc', 'none');
          toggleDisplay('default-2scd-selection-moc', 'flex');
          toggleDisplay('default-3scd-selection-moc', 'none');
          toggleDisplay('default-4scd-selection-moc', 'none');

          toggleDisplay('default-bottom-bar-moc', 'none');
          toggleDisplay('default-bottom-selection-moc', 'none');
          toggleDisplay('default-part2-loan', 'none');
          toggleDisplay('default-part4-return', 'none');
          toggleDisplay('default-part2-form-loan-option', 'none');
          toggleDisplay('default-part4-form-return-option', 'none');

          toggleDisplay('default-bottom-bar-2scd-moc', 'flex');
          toggleDisplay('default-bottom-selection-2scd-moc', 'flex');
          toggleDisplay('default-part2-loan-2scd', 'flex');
          toggleDisplay('default-part4-return-2scd', 'flex');
          toggleDisplay('default-part2-form-loan-option-2scd', 'flex');
          toggleDisplay('default-part4-form-return-option-2scd', 'flex');

          toggleDisplay('default-bottom-bar-3scd-moc', 'none');
          toggleDisplay('default-bottom-selection-3scd-moc', 'none');
          toggleDisplay('default-part2-loan-3scd', 'none');
          toggleDisplay('default-part4-return-3scd', 'none');
          toggleDisplay('default-part2-form-loan-option-3scd', 'none');
          toggleDisplay('default-part4-form-return-option-3scd', 'none');

          toggleDisplay('default-bottom-bar-4scd-moc', 'none');
          toggleDisplay('default-bottom-selection-4scd-moc', 'none');
          toggleDisplay('default-part2-loan-4scd', 'none');
          toggleDisplay('default-part4-return-4scd', 'none');
          toggleDisplay('default-part2-form-loan-option-4scd', 'none');
          toggleDisplay('default-part4-form-return-option-4scd', 'none');

          default2SCD_selection_moc.value = 'default-scd0';
          toggleDisplay('default-scd1-2-loan-moc', 'none');
          toggleDisplay('default-scd1-3-loan-moc', 'none');
          toggleDisplay('default-scd1-4-loan-moc', 'none');
          toggleDisplay('default-scd2-3-loan-moc', 'none');
          toggleDisplay('default-scd2-4-loan-moc', 'none');
          toggleDisplay('default-scd3-4-loan-moc', 'none');
          toggleDisplay('default-scd1-2-return-moc', 'none');
          toggleDisplay('default-scd1-3-return-moc', 'none');
          toggleDisplay('default-scd1-4-return-moc', 'none');
          toggleDisplay('default-scd2-3-return-moc', 'none');
          toggleDisplay('default-scd2-4-return-moc', 'none');
          toggleDisplay('default-scd3-4-return-moc', 'none');
    
          default2SCD_selection_moc.addEventListener('change', function() {
            if (this.value === 'default-scd0') {
              toggleDisplay('default-scd1-2-loan-moc', 'none');
              toggleDisplay('default-scd1-3-loan-moc', 'none');
              toggleDisplay('default-scd1-4-loan-moc', 'none');
              toggleDisplay('default-scd2-3-loan-moc', 'none');
              toggleDisplay('default-scd2-4-loan-moc', 'none');
              toggleDisplay('default-scd3-4-loan-moc', 'none');
    
              toggleDisplay('default-scd1-2-return-moc', 'none');
              toggleDisplay('default-scd1-3-return-moc', 'none');
              toggleDisplay('default-scd1-4-return-moc', 'none');
              toggleDisplay('default-scd2-3-return-moc', 'none');
              toggleDisplay('default-scd2-4-return-moc', 'none');
              toggleDisplay('default-scd3-4-return-moc', 'none');
            } else if (this.value === 'default-scd1-2') {
              toggleDisplay('default-scd1-2-loan-moc', 'flex');
              toggleDisplay('default-scd1-3-loan-moc', 'none');
              toggleDisplay('default-scd1-4-loan-moc', 'none');
              toggleDisplay('default-scd2-3-loan-moc', 'none');
              toggleDisplay('default-scd2-4-loan-moc', 'none');
              toggleDisplay('default-scd3-4-loan-moc', 'none');
    
              toggleDisplay('default-scd1-2-return-moc', 'flex');
              toggleDisplay('default-scd1-3-return-moc', 'none');
              toggleDisplay('default-scd1-4-return-moc', 'none');
              toggleDisplay('default-scd2-3-return-moc', 'none');
              toggleDisplay('default-scd2-4-return-moc', 'none');
              toggleDisplay('default-scd3-4-return-moc', 'none');
            } else if (this.value === 'default-scd1-3') {
              toggleDisplay('default-scd1-2-loan-moc', 'none');
              toggleDisplay('default-scd1-3-loan-moc', 'flex');
              toggleDisplay('default-scd1-4-loan-moc', 'none');
              toggleDisplay('default-scd2-3-loan-moc', 'none');
              toggleDisplay('default-scd2-4-loan-moc', 'none');
              toggleDisplay('default-scd3-4-loan-moc', 'none');
    
              toggleDisplay('default-scd1-2-return-moc', 'none');
              toggleDisplay('default-scd1-3-return-moc', 'flex');
              toggleDisplay('default-scd1-4-return-moc', 'none');
              toggleDisplay('default-scd2-3-return-moc', 'none');
              toggleDisplay('default-scd2-4-return-moc', 'none');
              toggleDisplay('default-scd3-4-return-moc', 'none');
            } else if (this.value === 'default-scd1-4') {
              toggleDisplay('default-scd1-2-loan-moc', 'none');
              toggleDisplay('default-scd1-3-loan-moc', 'none');
              toggleDisplay('default-scd1-4-loan-moc', 'flex');
              toggleDisplay('default-scd2-3-loan-moc', 'none');
              toggleDisplay('default-scd2-4-loan-moc', 'none');
              toggleDisplay('default-scd3-4-loan-moc', 'none');
    
              toggleDisplay('default-scd1-2-return-moc', 'none');
              toggleDisplay('default-scd1-3-return-moc', 'none');
              toggleDisplay('default-scd1-4-return-moc', 'flex');
              toggleDisplay('default-scd2-3-return-moc', 'none');
              toggleDisplay('default-scd2-4-return-moc', 'none');
              toggleDisplay('default-scd3-4-return-moc', 'none');
            } else if (this.value === 'default-scd2-3') {
              toggleDisplay('default-scd1-2-loan-moc', 'none');
              toggleDisplay('default-scd1-3-loan-moc', 'none');
              toggleDisplay('default-scd1-4-loan-moc', 'none');
              toggleDisplay('default-scd2-3-loan-moc', 'flex');
              toggleDisplay('default-scd2-4-loan-moc', 'none');
              toggleDisplay('default-scd3-4-loan-moc', 'none');
    
              toggleDisplay('default-scd1-2-return-moc', 'none');
              toggleDisplay('default-scd1-3-return-moc', 'none');
              toggleDisplay('default-scd1-4-return-moc', 'none');
              toggleDisplay('default-scd2-3-return-moc', 'flex');
              toggleDisplay('default-scd2-4-return-moc', 'none');
              toggleDisplay('default-scd3-4-return-moc', 'none');
            } else if (this.value === 'default-scd2-4') {
              toggleDisplay('default-scd1-2-loan-moc', 'none');
              toggleDisplay('default-scd1-3-loan-moc', 'none');
              toggleDisplay('default-scd1-4-loan-moc', 'none');
              toggleDisplay('default-scd2-3-loan-moc', 'none');
              toggleDisplay('default-scd2-4-loan-moc', 'flex');
              toggleDisplay('default-scd3-4-loan-moc', 'none');
    
              toggleDisplay('default-scd1-2-return-moc', 'none');
              toggleDisplay('default-scd1-3-return-moc', 'none');
              toggleDisplay('default-scd1-4-return-moc', 'none');
              toggleDisplay('default-scd2-3-return-moc', 'none');
              toggleDisplay('default-scd2-4-return-moc', 'flex');
              toggleDisplay('default-scd3-4-return-moc', 'none');
            } else if (this.value === 'default-scd3-4') {
              toggleDisplay('default-scd1-2-loan-moc', 'none');
              toggleDisplay('default-scd1-3-loan-moc', 'none');
              toggleDisplay('default-scd1-4-loan-moc', 'none');
              toggleDisplay('default-scd2-3-loan-moc', 'none');
              toggleDisplay('default-scd2-4-loan-moc', 'none');
              toggleDisplay('default-scd3-4-loan-moc', 'flex');
    
              toggleDisplay('default-scd1-2-return-moc', 'none');
              toggleDisplay('default-scd1-3-return-moc', 'none');
              toggleDisplay('default-scd1-4-return-moc', 'none');
              toggleDisplay('default-scd2-3-return-moc', 'none');
              toggleDisplay('default-scd2-4-return-moc', 'none');
              toggleDisplay('default-scd3-4-return-moc', 'flex');
            }
          });
          break;
        
        case 'default-3scd':
          toggleDisplay('default-scd-selection', 'none');
          toggleDisplay('default-1scd-selection', 'none');
          toggleDisplay('default-2scd-selection', 'none');
          toggleDisplay('default-3scd-selection', 'none');
          toggleDisplay('default-4scd-selection', 'none');
        
          toggleDisplay('default-scd-selection-moc', 'none');
          toggleDisplay('default-1scd-selection-moc', 'none');
          toggleDisplay('default-2scd-selection-moc', 'none');
          toggleDisplay('default-3scd-selection-moc', 'flex');
          toggleDisplay('default-4scd-selection-moc', 'none');

          toggleDisplay('default-bottom-bar-moc', 'none');
          toggleDisplay('default-bottom-selection-moc', 'none');
          toggleDisplay('default-part2-loan', 'none');
          toggleDisplay('default-part4-return', 'none');
          toggleDisplay('default-part2-form-loan-option', 'none');
          toggleDisplay('default-part4-form-return-option', 'none');

          toggleDisplay('default-bottom-bar-2scd-moc', 'none');
          toggleDisplay('default-bottom-selection-2scd-moc', 'none');
          toggleDisplay('default-part2-loan-2scd', 'none');
          toggleDisplay('default-part4-return-2scd', 'none');
          toggleDisplay('default-part2-form-loan-option-2scd', 'none');
          toggleDisplay('default-part4-form-return-option-2scd', 'none');

          toggleDisplay('default-bottom-bar-3scd-moc', 'flex');
          toggleDisplay('default-bottom-selection-3scd-moc', 'flex');
          toggleDisplay('default-part2-loan-3scd', 'flex');
          toggleDisplay('default-part4-return-3scd', 'flex');
          toggleDisplay('default-part2-form-loan-option-3scd', 'flex');
          toggleDisplay('default-part4-form-return-option-3scd', 'flex');

          toggleDisplay('default-bottom-bar-4scd-moc', 'none');
          toggleDisplay('default-bottom-selection-4scd-moc', 'none');
          toggleDisplay('default-part2-loan-4scd', 'none');
          toggleDisplay('default-part4-return-4scd', 'none');
          toggleDisplay('default-part2-form-loan-option-4scd', 'none');
          toggleDisplay('default-part4-form-return-option-4scd', 'none');

          default3SCD_selection_moc.value = 'default-scd0';
          toggleDisplay('default-scd1-2-3-loan-moc', 'none');
          toggleDisplay('default-scd1-2-4-loan-moc', 'none');
          toggleDisplay('default-scd1-3-4-loan-moc', 'none');
          toggleDisplay('default-scd2-3-4-loan-moc', 'none');
          toggleDisplay('default-scd1-2-3-return-moc', 'none');
          toggleDisplay('default-scd1-2-4-return-moc', 'none');
          toggleDisplay('default-scd1-3-4-return-moc', 'none');
          toggleDisplay('default-scd2-3-4-return-moc', 'none');
    
          default3SCD_selection_moc.addEventListener('change', function() {
            if (this.value === 'default-scd0') {
              toggleDisplay('default-scd1-2-3-loan-moc', 'none');
              toggleDisplay('default-scd1-2-4-loan-moc', 'none');
              toggleDisplay('default-scd1-3-4-loan-moc', 'none');
              toggleDisplay('default-scd2-3-4-loan-moc', 'none');
    
              toggleDisplay('default-scd1-2-3-return-moc', 'none');
              toggleDisplay('default-scd1-2-4-return-moc', 'none');
              toggleDisplay('default-scd1-3-4-return-moc', 'none');
              toggleDisplay('default-scd2-3-4-return-moc', 'none');
            } else if (this.value === 'default-scd1-2-3') {
              toggleDisplay('default-scd1-2-3-loan-moc', 'flex');
              toggleDisplay('default-scd1-2-4-loan-moc', 'none');
              toggleDisplay('default-scd1-3-4-loan-moc', 'none');
              toggleDisplay('default-scd2-3-4-loan-moc', 'none');
    
              toggleDisplay('default-scd1-2-3-return-moc', 'flex');
              toggleDisplay('default-scd1-2-4-return-moc', 'none');
              toggleDisplay('default-scd1-3-4-return-moc', 'none');
              toggleDisplay('default-scd2-3-4-return-moc', 'none');
            } else if (this.value === 'default-scd1-2-4') {
              toggleDisplay('default-scd1-2-3-loan-moc', 'none');
              toggleDisplay('default-scd1-2-4-loan-moc', 'flex');
              toggleDisplay('default-scd1-3-4-loan-moc', 'none');
              toggleDisplay('default-scd2-3-4-loan-moc', 'none');
    
              toggleDisplay('default-scd1-2-3-return-moc', 'none');
              toggleDisplay('default-scd1-2-4-return-moc', 'flex');
              toggleDisplay('default-scd1-3-4-return-moc', 'none');
              toggleDisplay('default-scd2-3-4-return-moc', 'none');
            } else if (this.value === 'default-scd1-3-4') {
              toggleDisplay('default-scd1-2-3-loan-moc', 'none');
              toggleDisplay('default-scd1-2-4-loan-moc', 'none');
              toggleDisplay('default-scd1-3-4-loan-moc', 'flex');
              toggleDisplay('default-scd2-3-4-loan-moc', 'none');
    
              toggleDisplay('default-scd1-2-3-return-moc', 'none');
              toggleDisplay('default-scd1-2-4-return-moc', 'none');
              toggleDisplay('default-scd1-3-4-return-moc', 'flex');
              toggleDisplay('default-scd2-3-4-return-moc', 'none');
            } else if (this.value === 'default-scd2-3-4') {
              toggleDisplay('default-scd1-2-3-loan-moc', 'none');
              toggleDisplay('default-scd1-2-4-loan-moc', 'none');
              toggleDisplay('default-scd1-3-4-loan-moc', 'none');
              toggleDisplay('default-scd2-3-4-loan-moc', 'flex');
    
              toggleDisplay('default-scd1-2-3-return-moc', 'none');
              toggleDisplay('default-scd1-2-4-return-moc', 'none');
              toggleDisplay('default-scd1-3-4-return-moc', 'none');
              toggleDisplay('default-scd2-3-4-return-moc', 'flex');
            }
          });
          break;
    
        case 'default-4scd':
          toggleDisplay('default-scd-selection', 'none');
          toggleDisplay('default-1scd-selection', 'none');
          toggleDisplay('default-2scd-selection', 'none');
          toggleDisplay('default-3scd-selection', 'none');
          toggleDisplay('default-4scd-selection', 'none');

          toggleDisplay('default-scd-selection-moc', 'none');
          toggleDisplay('default-1scd-selection-moc', 'none');
          toggleDisplay('default-2scd-selection-moc', 'none');
          toggleDisplay('default-3scd-selection-moc', 'none');
          toggleDisplay('default-4scd-selection-moc', 'flex');

          toggleDisplay('default-bottom-bar-moc', 'none');
          toggleDisplay('default-bottom-selection-moc', 'none');
          toggleDisplay('default-part2-loan', 'none');
          toggleDisplay('default-part4-return', 'none');
          toggleDisplay('default-part2-form-loan-option', 'none');
          toggleDisplay('default-part4-form-return-option', 'none');

          toggleDisplay('default-bottom-bar-2scd-moc', 'none');
          toggleDisplay('default-bottom-selection-2scd-moc', 'none');
          toggleDisplay('default-part2-loan-2scd', 'none');
          toggleDisplay('default-part4-return-2scd', 'none');
          toggleDisplay('default-part2-form-loan-option-2scd', 'none');
          toggleDisplay('default-part4-form-return-option-2scd', 'none');

          toggleDisplay('default-bottom-bar-3scd-moc', 'none');
          toggleDisplay('default-bottom-selection-3scd-moc', 'none');
          toggleDisplay('default-part2-loan-3scd', 'none');
          toggleDisplay('default-part4-return-3scd', 'none');
          toggleDisplay('default-part2-form-loan-option-3scd', 'none');
          toggleDisplay('default-part4-form-return-option-3scd', 'none');

          toggleDisplay('default-bottom-bar-4scd-moc', 'flex');
          toggleDisplay('default-bottom-selection-4scd-moc', 'flex');
          toggleDisplay('default-part2-loan-4scd', 'flex');
          toggleDisplay('default-part4-return-4scd', 'flex');
          toggleDisplay('default-part2-form-loan-option-4scd', 'flex');
          toggleDisplay('default-part4-form-return-option-4scd', 'flex');

          default4SCD_selection_moc.value = 'default-scd0';
          toggleDisplay('default-scd1-2-3-4-loan-moc', 'none');
          toggleDisplay('default-scd1-2-3-4-return-moc', 'none');

          default4SCD_selection_moc.addEventListener('change', function() {
            if (this.value === 'default-scd0') {
              toggleDisplay('default-scd1-2-3-4-loan-moc', 'none');
    
              toggleDisplay('default-scd1-2-3-4-return-moc', 'none');
            } else if (this.value === 'default-scd1-2-3-4') {
              toggleDisplay('default-scd1-2-3-4-loan-moc', 'flex');
    
              toggleDisplay('default-scd1-2-3-4-return-moc', 'flex');
            }
          });
          break;
      };
    });
  }
});

const presentSection1 = document.getElementById('dsm-present1');
const removedSection1 = document.getElementById('dsm-removed1');
const presentSection2 = document.getElementById('dsm-present2');
const removedSection2 = document.getElementById('dsm-removed2');
const presentSection3 = document.getElementById('dsm-present3');
const removedSection3 = document.getElementById('dsm-removed3');
const presentSection4 = document.getElementById('dsm-present4');
const removedSection4 = document.getElementById('dsm-removed4');


if (distance1 <= 14) {
    presentSection1.classList.add('present-indicator');
    removedSection1.classList.add('default-indicator');
} else {
    presentSection1.classList.add('default-indicator');
    removedSection1.classList.add('removed-indicator');
}

if (distance2 <= 14) {
    presentSection2.classList.add('present-indicator');
    removedSection2.classList.add('default-indicator');
    
} else {
    presentSection2.classList.add('default-indicator');
    removedSection2.classList.add('removed-indicator');
}

if (distance3 <= 14) {
    presentSection3.classList.add('present-indicator');
    removedSection3.classList.add('default-indicator');
} else {
    presentSection3.classList.add('default-indicator');
    removedSection3.classList.add('removed-indicator');
}

if (distance4 <= 14) {
    presentSection4.classList.add('present-indicator');
    removedSection4.classList.add('default-indicator');
    
} else {
    presentSection4.classList.add('default-indicator');
    removedSection4.classList.add('removed-indicator');
}

const dsm_user_selection = document.getElementById('dsm-username');

const dsmSCD_0number = document.getElementById('dsm-scd-number-option');

const dsmSelect = document.getElementById('dsm-scd-number');
const dsmSCD_selection = document.getElementById('dsm-scd-pm-pic');
const dsm1SCD_selection = document.getElementById('dsm-1scd-pm-pic');
const dsm2SCD_selection = document.getElementById('dsm-2scd-pm-pic');
const dsm3SCD_selection = document.getElementById('dsm-3scd-pm-pic');
const dsm4SCD_selection = document.getElementById('dsm-4scd-pm-pic');
const dsmSCD_number = document.getElementById('dsm-scd-number-pm-pic-option');


const dsmSelectMOC = document.getElementById('dsm-scd-number-moc');
const dsmSCD_selection_moc = document.getElementById('dsm-scd-moc');
const dsm1SCD_selection_moc = document.getElementById('dsm-1scd-moc');
const dsm2SCD_selection_moc = document.getElementById('dsm-2scd-moc');
const dsm3SCD_selection_moc = document.getElementById('dsm-3scd-moc');
const dsm4SCD_selection_moc = document.getElementById('dsm-4scd-moc');
const dsmSCD_number_moc = document.getElementById('dsm-scd-number-moc-option');

dsm_user_selection.addEventListener('change', function(){
  if (this.value === 'dsm-user'){
    dsmSCD_0number.style.display = 'flex';
    dsmSCD_number.style.display = 'none';
    dsmSCD_number_moc.style.display = 'none';

    dsmSelect.value = 'dsm-0scd';
    dsm1SCD_selection.value = 'dsm-scd0';
    dsm2SCD_selection.value = 'dsm-scd0';
    dsm3SCD_selection.value = 'dsm-scd0';
    dsm4SCD_selection.value = 'dsm-scd0';

    dsmSelectMOC.value = 'dsm-0scd';
    dsm1SCD_selection_moc.value = 'dsm-scd0';
    dsm2SCD_selection_moc.value = 'dsm-scd0';
    dsm3SCD_selection_moc.value = 'dsm-scd0';
    dsm4SCD_selection_moc.value = 'dsm-scd0';

    function toggleDisplay(elementId, displayValue) {
      const element = document.getElementById(elementId);
      if (element) {
        element.style.display = displayValue;
      } else {
        console.warn(`Element with ID ${elementId} not found`);
      }
    }

    toggleDisplay('dsm-scd-selection-pm-pic', 'flex');
    toggleDisplay('dsm-1scd-selection-pm-pic', 'none');
    toggleDisplay('dsm-2scd-selection-pm-pic', 'none');
    toggleDisplay('dsm-3scd-selection-pm-pic', 'none');
    toggleDisplay('dsm-4scd-selection-pm-pic', 'none');

    toggleDisplay('dsm-scd-selection-moc', 'none');
    toggleDisplay('dsm-1scd-selection-moc', 'none');
    toggleDisplay('dsm-2scd-selection-moc', 'none');
    toggleDisplay('dsm-3scd-selection-moc', 'none');
    toggleDisplay('dsm-4scd-selection-moc', 'none');

    const dsm1SCD_bottom_bar_pm_pic = document.getElementById('dsm-bottom-bar-pm-pic');
    const dsm1SCD_bottom_selection_pm_pic = document.getElementById('dsm-bottom-selection-pm-pic');
    const dsm1SCD_part1_loan = document.getElementById('dsm-part1-loan');
    const dsm1SCD_part3_return = document.getElementById('dsm-part3-return');
    const dsm1SCD_part1_loan_option = document.getElementById('dsm-part1-form-loan-option');
    const dsm1SCD_part3_return_option = document.getElementById('dsm-part3-form-return-option');

    dsm1SCD_bottom_bar_pm_pic.style.display = 'none';
    dsm1SCD_bottom_selection_pm_pic.style.display = 'none';
    dsm1SCD_part1_loan.style.display = 'none';
    dsm1SCD_part3_return.style.display = 'none';
    dsm1SCD_part1_loan_option.style.display = 'none';
    dsm1SCD_part3_return_option.style.display = 'none';

    const dsm2SCD_bottom_bar_pm_pic = document.getElementById('dsm-bottom-bar-2scd-pm-pic');
    const dsm2SCD_bottom_selection_pm_pic = document.getElementById('dsm-bottom-selection-2scd-pm-pic');
    const dsm2SCD_part1_loan = document.getElementById('dsm-part1-loan-2scd');
    const dsm2SCD_part3_return = document.getElementById('dsm-part3-return-2scd');
    const dsm2SCD_part1_loan_option = document.getElementById('dsm-part1-form-loan-option-2scd');
    const dsm2SCD_part3_return_option = document.getElementById('dsm-part3-form-return-option-2scd');

    dsm2SCD_bottom_bar_pm_pic.style.display = 'none';
    dsm2SCD_bottom_selection_pm_pic.style.display = 'none';
    dsm2SCD_part1_loan.style.display = 'none';
    dsm2SCD_part3_return.style.display = 'none';
    dsm2SCD_part1_loan_option.style.display = 'none';
    dsm2SCD_part3_return_option.style.display = 'none';

    const dsm3SCD_bottom_bar_pm_pic = document.getElementById('dsm-bottom-bar-3scd-pm-pic');
    const dsm3SCD_bottom_selection_pm_pic = document.getElementById('dsm-bottom-selection-3scd-pm-pic');
    const dsm3SCD_part1_loan = document.getElementById('dsm-part1-loan-3scd');
    const dsm3SCD_part3_return = document.getElementById('dsm-part3-return-3scd');
    const dsm3SCD_part1_loan_option = document.getElementById('dsm-part1-form-loan-option-3scd');
    const dsm3SCD_part3_return_option = document.getElementById('dsm-part3-form-return-option-3scd');

    dsm3SCD_bottom_bar_pm_pic.style.display = 'none';
    dsm3SCD_bottom_selection_pm_pic.style.display = 'none';
    dsm3SCD_part1_loan.style.display = 'none';
    dsm3SCD_part3_return.style.display = 'none';
    dsm3SCD_part1_loan_option.style.display = 'none';
    dsm3SCD_part3_return_option.style.display = 'none';

    const dsm4SCD_bottom_bar_pm_pic = document.getElementById('dsm-bottom-bar-4scd-pm-pic');
    const dsm4SCD_bottom_selection_pm_pic = document.getElementById('dsm-bottom-selection-4scd-pm-pic');
    const dsm4SCD_part1_loan = document.getElementById('dsm-part1-loan-4scd');
    const dsm4SCD_part3_return = document.getElementById('dsm-part3-return-4scd');
    const dsm4SCD_part1_loan_option = document.getElementById('dsm-part1-form-loan-option-4scd');
    const dsm4SCD_part3_return_option = document.getElementById('dsm-part3-form-return-option-4scd');

    dsm4SCD_bottom_bar_pm_pic.style.display = 'none';
    dsm4SCD_bottom_selection_pm_pic.style.display = 'none';
    dsm4SCD_part1_loan.style.display = 'none';
    dsm4SCD_part3_return.style.display = 'none';
    dsm4SCD_part1_loan_option.style.display = 'none';
    dsm4SCD_part3_return_option.style.display = 'none';

    const dsm1SCD_bottom_bar_moc = document.getElementById('dsm-bottom-bar-moc');
    const dsm1SCD_bottom_selection_moc = document.getElementById('dsm-bottom-selection-moc');
    const dsm1SCD_part2_loan = document.getElementById('dsm-part2-loan');
    const dsm1SCD_part4_return = document.getElementById('dsm-part4-return');
    const dsm1SCD_part2_loan_option = document.getElementById('dsm-part2-form-loan-option');
    const dsm1SCD_part4_return_option = document.getElementById('dsm-part4-form-return-option');

    dsm1SCD_bottom_bar_moc.style.display = 'none';
    dsm1SCD_bottom_selection_moc.style.display = 'none';
    dsm1SCD_part2_loan.style.display = 'none';
    dsm1SCD_part4_return.style.display = 'none';
    dsm1SCD_part2_loan_option.style.display = 'none';
    dsm1SCD_part4_return_option.style.display = 'none';

    const dsm2SCD_bottom_bar_moc = document.getElementById('dsm-bottom-bar-2scd-moc');
    const dsm2SCD_bottom_selection_moc = document.getElementById('dsm-bottom-selection-2scd-moc');
    const dsm2SCD_part2_loan = document.getElementById('dsm-part2-loan-2scd');
    const dsm2SCD_part4_return = document.getElementById('dsm-part4-return-2scd');
    const dsm2SCD_part2_loan_option = document.getElementById('dsm-part2-form-loan-option-2scd');
    const dsm2SCD_part4_return_option = document.getElementById('dsm-part4-form-return-option-2scd');

    dsm2SCD_bottom_bar_moc.style.display = 'none';
    dsm2SCD_bottom_selection_moc.style.display = 'none';
    dsm2SCD_part2_loan.style.display = 'none';
    dsm2SCD_part4_return.style.display = 'none';
    dsm2SCD_part2_loan_option.style.display = 'none';
    dsm2SCD_part4_return_option.style.display = 'none';

    const dsm3SCD_bottom_bar_moc = document.getElementById('dsm-bottom-bar-3scd-moc');
    const dsm3SCD_bottom_selection_moc = document.getElementById('dsm-bottom-selection-3scd-moc');
    const dsm3SCD_part2_loan = document.getElementById('dsm-part2-loan-3scd');
    const dsm3SCD_part4_return = document.getElementById('dsm-part4-return-3scd');
    const dsm3SCD_part2_loan_option = document.getElementById('dsm-part2-form-loan-option-3scd');
    const dsm3SCD_part4_return_option = document.getElementById('dsm-part4-form-return-option-3scd');

    dsm3SCD_bottom_bar_moc.style.display = 'none';
    dsm3SCD_bottom_selection_moc.style.display = 'none';
    dsm3SCD_part2_loan.style.display = 'none';
    dsm3SCD_part4_return.style.display = 'none';
    dsm3SCD_part2_loan_option.style.display = 'none';
    dsm3SCD_part4_return_option.style.display = 'none';

    const dsm4SCD_bottom_bar_moc = document.getElementById('dsm-bottom-bar-4scd-moc');
    const dsm4SCD_bottom_selection_moc = document.getElementById('dsm-bottom-selection-4scd-moc');
    const dsm4SCD_part2_loan = document.getElementById('dsm-part2-loan-4scd');
    const dsm4SCD_part4_return = document.getElementById('dsm-part4-return-4scd');
    const dsm4SCD_part2_loan_option = document.getElementById('dsm-part2-form-loan-option-4scd');
    const dsm4SCD_part4_return_option = document.getElementById('dsm-part4-form-return-option-4scd');

    dsm4SCD_bottom_bar_moc.style.display = 'none';
    dsm4SCD_bottom_selection_moc.style.display = 'none';
    dsm4SCD_part2_loan.style.display = 'none';
    dsm4SCD_part4_return.style.display = 'none';
    dsm4SCD_part2_loan_option.style.display = 'none';
    dsm4SCD_part4_return_option.style.display = 'none';

  } else if (this.value === 'dsm-pm-pic'){
    dsmSCD_0number.style.display = 'none';
    dsmSCD_number.style.display = 'flex';
    dsmSCD_number_moc.style.display = 'none';

    dsmSelect.value = 'dsm-0scd';
    dsm1SCD_selection.value = 'dsm-scd0';
    dsm2SCD_selection.value = 'dsm-scd0';
    dsm3SCD_selection.value = 'dsm-scd0';
    dsm4SCD_selection.value = 'dsm-scd0';

    dsmSelectMOC.value = 'dsm-0scd';
    dsm1SCD_selection_moc.value = 'dsm-scd0';
    dsm2SCD_selection_moc.value = 'dsm-scd0';
    dsm3SCD_selection_moc.value = 'dsm-scd0';
    dsm4SCD_selection_moc.value = 'dsm-scd0';

    function toggleDisplay(elementId, displayValue) {
      const element = document.getElementById(elementId);
      if (element) {
        element.style.display = displayValue;
      } else {
        console.warn(`Element with ID ${elementId} not found`);
      }
    }

    toggleDisplay('dsm-scd-selection-pm-pic', 'flex');
    toggleDisplay('dsm-1scd-selection-pm-pic', 'none');
    toggleDisplay('dsm-2scd-selection-pm-pic', 'none');
    toggleDisplay('dsm-3scd-selection-pm-pic', 'none');
    toggleDisplay('dsm-4scd-selection-pm-pic', 'none');

    toggleDisplay('dsm-scd-selection-moc', 'none');
    toggleDisplay('dsm-1scd-selection-moc', 'none');
    toggleDisplay('dsm-2scd-selection-moc', 'none');
    toggleDisplay('dsm-3scd-selection-moc', 'none');
    toggleDisplay('dsm-4scd-selection-moc', 'none');

    const dsm1SCD_bottom_bar_pm_pic = document.getElementById('dsm-bottom-bar-pm-pic');
    const dsm1SCD_bottom_selection_pm_pic = document.getElementById('dsm-bottom-selection-pm-pic');
    const dsm1SCD_part1_loan = document.getElementById('dsm-part1-loan');
    const dsm1SCD_part3_return = document.getElementById('dsm-part3-return');
    const dsm1SCD_part1_loan_option = document.getElementById('dsm-part1-form-loan-option');
    const dsm1SCD_part3_return_option = document.getElementById('dsm-part3-form-return-option');

    dsm1SCD_bottom_bar_pm_pic.style.display = 'none';
    dsm1SCD_bottom_selection_pm_pic.style.display = 'none';
    dsm1SCD_part1_loan.style.display = 'none';
    dsm1SCD_part3_return.style.display = 'none';
    dsm1SCD_part1_loan_option.style.display = 'none';
    dsm1SCD_part3_return_option.style.display = 'none';

    const dsm2SCD_bottom_bar_pm_pic = document.getElementById('dsm-bottom-bar-2scd-pm-pic');
    const dsm2SCD_bottom_selection_pm_pic = document.getElementById('dsm-bottom-selection-2scd-pm-pic');
    const dsm2SCD_part1_loan = document.getElementById('dsm-part1-loan-2scd');
    const dsm2SCD_part3_return = document.getElementById('dsm-part3-return-2scd');
    const dsm2SCD_part1_loan_option = document.getElementById('dsm-part1-form-loan-option-2scd');
    const dsm2SCD_part3_return_option = document.getElementById('dsm-part3-form-return-option-2scd');

    dsm2SCD_bottom_bar_pm_pic.style.display = 'none';
    dsm2SCD_bottom_selection_pm_pic.style.display = 'none';
    dsm2SCD_part1_loan.style.display = 'none';
    dsm2SCD_part3_return.style.display = 'none';
    dsm2SCD_part1_loan_option.style.display = 'none';
    dsm2SCD_part3_return_option.style.display = 'none';

    const dsm3SCD_bottom_bar_pm_pic = document.getElementById('dsm-bottom-bar-3scd-pm-pic');
    const dsm3SCD_bottom_selection_pm_pic = document.getElementById('dsm-bottom-selection-3scd-pm-pic');
    const dsm3SCD_part1_loan = document.getElementById('dsm-part1-loan-3scd');
    const dsm3SCD_part3_return = document.getElementById('dsm-part3-return-3scd');
    const dsm3SCD_part1_loan_option = document.getElementById('dsm-part1-form-loan-option-3scd');
    const dsm3SCD_part3_return_option = document.getElementById('dsm-part3-form-return-option-3scd');

    dsm3SCD_bottom_bar_pm_pic.style.display = 'none';
    dsm3SCD_bottom_selection_pm_pic.style.display = 'none';
    dsm3SCD_part1_loan.style.display = 'none';
    dsm3SCD_part3_return.style.display = 'none';
    dsm3SCD_part1_loan_option.style.display = 'none';
    dsm3SCD_part3_return_option.style.display = 'none';

    const dsm4SCD_bottom_bar_pm_pic = document.getElementById('dsm-bottom-bar-4scd-pm-pic');
    const dsm4SCD_bottom_selection_pm_pic = document.getElementById('dsm-bottom-selection-4scd-pm-pic');
    const dsm4SCD_part1_loan = document.getElementById('dsm-part1-loan-4scd');
    const dsm4SCD_part3_return = document.getElementById('dsm-part3-return-4scd');
    const dsm4SCD_part1_loan_option = document.getElementById('dsm-part1-form-loan-option-4scd');
    const dsm4SCD_part3_return_option = document.getElementById('dsm-part3-form-return-option-4scd');

    dsm4SCD_bottom_bar_pm_pic.style.display = 'none';
    dsm4SCD_bottom_selection_pm_pic.style.display = 'none';
    dsm4SCD_part1_loan.style.display = 'none';
    dsm4SCD_part3_return.style.display = 'none';
    dsm4SCD_part1_loan_option.style.display = 'none';
    dsm4SCD_part3_return_option.style.display = 'none';

    const dsm1SCD_bottom_bar_moc = document.getElementById('dsm-bottom-bar-moc');
    const dsm1SCD_bottom_selection_moc = document.getElementById('dsm-bottom-selection-moc');
    const dsm1SCD_part2_loan = document.getElementById('dsm-part2-loan');
    const dsm1SCD_part4_return = document.getElementById('dsm-part4-return');
    const dsm1SCD_part2_loan_option = document.getElementById('dsm-part2-form-loan-option');
    const dsm1SCD_part4_return_option = document.getElementById('dsm-part4-form-return-option');

    dsm1SCD_bottom_bar_moc.style.display = 'none';
    dsm1SCD_bottom_selection_moc.style.display = 'none';
    dsm1SCD_part2_loan.style.display = 'none';
    dsm1SCD_part4_return.style.display = 'none';
    dsm1SCD_part2_loan_option.style.display = 'none';
    dsm1SCD_part4_return_option.style.display = 'none';

    const dsm2SCD_bottom_bar_moc = document.getElementById('dsm-bottom-bar-2scd-moc');
    const dsm2SCD_bottom_selection_moc = document.getElementById('dsm-bottom-selection-2scd-moc');
    const dsm2SCD_part2_loan = document.getElementById('dsm-part2-loan-2scd');
    const dsm2SCD_part4_return = document.getElementById('dsm-part4-return-2scd');
    const dsm2SCD_part2_loan_option = document.getElementById('dsm-part2-form-loan-option-2scd');
    const dsm2SCD_part4_return_option = document.getElementById('dsm-part4-form-return-option-2scd');

    dsm2SCD_bottom_bar_moc.style.display = 'none';
    dsm2SCD_bottom_selection_moc.style.display = 'none';
    dsm2SCD_part2_loan.style.display = 'none';
    dsm2SCD_part4_return.style.display = 'none';
    dsm2SCD_part2_loan_option.style.display = 'none';
    dsm2SCD_part4_return_option.style.display = 'none';

    const dsm3SCD_bottom_bar_moc = document.getElementById('dsm-bottom-bar-3scd-moc');
    const dsm3SCD_bottom_selection_moc = document.getElementById('dsm-bottom-selection-3scd-moc');
    const dsm3SCD_part2_loan = document.getElementById('dsm-part2-loan-3scd');
    const dsm3SCD_part4_return = document.getElementById('dsm-part4-return-3scd');
    const dsm3SCD_part2_loan_option = document.getElementById('dsm-part2-form-loan-option-3scd');
    const dsm3SCD_part4_return_option = document.getElementById('dsm-part4-form-return-option-3scd');

    dsm3SCD_bottom_bar_moc.style.display = 'none';
    dsm3SCD_bottom_selection_moc.style.display = 'none';
    dsm3SCD_part2_loan.style.display = 'none';
    dsm3SCD_part4_return.style.display = 'none';
    dsm3SCD_part2_loan_option.style.display = 'none';
    dsm3SCD_part4_return_option.style.display = 'none';

    const dsm4SCD_bottom_bar_moc = document.getElementById('dsm-bottom-bar-4scd-moc');
    const dsm4SCD_bottom_selection_moc = document.getElementById('dsm-bottom-selection-4scd-moc');
    const dsm4SCD_part2_loan = document.getElementById('dsm-part2-loan-4scd');
    const dsm4SCD_part4_return = document.getElementById('dsm-part4-return-4scd');
    const dsm4SCD_part2_loan_option = document.getElementById('dsm-part2-form-loan-option-4scd');
    const dsm4SCD_part4_return_option = document.getElementById('dsm-part4-form-return-option-4scd');

    dsm4SCD_bottom_bar_moc.style.display = 'none';
    dsm4SCD_bottom_selection_moc.style.display = 'none';
    dsm4SCD_part2_loan.style.display = 'none';
    dsm4SCD_part4_return.style.display = 'none';
    dsm4SCD_part2_loan_option.style.display = 'none';
    dsm4SCD_part4_return_option.style.display = 'none';

    dsmSelect.addEventListener('change', function() {
      switch (this.value) {
        case 'dsm-0scd':
          toggleDisplay('dsm-scd-selection-pm-pic', 'flex');
          toggleDisplay('dsm-1scd-selection-pm-pic', 'none');
          toggleDisplay('dsm-2scd-selection-pm-pic', 'none');
          toggleDisplay('dsm-3scd-selection-pm-pic', 'none');
          toggleDisplay('dsm-4scd-selection-pm-pic', 'none');

          toggleDisplay('dsm-bottom-bar-pm-pic', 'none');
          toggleDisplay('dsm-bottom-selection-pm-pic', 'none');
          toggleDisplay('dsm-part1-loan', 'none');
          toggleDisplay('dsm-part3-return', 'none');
          toggleDisplay('dsm-part1-form-loan-option', 'none');
          toggleDisplay('dsm-part3-form-return-option', 'none');

          toggleDisplay('dsm-bottom-bar-2scd-pm-pic', 'none');
          toggleDisplay('dsm-bottom-selection-2scd-pm-pic', 'none');
          toggleDisplay('dsm-part1-loan-2scd', 'none');
          toggleDisplay('dsm-part3-return-2scd', 'none');
          toggleDisplay('dsm-part1-form-loan-option-2scd', 'none');
          toggleDisplay('dsm-part3-form-return-option-2scd', 'none');

          toggleDisplay('dsm-bottom-bar-3scd-pm-pic', 'none');
          toggleDisplay('dsm-bottom-selection-3scd-pm-pic', 'none');
          toggleDisplay('dsm-part1-loan-3scd', 'none');
          toggleDisplay('dsm-part3-return-3scd', 'none');
          toggleDisplay('dsm-part1-form-loan-option-3scd', 'none');
          toggleDisplay('dsm-part3-form-return-option-3scd', 'none');

          toggleDisplay('dsm-bottom-bar-4scd-pm-pic', 'none');
          toggleDisplay('dsm-bottom-selection-4scd-pm-pic', 'none');
          toggleDisplay('dsm-part1-loan-4scd', 'none');
          toggleDisplay('dsm-part3-return-4scd', 'none');
          toggleDisplay('dsm-part1-form-loan-option-4scd', 'none');
          toggleDisplay('dsm-part3-form-return-option-4scd', 'none');
          break;

        case 'dsm-1scd':
          toggleDisplay('dsm-scd-selection-pm-pic', 'none');
          toggleDisplay('dsm-1scd-selection-pm-pic', 'flex');
          toggleDisplay('dsm-2scd-selection-pm-pic', 'none');
          toggleDisplay('dsm-3scd-selection-pm-pic', 'none');
          toggleDisplay('dsm-4scd-selection-pm-pic', 'none');

          toggleDisplay('dsm-bottom-bar-pm-pic', 'flex');
          toggleDisplay('dsm-bottom-selection-pm-pic', 'flex');
          toggleDisplay('dsm-part1-loan', 'flex');
          toggleDisplay('dsm-part3-return', 'flex');
          toggleDisplay('dsm-part1-form-loan-option', 'flex');
          toggleDisplay('dsm-part3-form-return-option', 'flex');

          toggleDisplay('dsm-bottom-bar-2scd-pm-pic', 'none');
          toggleDisplay('dsm-bottom-selection-2scd-pm-pic', 'none');
          toggleDisplay('dsm-part1-loan-2scd', 'none');
          toggleDisplay('dsm-part3-return-2scd', 'none');
          toggleDisplay('dsm-part1-form-loan-option-2scd', 'none');
          toggleDisplay('dsm-part3-form-return-option-2scd', 'none');

          toggleDisplay('dsm-bottom-bar-3scd-pm-pic', 'none');
          toggleDisplay('dsm-bottom-selection-3scd-pm-pic', 'none');
          toggleDisplay('dsm-part1-loan-3scd', 'none');
          toggleDisplay('dsm-part3-return-3scd', 'none');
          toggleDisplay('dsm-part1-form-loan-option-3scd', 'none');
          toggleDisplay('dsm-part3-form-return-option-3scd', 'none');

          toggleDisplay('dsm-bottom-bar-4scd-pm-pic', 'none');
          toggleDisplay('dsm-bottom-selection-4scd-pm-pic', 'none');
          toggleDisplay('dsm-part1-loan-4scd', 'none');
          toggleDisplay('dsm-part3-return-4scd', 'none');
          toggleDisplay('dsm-part1-form-loan-option-4scd', 'none');
          toggleDisplay('dsm-part3-form-return-option-4scd', 'none');

          dsm1SCD_selection.value = 'dsm-scd0';
          toggleDisplay('dsm-scd1-loan', 'none');
          toggleDisplay('dsm-scd2-loan', 'none');
          toggleDisplay('dsm-scd3-loan', 'none');
          toggleDisplay('dsm-scd4-loan', 'none');
          toggleDisplay('dsm-scd1-return', 'none');
          toggleDisplay('dsm-scd2-return', 'none');
          toggleDisplay('dsm-scd3-return', 'none');
          toggleDisplay('dsm-scd4-return', 'none');
    
          dsm1SCD_selection.addEventListener('change', function() {
            if (this.value === 'dsm-scd0') {
              toggleDisplay('dsm-scd1-loan', 'none');
              toggleDisplay('dsm-scd2-loan', 'none');
              toggleDisplay('dsm-scd3-loan', 'none');
              toggleDisplay('dsm-scd4-loan', 'none');
    
              toggleDisplay('dsm-scd1-return', 'none');
              toggleDisplay('dsm-scd2-return', 'none');
              toggleDisplay('dsm-scd3-return', 'none');
              toggleDisplay('dsm-scd4-return', 'none');
            } else if (this.value === 'dsm-scd1') {
              toggleDisplay('dsm-scd1-loan', 'flex');
              toggleDisplay('dsm-scd2-loan', 'none');
              toggleDisplay('dsm-scd3-loan', 'none');
              toggleDisplay('dsm-scd4-loan', 'none');
    
              toggleDisplay('dsm-scd1-return', 'flex');
              toggleDisplay('dsm-scd2-return', 'none');
              toggleDisplay('dsm-scd3-return', 'none');
              toggleDisplay('dsm-scd4-return', 'none');
            } else if (this.value === 'dsm-scd2') {
              toggleDisplay('dsm-scd1-loan', 'none');
              toggleDisplay('dsm-scd2-loan', 'flex');
              toggleDisplay('dsm-scd3-loan', 'none');
              toggleDisplay('dsm-scd4-loan', 'none');
    
              toggleDisplay('dsm-scd1-return', 'none');
              toggleDisplay('dsm-scd2-return', 'flex');
              toggleDisplay('dsm-scd3-return', 'none');
              toggleDisplay('dsm-scd4-return', 'none');
            } else if (this.value === 'dsm-scd3') {
              toggleDisplay('dsm-scd1-loan', 'none');
              toggleDisplay('dsm-scd2-loan', 'none');
              toggleDisplay('dsm-scd3-loan', 'flex');
              toggleDisplay('dsm-scd4-loan', 'none');
    
              toggleDisplay('dsm-scd1-return', 'none');
              toggleDisplay('dsm-scd2-return', 'none');
              toggleDisplay('dsm-scd3-return', 'flex');
              toggleDisplay('dsm-scd4-return', 'none');
            } else if (this.value === 'dsm-scd4') {
              toggleDisplay('dsm-scd1-loan', 'none');
              toggleDisplay('dsm-scd2-loan', 'none');
              toggleDisplay('dsm-scd3-loan', 'none');
              toggleDisplay('dsm-scd4-loan', 'flex');
    
              toggleDisplay('dsm-scd1-return', 'none');
              toggleDisplay('dsm-scd2-return', 'none');
              toggleDisplay('dsm-scd3-return', 'none');
              toggleDisplay('dsm-scd4-return', 'flex');
            }
          });
          break;

        case 'dsm-2scd':
          toggleDisplay('dsm-scd-selection-pm-pic', 'none');
          toggleDisplay('dsm-1scd-selection-pm-pic', 'none');
          toggleDisplay('dsm-2scd-selection-pm-pic', 'flex');
          toggleDisplay('dsm-3scd-selection-pm-pic', 'none');
          toggleDisplay('dsm-4scd-selection-pm-pic', 'none');

          toggleDisplay('dsm-bottom-bar-pm-pic', 'none');
          toggleDisplay('dsm-bottom-selection-pm-pic', 'none');
          toggleDisplay('dsm-part1-loan', 'none');
          toggleDisplay('dsm-part3-return', 'none');
          toggleDisplay('dsm-part1-form-loan-option', 'none');
          toggleDisplay('dsm-part3-form-return-option', 'none');

          toggleDisplay('dsm-bottom-bar-2scd-pm-pic', 'flex');
          toggleDisplay('dsm-bottom-selection-2scd-pm-pic', 'flex');
          toggleDisplay('dsm-part1-loan-2scd', 'flex');
          toggleDisplay('dsm-part3-return-2scd', 'flex');
          toggleDisplay('dsm-part1-form-loan-option-2scd', 'flex');
          toggleDisplay('dsm-part3-form-return-option-2scd', 'flex');

          toggleDisplay('dsm-bottom-bar-3scd-pm-pic', 'none');
          toggleDisplay('dsm-bottom-selection-3scd-pm-pic', 'none');
          toggleDisplay('dsm-part1-loan-3scd', 'none');
          toggleDisplay('dsm-part3-return-3scd', 'none');
          toggleDisplay('dsm-part1-form-loan-option-3scd', 'none');
          toggleDisplay('dsm-part3-form-return-option-3scd', 'none');

          toggleDisplay('dsm-bottom-bar-4scd-pm-pic', 'none');
          toggleDisplay('dsm-bottom-selection-4scd-pm-pic', 'none');
          toggleDisplay('dsm-part1-loan-4scd', 'none');
          toggleDisplay('dsm-part3-return-4scd', 'none');
          toggleDisplay('dsm-part1-form-loan-option-4scd', 'none');
          toggleDisplay('dsm-part3-form-return-option-4scd', 'none');

          dsm2SCD_selection.value = 'dsm-scd0';
          toggleDisplay('dsm-scd1-2-loan', 'none');
          toggleDisplay('dsm-scd1-3-loan', 'none');
          toggleDisplay('dsm-scd1-4-loan', 'none');
          toggleDisplay('dsm-scd2-3-loan', 'none');
          toggleDisplay('dsm-scd2-4-loan', 'none');
          toggleDisplay('dsm-scd3-4-loan', 'none');
          toggleDisplay('dsm-scd1-2-return', 'none');
          toggleDisplay('dsm-scd1-3-return', 'none');
          toggleDisplay('dsm-scd1-4-return', 'none');
          toggleDisplay('dsm-scd2-3-return', 'none');
          toggleDisplay('dsm-scd2-4-return', 'none');
          toggleDisplay('dsm-scd3-4-return', 'none');
    
          dsm2SCD_selection.addEventListener('change', function() {
            if (this.value === 'dsm-scd0') {
              toggleDisplay('dsm-scd1-2-loan', 'none');
              toggleDisplay('dsm-scd1-3-loan', 'none');
              toggleDisplay('dsm-scd1-4-loan', 'none');
              toggleDisplay('dsm-scd2-3-loan', 'none');
              toggleDisplay('dsm-scd2-4-loan', 'none');
              toggleDisplay('dsm-scd3-4-loan', 'none');
    
              toggleDisplay('dsm-scd1-2-return', 'none');
              toggleDisplay('dsm-scd1-3-return', 'none');
              toggleDisplay('dsm-scd1-4-return', 'none');
              toggleDisplay('dsm-scd2-3-return', 'none');
              toggleDisplay('dsm-scd2-4-return', 'none');
              toggleDisplay('dsm-scd3-4-return', 'none');
            } else if (this.value === 'dsm-scd1-2') {
              toggleDisplay('dsm-scd1-2-loan', 'flex');
              toggleDisplay('dsm-scd1-3-loan', 'none');
              toggleDisplay('dsm-scd1-4-loan', 'none');
              toggleDisplay('dsm-scd2-3-loan', 'none');
              toggleDisplay('dsm-scd2-4-loan', 'none');
              toggleDisplay('dsm-scd3-4-loan', 'none');
    
              toggleDisplay('dsm-scd1-2-return', 'flex');
              toggleDisplay('dsm-scd1-3-return', 'none');
              toggleDisplay('dsm-scd1-4-return', 'none');
              toggleDisplay('dsm-scd2-3-return', 'none');
              toggleDisplay('dsm-scd2-4-return', 'none');
              toggleDisplay('dsm-scd3-4-return', 'none');
            } else if (this.value === 'dsm-scd1-3') {
              toggleDisplay('dsm-scd1-2-loan', 'none');
              toggleDisplay('dsm-scd1-3-loan', 'flex');
              toggleDisplay('dsm-scd1-4-loan', 'none');
              toggleDisplay('dsm-scd2-3-loan', 'none');
              toggleDisplay('dsm-scd2-4-loan', 'none');
              toggleDisplay('dsm-scd3-4-loan', 'none');
    
              toggleDisplay('dsm-scd1-2-return', 'none');
              toggleDisplay('dsm-scd1-3-return', 'flex');
              toggleDisplay('dsm-scd1-4-return', 'none');
              toggleDisplay('dsm-scd2-3-return', 'none');
              toggleDisplay('dsm-scd2-4-return', 'none');
              toggleDisplay('dsm-scd3-4-return', 'none');
            } else if (this.value === 'dsm-scd1-4') {
              toggleDisplay('dsm-scd1-2-loan', 'none');
              toggleDisplay('dsm-scd1-3-loan', 'none');
              toggleDisplay('dsm-scd1-4-loan', 'flex');
              toggleDisplay('dsm-scd2-3-loan', 'none');
              toggleDisplay('dsm-scd2-4-loan', 'none');
              toggleDisplay('dsm-scd3-4-loan', 'none');
    
              toggleDisplay('dsm-scd1-2-return', 'none');
              toggleDisplay('dsm-scd1-3-return', 'none');
              toggleDisplay('dsm-scd1-4-return', 'flex');
              toggleDisplay('dsm-scd2-3-return', 'none');
              toggleDisplay('dsm-scd2-4-return', 'none');
              toggleDisplay('dsm-scd3-4-return', 'none');
            } else if (this.value === 'dsm-scd2-3') {
              toggleDisplay('dsm-scd1-2-loan', 'none');
              toggleDisplay('dsm-scd1-3-loan', 'none');
              toggleDisplay('dsm-scd1-4-loan', 'none');
              toggleDisplay('dsm-scd2-3-loan', 'flex');
              toggleDisplay('dsm-scd2-4-loan', 'none');
              toggleDisplay('dsm-scd3-4-loan', 'none');
    
              toggleDisplay('dsm-scd1-2-return', 'none');
              toggleDisplay('dsm-scd1-3-return', 'none');
              toggleDisplay('dsm-scd1-4-return', 'none');
              toggleDisplay('dsm-scd2-3-return', 'flex');
              toggleDisplay('dsm-scd2-4-return', 'none');
              toggleDisplay('dsm-scd3-4-return', 'none');
            } else if (this.value === 'dsm-scd2-4') {
              toggleDisplay('dsm-scd1-2-loan', 'none');
              toggleDisplay('dsm-scd1-3-loan', 'none');
              toggleDisplay('dsm-scd1-4-loan', 'none');
              toggleDisplay('dsm-scd2-3-loan', 'none');
              toggleDisplay('dsm-scd2-4-loan', 'flex');
              toggleDisplay('dsm-scd3-4-loan', 'none');
    
              toggleDisplay('dsm-scd1-2-return', 'none');
              toggleDisplay('dsm-scd1-3-return', 'none');
              toggleDisplay('dsm-scd1-4-return', 'none');
              toggleDisplay('dsm-scd2-3-return', 'none');
              toggleDisplay('dsm-scd2-4-return', 'flex');
              toggleDisplay('dsm-scd3-4-return', 'none');
            } else if (this.value === 'dsm-scd3-4') {
              toggleDisplay('dsm-scd1-2-loan', 'none');
              toggleDisplay('dsm-scd1-3-loan', 'none');
              toggleDisplay('dsm-scd1-4-loan', 'none');
              toggleDisplay('dsm-scd2-3-loan', 'none');
              toggleDisplay('dsm-scd2-4-loan', 'none');
              toggleDisplay('dsm-scd3-4-loan', 'flex');
    
              toggleDisplay('dsm-scd1-2-return', 'none');
              toggleDisplay('dsm-scd1-3-return', 'none');
              toggleDisplay('dsm-scd1-4-return', 'none');
              toggleDisplay('dsm-scd2-3-return', 'none');
              toggleDisplay('dsm-scd2-4-return', 'none');
              toggleDisplay('dsm-scd3-4-return', 'flex');
            }
          });
          break;
        
        case 'dsm-3scd':
          toggleDisplay('dsm-scd-selection-pm-pic', 'none');
          toggleDisplay('dsm-1scd-selection-pm-pic', 'none');
          toggleDisplay('dsm-2scd-selection-pm-pic', 'none');
          toggleDisplay('dsm-3scd-selection-pm-pic', 'flex');
          toggleDisplay('dsm-4scd-selection-pm-pic', 'none');

          toggleDisplay('dsm-bottom-bar-pm-pic', 'none');
          toggleDisplay('dsm-bottom-selection-pm-pic', 'none');
          toggleDisplay('dsm-part1-loan', 'none');
          toggleDisplay('dsm-part3-return', 'none');
          toggleDisplay('dsm-part1-form-loan-option', 'none');
          toggleDisplay('dsm-part3-form-return-option', 'none');

          toggleDisplay('dsm-bottom-bar-2scd-pm-pic', 'none');
          toggleDisplay('dsm-bottom-selection-2scd-pm-pic', 'none');
          toggleDisplay('dsm-part1-loan-2scd', 'none');
          toggleDisplay('dsm-part3-return-2scd', 'none');
          toggleDisplay('dsm-part1-form-loan-option-2scd', 'none');
          toggleDisplay('dsm-part3-form-return-option-2scd', 'none');

          toggleDisplay('dsm-bottom-bar-3scd-pm-pic', 'flex');
          toggleDisplay('dsm-bottom-selection-3scd-pm-pic', 'flex');
          toggleDisplay('dsm-part1-loan-3scd', 'flex');
          toggleDisplay('dsm-part3-return-3scd', 'flex');
          toggleDisplay('dsm-part1-form-loan-option-3scd', 'flex');
          toggleDisplay('dsm-part3-form-return-option-3scd', 'flex');

          toggleDisplay('dsm-bottom-bar-4scd-pm-pic', 'none');
          toggleDisplay('dsm-bottom-selection-4scd-pm-pic', 'none');
          toggleDisplay('dsm-part1-loan-4scd', 'none');
          toggleDisplay('dsm-part3-return-4scd', 'none');
          toggleDisplay('dsm-part1-form-loan-option-4scd', 'none');
          toggleDisplay('dsm-part3-form-return-option-4scd', 'none');

          dsm3SCD_selection.value = 'dsm-scd0';
          toggleDisplay('dsm-scd1-2-3-loan', 'none');
          toggleDisplay('dsm-scd1-2-4-loan', 'none');
          toggleDisplay('dsm-scd1-3-4-loan', 'none');
          toggleDisplay('dsm-scd2-3-4-loan', 'none');
          toggleDisplay('dsm-scd1-2-3-return', 'none');
          toggleDisplay('dsm-scd1-2-4-return', 'none');
          toggleDisplay('dsm-scd1-3-4-return', 'none');
          toggleDisplay('dsm-scd2-3-4-return', 'none');

          dsm3SCD_selection.addEventListener('change', function() {
            if (this.value === 'dsm-scd0') {
              toggleDisplay('dsm-scd1-2-3-loan', 'none');
              toggleDisplay('dsm-scd1-2-4-loan', 'none');
              toggleDisplay('dsm-scd1-3-4-loan', 'none');
              toggleDisplay('dsm-scd2-3-4-loan', 'none');
    
              toggleDisplay('dsm-scd1-2-3-return', 'none');
              toggleDisplay('dsm-scd1-2-4-return', 'none');
              toggleDisplay('dsm-scd1-3-4-return', 'none');
              toggleDisplay('dsm-scd2-3-4-return', 'none');
            } else if (this.value === 'dsm-scd1-2-3') {
              toggleDisplay('dsm-scd1-2-3-loan', 'flex');
              toggleDisplay('dsm-scd1-2-4-loan', 'none');
              toggleDisplay('dsm-scd1-3-4-loan', 'none');
              toggleDisplay('dsm-scd2-3-4-loan', 'none');
    
              toggleDisplay('dsm-scd1-2-3-return', 'flex');
              toggleDisplay('dsm-scd1-2-4-return', 'none');
              toggleDisplay('dsm-scd1-3-4-return', 'none');
              toggleDisplay('dsm-scd2-3-4-return', 'none');
            } else if (this.value === 'dsm-scd1-2-4') {
              toggleDisplay('dsm-scd1-2-3-loan', 'none');
              toggleDisplay('dsm-scd1-2-4-loan', 'flex');
              toggleDisplay('dsm-scd1-3-4-loan', 'none');
              toggleDisplay('dsm-scd2-3-4-loan', 'none');
    
              toggleDisplay('dsm-scd1-2-3-return', 'none');
              toggleDisplay('dsm-scd1-2-4-return', 'flex');
              toggleDisplay('dsm-scd1-3-4-return', 'none');
              toggleDisplay('dsm-scd2-3-4-return', 'none');
            } else if (this.value === 'dsm-scd1-3-4') {
              toggleDisplay('dsm-scd1-2-3-loan', 'none');
              toggleDisplay('dsm-scd1-2-4-loan', 'none');
              toggleDisplay('dsm-scd1-3-4-loan', 'flex');
              toggleDisplay('dsm-scd2-3-4-loan', 'none');
    
              toggleDisplay('dsm-scd1-2-3-return', 'none');
              toggleDisplay('dsm-scd1-2-4-return', 'none');
              toggleDisplay('dsm-scd1-3-4-return', 'flex');
              toggleDisplay('dsm-scd2-3-4-return', 'none');
            } else if (this.value === 'dsm-scd2-3-4') {
              toggleDisplay('dsm-scd1-2-3-loan', 'none');
              toggleDisplay('dsm-scd1-2-4-loan', 'none');
              toggleDisplay('dsm-scd1-3-4-loan', 'none');
              toggleDisplay('dsm-scd2-3-4-loan', 'flex');
    
              toggleDisplay('dsm-scd1-2-3-return', 'none');
              toggleDisplay('dsm-scd1-2-4-return', 'none');
              toggleDisplay('dsm-scd1-3-4-return', 'none');
              toggleDisplay('dsm-scd2-3-4-return', 'flex');
            }
          });
          break;
    
        case 'dsm-4scd':
          toggleDisplay('dsm-scd-selection-pm-pic', 'none');
          toggleDisplay('dsm-1scd-selection-pm-pic', 'none');
          toggleDisplay('dsm-2scd-selection-pm-pic', 'none');
          toggleDisplay('dsm-3scd-selection-pm-pic', 'none');
          toggleDisplay('dsm-4scd-selection-pm-pic', 'flex');

          toggleDisplay('dsm-bottom-bar-pm-pic', 'none');
          toggleDisplay('dsm-bottom-selection-pm-pic', 'none');
          toggleDisplay('dsm-part1-loan', 'none');
          toggleDisplay('dsm-part3-return', 'none');
          toggleDisplay('dsm-part1-form-loan-option', 'none');
          toggleDisplay('dsm-part3-form-return-option', 'none');

          toggleDisplay('dsm-bottom-bar-2scd-pm-pic', 'none');
          toggleDisplay('dsm-bottom-selection-2scd-pm-pic', 'none');
          toggleDisplay('dsm-part1-loan-2scd', 'none');
          toggleDisplay('dsm-part3-return-2scd', 'none');
          toggleDisplay('dsm-part1-form-loan-option-2scd', 'none');
          toggleDisplay('dsm-part3-form-return-option-2scd', 'none');

          toggleDisplay('dsm-bottom-bar-3scd-pm-pic', 'none');
          toggleDisplay('dsm-bottom-selection-3scd-pm-pic', 'none');
          toggleDisplay('dsm-part1-loan-3scd', 'none');
          toggleDisplay('dsm-part3-return-3scd', 'none');
          toggleDisplay('dsm-part1-form-loan-option-3scd', 'none');
          toggleDisplay('dsm-part3-form-return-option-3scd', 'none');

          toggleDisplay('dsm-bottom-bar-4scd-pm-pic', 'flex');
          toggleDisplay('dsm-bottom-selection-4scd-pm-pic', 'flex');
          toggleDisplay('dsm-part1-loan-4scd', 'flex');
          toggleDisplay('dsm-part3-return-4scd', 'flex');
          toggleDisplay('dsm-part1-form-loan-option-4scd', 'flex');
          toggleDisplay('dsm-part3-form-return-option-4scd', 'flex');

          dsm4SCD_selection.value = 'dsm-scd0';
          toggleDisplay('dsm-scd1-2-3-4-loan', 'none');
          toggleDisplay('dsm-scd1-2-3-4-return', 'none');
    
          dsm4SCD_selection.addEventListener('change', function() {
            if (this.value === 'dsm-scd0') {
              toggleDisplay('dsm-scd1-2-3-4-loan', 'none');
    
              toggleDisplay('dsm-scd1-2-3-4-return', 'none');
            } else if (this.value === 'dsm-scd1-2-3-4') {
              toggleDisplay('dsm-scd1-2-3-4-loan', 'flex');
    
              toggleDisplay('dsm-scd1-2-3-4-return', 'flex');
            }
          });
          break;
      };
    });
  } else if (this.value = 'dsm-moc'){
    document.getElementById('login-form').style.display = 'flex';

    const correctPassword = "kcdMOC123";

  function handleFormSubmit(event) {
    event.preventDefault(); 
    const passwordInput = document.querySelector("input[type='password']");
    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
      document.getElementById("login-form").style.display = "none";
      passwordInput.value = ""; 
    } else {
      alert("Incorrect password. Please try again.");
      passwordInput.value = ""; 
    }
  }

  if (!document.getElementById("form").hasEventListener) {
    document.getElementById("form").addEventListener("submit", handleFormSubmit);
    document.getElementById("form").hasEventListener = true;
  }

  document.getElementById("close-button").addEventListener("click", function() {
    const passwordInput = document.querySelector("input[type='password']");
    passwordInput.value = "";
    
    document.getElementById("dsm-username").value = "dsm-user";
    document.getElementById("login-form").style.display = "none";
  });

    dsmSCD_0number.style.display = 'none';
    dsmSCD_number.style.display = 'none';
    dsmSCD_number_moc.style.display = 'flex';

    dsmSelect.value = 'dsm-0scd';
    dsm1SCD_selection.value = 'dsm-scd0';
    dsm2SCD_selection.value = 'dsm-scd0';
    dsm3SCD_selection.value = 'dsm-scd0';
    dsm4SCD_selection.value = 'dsm-scd0';

    dsmSelectMOC.value = 'dsm-0scd';
    dsm1SCD_selection_moc.value = 'dsm-scd0';
    dsm2SCD_selection_moc.value = 'dsm-scd0';
    dsm3SCD_selection_moc.value = 'dsm-scd0';
    dsm4SCD_selection_moc.value = 'dsm-scd0';

    function toggleDisplay(elementId, displayValue) {
      const element = document.getElementById(elementId);
      if (element) {
        element.style.display = displayValue;
      } else {
        console.warn(`Element with ID ${elementId} not found`);
      }
    }

    toggleDisplay('dsm-scd-selection-pm-pic', 'none');
    toggleDisplay('dsm-1scd-selection-pm-pic', 'none');
    toggleDisplay('dsm-2scd-selection-pm-pic', 'none');
    toggleDisplay('dsm-3scd-selection-pm-pic', 'none');
    toggleDisplay('dsm-4scd-selection-pm-pic', 'none');

    toggleDisplay('dsm-scd-selection-moc', 'flex');
    toggleDisplay('dsm-1scd-selection-moc', 'none');
    toggleDisplay('dsm-2scd-selection-moc', 'none');
    toggleDisplay('dsm-3scd-selection-moc', 'none');
    toggleDisplay('dsm-4scd-selection-moc', 'none');

    const dsm1SCD_bottom_bar_pm_pic = document.getElementById('dsm-bottom-bar-pm-pic');
    const dsm1SCD_bottom_selection_pm_pic = document.getElementById('dsm-bottom-selection-pm-pic');
    const dsm1SCD_part1_loan = document.getElementById('dsm-part1-loan');
    const dsm1SCD_part3_return = document.getElementById('dsm-part3-return');
    const dsm1SCD_part1_loan_option = document.getElementById('dsm-part1-form-loan-option');
    const dsm1SCD_part3_return_option = document.getElementById('dsm-part3-form-return-option');

    dsm1SCD_bottom_bar_pm_pic.style.display = 'none';
    dsm1SCD_bottom_selection_pm_pic.style.display = 'none';
    dsm1SCD_part1_loan.style.display = 'none';
    dsm1SCD_part3_return.style.display = 'none';
    dsm1SCD_part1_loan_option.style.display = 'none';
    dsm1SCD_part3_return_option.style.display = 'none';

    const dsm2SCD_bottom_bar_pm_pic = document.getElementById('dsm-bottom-bar-2scd-pm-pic');
    const dsm2SCD_bottom_selection_pm_pic = document.getElementById('dsm-bottom-selection-2scd-pm-pic');
    const dsm2SCD_part1_loan = document.getElementById('dsm-part1-loan-2scd');
    const dsm2SCD_part3_return = document.getElementById('dsm-part3-return-2scd');
    const dsm2SCD_part1_loan_option = document.getElementById('dsm-part1-form-loan-option-2scd');
    const dsm2SCD_part3_return_option = document.getElementById('dsm-part3-form-return-option-2scd');

    dsm2SCD_bottom_bar_pm_pic.style.display = 'none';
    dsm2SCD_bottom_selection_pm_pic.style.display = 'none';
    dsm2SCD_part1_loan.style.display = 'none';
    dsm2SCD_part3_return.style.display = 'none';
    dsm2SCD_part1_loan_option.style.display = 'none';
    dsm2SCD_part3_return_option.style.display = 'none';

    const dsm3SCD_bottom_bar_pm_pic = document.getElementById('dsm-bottom-bar-3scd-pm-pic');
    const dsm3SCD_bottom_selection_pm_pic = document.getElementById('dsm-bottom-selection-3scd-pm-pic');
    const dsm3SCD_part1_loan = document.getElementById('dsm-part1-loan-3scd');
    const dsm3SCD_part3_return = document.getElementById('dsm-part3-return-3scd');
    const dsm3SCD_part1_loan_option = document.getElementById('dsm-part1-form-loan-option-3scd');
    const dsm3SCD_part3_return_option = document.getElementById('dsm-part3-form-return-option-3scd');

    dsm3SCD_bottom_bar_pm_pic.style.display = 'none';
    dsm3SCD_bottom_selection_pm_pic.style.display = 'none';
    dsm3SCD_part1_loan.style.display = 'none';
    dsm3SCD_part3_return.style.display = 'none';
    dsm3SCD_part1_loan_option.style.display = 'none';
    dsm3SCD_part3_return_option.style.display = 'none';

    const dsm4SCD_bottom_bar_pm_pic = document.getElementById('dsm-bottom-bar-4scd-pm-pic');
    const dsm4SCD_bottom_selection_pm_pic = document.getElementById('dsm-bottom-selection-4scd-pm-pic');
    const dsm4SCD_part1_loan = document.getElementById('dsm-part1-loan-4scd');
    const dsm4SCD_part3_return = document.getElementById('dsm-part3-return-4scd');
    const dsm4SCD_part1_loan_option = document.getElementById('dsm-part1-form-loan-option-4scd');
    const dsm4SCD_part3_return_option = document.getElementById('dsm-part3-form-return-option-4scd');

    dsm4SCD_bottom_bar_pm_pic.style.display = 'none';
    dsm4SCD_bottom_selection_pm_pic.style.display = 'none';
    dsm4SCD_part1_loan.style.display = 'none';
    dsm4SCD_part3_return.style.display = 'none';
    dsm4SCD_part1_loan_option.style.display = 'none';
    dsm4SCD_part3_return_option.style.display = 'none';

    const dsm1SCD_bottom_bar_moc = document.getElementById('dsm-bottom-bar-moc');
    const dsm1SCD_bottom_selection_moc = document.getElementById('dsm-bottom-selection-moc');
    const dsm1SCD_part2_loan = document.getElementById('dsm-part2-loan');
    const dsm1SCD_part4_return = document.getElementById('dsm-part4-return');
    const dsm1SCD_part2_loan_option = document.getElementById('dsm-part2-form-loan-option');
    const dsm1SCD_part4_return_option = document.getElementById('dsm-part4-form-return-option');

    dsm1SCD_bottom_bar_moc.style.display = 'none';
    dsm1SCD_bottom_selection_moc.style.display = 'none';
    dsm1SCD_part2_loan.style.display = 'none';
    dsm1SCD_part4_return.style.display = 'none';
    dsm1SCD_part2_loan_option.style.display = 'none';
    dsm1SCD_part4_return_option.style.display = 'none';

    const dsm2SCD_bottom_bar_moc = document.getElementById('dsm-bottom-bar-2scd-moc');
    const dsm2SCD_bottom_selection_moc = document.getElementById('dsm-bottom-selection-2scd-moc');
    const dsm2SCD_part2_loan = document.getElementById('dsm-part2-loan-2scd');
    const dsm2SCD_part4_return = document.getElementById('dsm-part4-return-2scd');
    const dsm2SCD_part2_loan_option = document.getElementById('dsm-part2-form-loan-option-2scd');
    const dsm2SCD_part4_return_option = document.getElementById('dsm-part4-form-return-option-2scd');

    dsm2SCD_bottom_bar_moc.style.display = 'none';
    dsm2SCD_bottom_selection_moc.style.display = 'none';
    dsm2SCD_part2_loan.style.display = 'none';
    dsm2SCD_part4_return.style.display = 'none';
    dsm2SCD_part2_loan_option.style.display = 'none';
    dsm2SCD_part4_return_option.style.display = 'none';

    const dsm3SCD_bottom_bar_moc = document.getElementById('dsm-bottom-bar-3scd-moc');
    const dsm3SCD_bottom_selection_moc = document.getElementById('dsm-bottom-selection-3scd-moc');
    const dsm3SCD_part2_loan = document.getElementById('dsm-part2-loan-3scd');
    const dsm3SCD_part4_return = document.getElementById('dsm-part4-return-3scd');
    const dsm3SCD_part2_loan_option = document.getElementById('dsm-part2-form-loan-option-3scd');
    const dsm3SCD_part4_return_option = document.getElementById('dsm-part4-form-return-option-3scd');

    dsm3SCD_bottom_bar_moc.style.display = 'none';
    dsm3SCD_bottom_selection_moc.style.display = 'none';
    dsm3SCD_part2_loan.style.display = 'none';
    dsm3SCD_part4_return.style.display = 'none';
    dsm3SCD_part2_loan_option.style.display = 'none';
    dsm3SCD_part4_return_option.style.display = 'none';

    const dsm4SCD_bottom_bar_moc = document.getElementById('dsm-bottom-bar-4scd-moc');
    const dsm4SCD_bottom_selection_moc = document.getElementById('dsm-bottom-selection-4scd-moc');
    const dsm4SCD_part2_loan = document.getElementById('dsm-part2-loan-4scd');
    const dsm4SCD_part4_return = document.getElementById('dsm-part4-return-4scd');
    const dsm4SCD_part2_loan_option = document.getElementById('dsm-part2-form-loan-option-4scd');
    const dsm4SCD_part4_return_option = document.getElementById('dsm-part4-form-return-option-4scd');

    dsm4SCD_bottom_bar_moc.style.display = 'none';
    dsm4SCD_bottom_selection_moc.style.display = 'none';
    dsm4SCD_part2_loan.style.display = 'none';
    dsm4SCD_part4_return.style.display = 'none';
    dsm4SCD_part2_loan_option.style.display = 'none';
    dsm4SCD_part4_return_option.style.display = 'none';

    dsmSelectMOC.addEventListener('change', function() {
      switch (this.value) {
        case 'dsm-0scd':
          toggleDisplay('dsm-scd-selection-moc', 'flex');
          toggleDisplay('dsm-1scd-selection-moc', 'none');
          toggleDisplay('dsm-2scd-selection-moc', 'none');
          toggleDisplay('dsm-3scd-selection-moc', 'none');
          toggleDisplay('dsm-4scd-selection-moc', 'none');

          toggleDisplay('dsm-bottom-bar-moc', 'none');
          toggleDisplay('dsm-bottom-selection-moc', 'none');
          toggleDisplay('dsm-part2-loan', 'none');
          toggleDisplay('dsm-part4-return', 'none');
          toggleDisplay('dsm-part2-form-loan-option', 'none');
          toggleDisplay('dsm-part4-form-return-option', 'none');

          toggleDisplay('dsm-bottom-bar-2scd-moc', 'none');
          toggleDisplay('dsm-bottom-selection-2scd-moc', 'none');
          toggleDisplay('dsm-part2-loan-2scd', 'none');
          toggleDisplay('dsm-part4-return-2scd', 'none');
          toggleDisplay('dsm-part2-form-loan-option-2scd', 'none');
          toggleDisplay('dsm-part4-form-return-option-2scd', 'none');

          toggleDisplay('dsm-bottom-bar-3scd-moc', 'none');
          toggleDisplay('dsm-bottom-selection-3scd-moc', 'none');
          toggleDisplay('dsm-part2-loan-3scd', 'none');
          toggleDisplay('dsm-part4-return-3scd', 'none');
          toggleDisplay('dsm-part2-form-loan-option-3scd', 'none');
          toggleDisplay('dsm-part4-form-return-option-3scd', 'none');

          toggleDisplay('dsm-bottom-bar-4scd-moc', 'none');
          toggleDisplay('dsm-bottom-selection-4scd-moc', 'none');
          toggleDisplay('dsm-part2-loan-4scd', 'none');
          toggleDisplay('dsm-part4-return-4scd', 'none');
          toggleDisplay('dsm-part2-form-loan-option-4scd', 'none');
          toggleDisplay('dsm-part4-form-return-option-4scd', 'none');
          break;

        case 'dsm-1scd':
          toggleDisplay('dsm-scd-selection-moc', 'none');
          toggleDisplay('dsm-1scd-selection-moc', 'flex');
          toggleDisplay('dsm-2scd-selection-moc', 'none');
          toggleDisplay('dsm-3scd-selection-moc', 'none');
          toggleDisplay('dsm-4scd-selection-moc', 'none');

          toggleDisplay('dsm-bottom-bar-moc', 'flex');
          toggleDisplay('dsm-bottom-selection-moc', 'flex');
          toggleDisplay('dsm-part2-loan', 'flex');
          toggleDisplay('dsm-part4-return', 'flex');
          toggleDisplay('dsm-part2-form-loan-option', 'flex');
          toggleDisplay('dsm-part4-form-return-option', 'flex');

          toggleDisplay('dsm-bottom-bar-2scd-moc', 'none');
          toggleDisplay('dsm-bottom-selection-2scd-moc', 'none');
          toggleDisplay('dsm-part2-loan-2scd', 'none');
          toggleDisplay('dsm-part4-return-2scd', 'none');
          toggleDisplay('dsm-part2-form-loan-option-2scd', 'none');
          toggleDisplay('dsm-part4-form-return-option-2scd', 'none');

          toggleDisplay('dsm-bottom-bar-3scd-moc', 'none');
          toggleDisplay('dsm-bottom-selection-3scd-moc', 'none');
          toggleDisplay('dsm-part2-loan-3scd', 'none');
          toggleDisplay('dsm-part4-return-3scd', 'none');
          toggleDisplay('dsm-part2-form-loan-option-3scd', 'none');
          toggleDisplay('dsm-part4-form-return-option-3scd', 'none');

          toggleDisplay('dsm-bottom-bar-4scd-moc', 'none');
          toggleDisplay('dsm-bottom-selection-4scd-moc', 'none');
          toggleDisplay('dsm-part2-loan-4scd', 'none');
          toggleDisplay('dsm-part4-return-4scd', 'none');
          toggleDisplay('dsm-part2-form-loan-option-4scd', 'none');
          toggleDisplay('dsm-part4-form-return-option-4scd', 'none');

          dsm1SCD_selection_moc.value = 'dsm-scd0';
          toggleDisplay('dsm-scd1-loan-moc', 'none');
          toggleDisplay('dsm-scd2-loan-moc', 'none');
          toggleDisplay('dsm-scd3-loan-moc', 'none');
          toggleDisplay('dsm-scd4-loan-moc', 'none');
          toggleDisplay('dsm-scd1-return-moc', 'none');
          toggleDisplay('dsm-scd2-return-moc', 'none');
          toggleDisplay('dsm-scd3-return-moc', 'none');
          toggleDisplay('dsm-scd4-return-moc', 'none');
    
          dsm1SCD_selection_moc.addEventListener('change', function() {
            if (this.value === 'dsm-scd0') {
              toggleDisplay('dsm-scd1-loan-moc', 'none');
              toggleDisplay('dsm-scd2-loan-moc', 'none');
              toggleDisplay('dsm-scd3-loan-moc', 'none');
              toggleDisplay('dsm-scd4-loan-moc', 'none');
    
              toggleDisplay('dsm-scd1-return-moc', 'none');
              toggleDisplay('dsm-scd2-return-moc', 'none');
              toggleDisplay('dsm-scd3-return-moc', 'none');
              toggleDisplay('dsm-scd4-return-moc', 'none');
            } else if (this.value === 'dsm-scd1') {
              toggleDisplay('dsm-scd1-loan-moc', 'flex');
              toggleDisplay('dsm-scd2-loan-moc', 'none');
              toggleDisplay('dsm-scd3-loan-moc', 'none');
              toggleDisplay('dsm-scd4-loan-moc', 'none');
    
              toggleDisplay('dsm-scd1-return-moc', 'flex');
              toggleDisplay('dsm-scd2-return-moc', 'none');
              toggleDisplay('dsm-scd3-return-moc', 'none');
              toggleDisplay('dsm-scd4-return-moc', 'none');
            } else if (this.value === 'dsm-scd2') {
              toggleDisplay('dsm-scd1-loan-moc', 'none');
              toggleDisplay('dsm-scd2-loan-moc', 'flex');
              toggleDisplay('dsm-scd3-loan-moc', 'none');
              toggleDisplay('dsm-scd4-loan-moc', 'none');
    
              toggleDisplay('dsm-scd1-return-moc', 'none');
              toggleDisplay('dsm-scd2-return-moc', 'flex');
              toggleDisplay('dsm-scd3-return-moc', 'none');
              toggleDisplay('dsm-scd4-return-moc', 'none');
            } else if (this.value === 'dsm-scd3') {
              toggleDisplay('dsm-scd1-loan-moc', 'none');
              toggleDisplay('dsm-scd2-loan-moc', 'none');
              toggleDisplay('dsm-scd3-loan-moc', 'flex');
              toggleDisplay('dsm-scd4-loan-moc', 'none');
    
              toggleDisplay('dsm-scd1-return-moc', 'none');
              toggleDisplay('dsm-scd2-return-moc', 'none');
              toggleDisplay('dsm-scd3-return-moc', 'flex');
              toggleDisplay('dsm-scd4-return-moc', 'none');
            } else if (this.value === 'dsm-scd4') {
              toggleDisplay('dsm-scd1-loan-moc', 'none');
              toggleDisplay('dsm-scd2-loan-moc', 'none');
              toggleDisplay('dsm-scd3-loan-moc', 'none');
              toggleDisplay('dsm-scd4-loan-moc', 'flex');
    
              toggleDisplay('dsm-scd1-return-moc', 'none');
              toggleDisplay('dsm-scd2-return-moc', 'none');
              toggleDisplay('dsm-scd3-return-moc', 'none');
              toggleDisplay('dsm-scd4-return-moc', 'flex');
            }
          });
          break;
    
        case 'dsm-2scd':
          toggleDisplay('dsm-scd-selection-moc', 'none');
          toggleDisplay('dsm-1scd-selection-moc', 'none');
          toggleDisplay('dsm-2scd-selection-moc', 'flex');
          toggleDisplay('dsm-3scd-selection-moc', 'none');
          toggleDisplay('dsm-4scd-selection-moc', 'none');

          toggleDisplay('dsm-bottom-bar-moc', 'none');
          toggleDisplay('dsm-bottom-selection-moc', 'none');
          toggleDisplay('dsm-part2-loan', 'none');
          toggleDisplay('dsm-part4-return', 'none');
          toggleDisplay('dsm-part2-form-loan-option', 'none');
          toggleDisplay('dsm-part4-form-return-option', 'none');

          toggleDisplay('dsm-bottom-bar-2scd-moc', 'flex');
          toggleDisplay('dsm-bottom-selection-2scd-moc', 'flex');
          toggleDisplay('dsm-part2-loan-2scd', 'flex');
          toggleDisplay('dsm-part4-return-2scd', 'flex');
          toggleDisplay('dsm-part2-form-loan-option-2scd', 'flex');
          toggleDisplay('dsm-part4-form-return-option-2scd', 'flex');

          toggleDisplay('dsm-bottom-bar-3scd-moc', 'none');
          toggleDisplay('dsm-bottom-selection-3scd-moc', 'none');
          toggleDisplay('dsm-part2-loan-3scd', 'none');
          toggleDisplay('dsm-part4-return-3scd', 'none');
          toggleDisplay('dsm-part2-form-loan-option-3scd', 'none');
          toggleDisplay('dsm-part4-form-return-option-3scd', 'none');

          toggleDisplay('dsm-bottom-bar-4scd-moc', 'none');
          toggleDisplay('dsm-bottom-selection-4scd-moc', 'none');
          toggleDisplay('dsm-part2-loan-4scd', 'none');
          toggleDisplay('dsm-part4-return-4scd', 'none');
          toggleDisplay('dsm-part2-form-loan-option-4scd', 'none');
          toggleDisplay('dsm-part4-form-return-option-4scd', 'none');

          dsm2SCD_selection_moc.value = 'dsm-scd0';
          toggleDisplay('dsm-scd1-2-loan-moc', 'none');
          toggleDisplay('dsm-scd1-3-loan-moc', 'none');
          toggleDisplay('dsm-scd1-4-loan-moc', 'none');
          toggleDisplay('dsm-scd2-3-loan-moc', 'none');
          toggleDisplay('dsm-scd2-4-loan-moc', 'none');
          toggleDisplay('dsm-scd3-4-loan-moc', 'none');
          toggleDisplay('dsm-scd1-2-return-moc', 'none');
          toggleDisplay('dsm-scd1-3-return-moc', 'none');
          toggleDisplay('dsm-scd1-4-return-moc', 'none');
          toggleDisplay('dsm-scd2-3-return-moc', 'none');
          toggleDisplay('dsm-scd2-4-return-moc', 'none');
          toggleDisplay('dsm-scd3-4-return-moc', 'none');
    
          dsm2SCD_selection_moc.addEventListener('change', function() {
            if (this.value === 'dsm-scd0') {
              toggleDisplay('dsm-scd1-2-loan-moc', 'none');
              toggleDisplay('dsm-scd1-3-loan-moc', 'none');
              toggleDisplay('dsm-scd1-4-loan-moc', 'none');
              toggleDisplay('dsm-scd2-3-loan-moc', 'none');
              toggleDisplay('dsm-scd2-4-loan-moc', 'none');
              toggleDisplay('dsm-scd3-4-loan-moc', 'none');
    
              toggleDisplay('dsm-scd1-2-return-moc', 'none');
              toggleDisplay('dsm-scd1-3-return-moc', 'none');
              toggleDisplay('dsm-scd1-4-return-moc', 'none');
              toggleDisplay('dsm-scd2-3-return-moc', 'none');
              toggleDisplay('dsm-scd2-4-return-moc', 'none');
              toggleDisplay('dsm-scd3-4-return-moc', 'none');
            } else if (this.value === 'dsm-scd1-2') {
              toggleDisplay('dsm-scd1-2-loan-moc', 'flex');
              toggleDisplay('dsm-scd1-3-loan-moc', 'none');
              toggleDisplay('dsm-scd1-4-loan-moc', 'none');
              toggleDisplay('dsm-scd2-3-loan-moc', 'none');
              toggleDisplay('dsm-scd2-4-loan-moc', 'none');
              toggleDisplay('dsm-scd3-4-loan-moc', 'none');
    
              toggleDisplay('dsm-scd1-2-return-moc', 'flex');
              toggleDisplay('dsm-scd1-3-return-moc', 'none');
              toggleDisplay('dsm-scd1-4-return-moc', 'none');
              toggleDisplay('dsm-scd2-3-return-moc', 'none');
              toggleDisplay('dsm-scd2-4-return-moc', 'none');
              toggleDisplay('dsm-scd3-4-return-moc', 'none');
            } else if (this.value === 'dsm-scd1-3') {
              toggleDisplay('dsm-scd1-2-loan-moc', 'none');
              toggleDisplay('dsm-scd1-3-loan-moc', 'flex');
              toggleDisplay('dsm-scd1-4-loan-moc', 'none');
              toggleDisplay('dsm-scd2-3-loan-moc', 'none');
              toggleDisplay('dsm-scd2-4-loan-moc', 'none');
              toggleDisplay('dsm-scd3-4-loan-moc', 'none');
    
              toggleDisplay('dsm-scd1-2-return-moc', 'none');
              toggleDisplay('dsm-scd1-3-return-moc', 'flex');
              toggleDisplay('dsm-scd1-4-return-moc', 'none');
              toggleDisplay('dsm-scd2-3-return-moc', 'none');
              toggleDisplay('dsm-scd2-4-return-moc', 'none');
              toggleDisplay('dsm-scd3-4-return-moc', 'none');
            } else if (this.value === 'dsm-scd1-4') {
              toggleDisplay('dsm-scd1-2-loan-moc', 'none');
              toggleDisplay('dsm-scd1-3-loan-moc', 'none');
              toggleDisplay('dsm-scd1-4-loan-moc', 'flex');
              toggleDisplay('dsm-scd2-3-loan-moc', 'none');
              toggleDisplay('dsm-scd2-4-loan-moc', 'none');
              toggleDisplay('dsm-scd3-4-loan-moc', 'none');
    
              toggleDisplay('dsm-scd1-2-return-moc', 'none');
              toggleDisplay('dsm-scd1-3-return-moc', 'none');
              toggleDisplay('dsm-scd1-4-return-moc', 'flex');
              toggleDisplay('dsm-scd2-3-return-moc', 'none');
              toggleDisplay('dsm-scd2-4-return-moc', 'none');
              toggleDisplay('dsm-scd3-4-return-moc', 'none');
            } else if (this.value === 'dsm-scd2-3') {
              toggleDisplay('dsm-scd1-2-loan-moc', 'none');
              toggleDisplay('dsm-scd1-3-loan-moc', 'none');
              toggleDisplay('dsm-scd1-4-loan-moc', 'none');
              toggleDisplay('dsm-scd2-3-loan-moc', 'flex');
              toggleDisplay('dsm-scd2-4-loan-moc', 'none');
              toggleDisplay('dsm-scd3-4-loan-moc', 'none');
    
              toggleDisplay('dsm-scd1-2-return-moc', 'none');
              toggleDisplay('dsm-scd1-3-return-moc', 'none');
              toggleDisplay('dsm-scd1-4-return-moc', 'none');
              toggleDisplay('dsm-scd2-3-return-moc', 'flex');
              toggleDisplay('dsm-scd2-4-return-moc', 'none');
              toggleDisplay('dsm-scd3-4-return-moc', 'none');
            } else if (this.value === 'dsm-scd2-4') {
              toggleDisplay('dsm-scd1-2-loan-moc', 'none');
              toggleDisplay('dsm-scd1-3-loan-moc', 'none');
              toggleDisplay('dsm-scd1-4-loan-moc', 'none');
              toggleDisplay('dsm-scd2-3-loan-moc', 'none');
              toggleDisplay('dsm-scd2-4-loan-moc', 'flex');
              toggleDisplay('dsm-scd3-4-loan-moc', 'none');
    
              toggleDisplay('dsm-scd1-2-return-moc', 'none');
              toggleDisplay('dsm-scd1-3-return-moc', 'none');
              toggleDisplay('dsm-scd1-4-return-moc', 'none');
              toggleDisplay('dsm-scd2-3-return-moc', 'none');
              toggleDisplay('dsm-scd2-4-return-moc', 'flex');
              toggleDisplay('dsm-scd3-4-return-moc', 'none');
            } else if (this.value === 'dsm-scd3-4') {
              toggleDisplay('dsm-scd1-2-loan-moc', 'none');
              toggleDisplay('dsm-scd1-3-loan-moc', 'none');
              toggleDisplay('dsm-scd1-4-loan-moc', 'none');
              toggleDisplay('dsm-scd2-3-loan-moc', 'none');
              toggleDisplay('dsm-scd2-4-loan-moc', 'none');
              toggleDisplay('dsm-scd3-4-loan-moc', 'flex');
    
              toggleDisplay('dsm-scd1-2-return-moc', 'none');
              toggleDisplay('dsm-scd1-3-return-moc', 'none');
              toggleDisplay('dsm-scd1-4-return-moc', 'none');
              toggleDisplay('dsm-scd2-3-return-moc', 'none');
              toggleDisplay('dsm-scd2-4-return-moc', 'none');
              toggleDisplay('dsm-scd3-4-return-moc', 'flex');
            }
          });
          break;
        
        case 'dsm-3scd':
          toggleDisplay('dsm-scd-selection-moc', 'none');
          toggleDisplay('dsm-1scd-selection-moc', 'none');
          toggleDisplay('dsm-2scd-selection-moc', 'none');
          toggleDisplay('dsm-3scd-selection-moc', 'flex');
          toggleDisplay('dsm-4scd-selection-moc', 'none');

          toggleDisplay('dsm-bottom-bar-moc', 'none');
          toggleDisplay('dsm-bottom-selection-moc', 'none');
          toggleDisplay('dsm-part2-loan', 'none');
          toggleDisplay('dsm-part4-return', 'none');
          toggleDisplay('dsm-part2-form-loan-option', 'none');
          toggleDisplay('dsm-part4-form-return-option', 'none');

          toggleDisplay('dsm-bottom-bar-2scd-moc', 'none');
          toggleDisplay('dsm-bottom-selection-2scd-moc', 'none');
          toggleDisplay('dsm-part2-loan-2scd', 'none');
          toggleDisplay('dsm-part4-return-2scd', 'none');
          toggleDisplay('dsm-part2-form-loan-option-2scd', 'none');
          toggleDisplay('dsm-part4-form-return-option-2scd', 'none');

          toggleDisplay('dsm-bottom-bar-3scd-moc', 'flex');
          toggleDisplay('dsm-bottom-selection-3scd-moc', 'flex');
          toggleDisplay('dsm-part2-loan-3scd', 'flex');
          toggleDisplay('dsm-part4-return-3scd', 'flex');
          toggleDisplay('dsm-part2-form-loan-option-3scd', 'flex');
          toggleDisplay('dsm-part4-form-return-option-3scd', 'flex');

          toggleDisplay('dsm-bottom-bar-4scd-moc', 'none');
          toggleDisplay('dsm-bottom-selection-4scd-moc', 'none');
          toggleDisplay('dsm-part2-loan-4scd', 'none');
          toggleDisplay('dsm-part4-return-4scd', 'none');
          toggleDisplay('dsm-part2-form-loan-option-4scd', 'none');
          toggleDisplay('dsm-part4-form-return-option-4scd', 'none');

          dsm3SCD_selection_moc.value = 'dsm-scd0';
          toggleDisplay('dsm-scd1-2-3-loan-moc', 'none');
          toggleDisplay('dsm-scd1-2-4-loan-moc', 'none');
          toggleDisplay('dsm-scd1-3-4-loan-moc', 'none');
          toggleDisplay('dsm-scd2-3-4-loan-moc', 'none');
          toggleDisplay('dsm-scd1-2-3-return-moc', 'none');
          toggleDisplay('dsm-scd1-2-4-return-moc', 'none');
          toggleDisplay('dsm-scd1-3-4-return-moc', 'none');
          toggleDisplay('dsm-scd2-3-4-return-moc', 'none');

          dsm3SCD_selection_moc.addEventListener('change', function() {
            if (this.value === 'dsm-scd0') {
              toggleDisplay('dsm-scd1-2-3-loan-moc', 'none');
              toggleDisplay('dsm-scd1-2-4-loan-moc', 'none');
              toggleDisplay('dsm-scd1-3-4-loan-moc', 'none');
              toggleDisplay('dsm-scd2-3-4-loan-moc', 'none');
    
              toggleDisplay('dsm-scd1-2-3-return-moc', 'none');
              toggleDisplay('dsm-scd1-2-4-return-moc', 'none');
              toggleDisplay('dsm-scd1-3-4-return-moc', 'none');
              toggleDisplay('dsm-scd2-3-4-return-moc', 'none');
            } else if (this.value === 'dsm-scd1-2-3') {
              toggleDisplay('dsm-scd1-2-3-loan-moc', 'flex');
              toggleDisplay('dsm-scd1-2-4-loan-moc', 'none');
              toggleDisplay('dsm-scd1-3-4-loan-moc', 'none');
              toggleDisplay('dsm-scd2-3-4-loan-moc', 'none');
    
              toggleDisplay('dsm-scd1-2-3-return-moc', 'flex');
              toggleDisplay('dsm-scd1-2-4-return-moc', 'none');
              toggleDisplay('dsm-scd1-3-4-return-moc', 'none');
              toggleDisplay('dsm-scd2-3-4-return-moc', 'none');
            } else if (this.value === 'dsm-scd1-2-4') {
              toggleDisplay('dsm-scd1-2-3-loan-moc', 'none');
              toggleDisplay('dsm-scd1-2-4-loan-moc', 'flex');
              toggleDisplay('dsm-scd1-3-4-loan-moc', 'none');
              toggleDisplay('dsm-scd2-3-4-loan-moc', 'none');
    
              toggleDisplay('dsm-scd1-2-3-return-moc', 'none');
              toggleDisplay('dsm-scd1-2-4-return-moc', 'flex');
              toggleDisplay('dsm-scd1-3-4-return-moc', 'none');
              toggleDisplay('dsm-scd2-3-4-return-moc', 'none');
            } else if (this.value === 'dsm-scd1-3-4') {
              toggleDisplay('dsm-scd1-2-3-loan-moc', 'none');
              toggleDisplay('dsm-scd1-2-4-loan-moc', 'none');
              toggleDisplay('dsm-scd1-3-4-loan-moc', 'flex');
              toggleDisplay('dsm-scd2-3-4-loan-moc', 'none');
    
              toggleDisplay('dsm-scd1-2-3-return-moc', 'none');
              toggleDisplay('dsm-scd1-2-4-return-moc', 'none');
              toggleDisplay('dsm-scd1-3-4-return-moc', 'flex');
              toggleDisplay('dsm-scd2-3-4-return-moc', 'none');
            } else if (this.value === 'dsm-scd2-3-4') {
              toggleDisplay('dsm-scd1-2-3-loan-moc', 'none');
              toggleDisplay('dsm-scd1-2-4-loan-moc', 'none');
              toggleDisplay('dsm-scd1-3-4-loan-moc', 'none');
              toggleDisplay('dsm-scd2-3-4-loan-moc', 'flex');
    
              toggleDisplay('dsm-scd1-2-3-return-moc', 'none');
              toggleDisplay('dsm-scd1-2-4-return-moc', 'none');
              toggleDisplay('dsm-scd1-3-4-return-moc', 'none');
              toggleDisplay('dsm-scd2-3-4-return-moc', 'flex');
            }
          });
          break;
    
        case 'dsm-4scd':
          toggleDisplay('dsm-scd-selection-moc', 'none');
          toggleDisplay('dsm-1scd-selection-moc', 'none');
          toggleDisplay('dsm-2scd-selection-moc', 'none');
          toggleDisplay('dsm-3scd-selection-moc', 'none');
          toggleDisplay('dsm-4scd-selection-moc', 'flex');

          toggleDisplay('dsm-bottom-bar-moc', 'none');
          toggleDisplay('dsm-bottom-selection-moc', 'none');
          toggleDisplay('dsm-part2-loan', 'none');
          toggleDisplay('dsm-part4-return', 'none');
          toggleDisplay('dsm-part2-form-loan-option', 'none');
          toggleDisplay('dsm-part4-form-return-option', 'none');

          toggleDisplay('dsm-bottom-bar-2scd-moc', 'none');
          toggleDisplay('dsm-bottom-selection-2scd-moc', 'none');
          toggleDisplay('dsm-part2-loan-2scd', 'none');
          toggleDisplay('dsm-part4-return-2scd', 'none');
          toggleDisplay('dsm-part2-form-loan-option-2scd', 'none');
          toggleDisplay('dsm-part4-form-return-option-2scd', 'none');

          toggleDisplay('dsm-bottom-bar-3scd-moc', 'none');
          toggleDisplay('dsm-bottom-selection-3scd-moc', 'none');
          toggleDisplay('dsm-part2-loan-3scd', 'none');
          toggleDisplay('dsm-part4-return-3scd', 'none');
          toggleDisplay('dsm-part2-form-loan-option-3scd', 'none');
          toggleDisplay('dsm-part4-form-return-option-3scd', 'none');

          toggleDisplay('dsm-bottom-bar-4scd-moc', 'flex');
          toggleDisplay('dsm-bottom-selection-4scd-moc', 'flex');
          toggleDisplay('dsm-part2-loan-4scd', 'flex');
          toggleDisplay('dsm-part4-return-4scd', 'flex');
          toggleDisplay('dsm-part2-form-loan-option-4scd', 'flex');
          toggleDisplay('dsm-part4-form-return-option-4scd', 'flex');

          dsm4SCD_selection_moc.value = 'dsm-scd0';
          toggleDisplay('dsm-scd1-2-3-4-loan-moc', 'none');
          toggleDisplay('dsm-scd1-2-3-4-return-moc', 'none');
    
          dsm4SCD_selection_moc.addEventListener('change', function() {
            if (this.value === 'dsm-scd0') {
              toggleDisplay('dsm-scd1-2-3-4-loan-moc', 'none');
    
              toggleDisplay('dsm-scd1-2-3-4-return-moc', 'none');
            } else if (this.value === 'dsm-scd1-2-3-4') {
              toggleDisplay('dsm-scd1-2-3-4-loan-moc', 'flex');
    
              toggleDisplay('dsm-scd1-2-3-4-return-moc', 'flex');
            }
          });
          break;
      };
    });
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  function toggleDisplay(elementId, displayValue) {
    document.getElementById(elementId).style.display = displayValue;
  }

  const dsm_username = document.getElementById('dsm-username');

  const dsm_scd_number = document.getElementById('dsm-scd-number');
  const dsm_1scd_name = document.getElementById('dsm-1scd-pm-pic');
  const dsm_2scd_name = document.getElementById('dsm-2scd-pm-pic');
  const dsm_3scd_name = document.getElementById('dsm-3scd-pm-pic');
  const dsm_4scd_name = document.getElementById('dsm-4scd-pm-pic');

  const dsm_scd_number_moc = document.getElementById('dsm-scd-number-moc');
  const dsm_1scd_name_moc = document.getElementById('dsm-1scd-moc');
  const dsm_2scd_name_moc = document.getElementById('dsm-2scd-moc');
  const dsm_3scd_name_moc = document.getElementById('dsm-3scd-moc');
  const dsm_4scd_name_moc = document.getElementById('dsm-4scd-moc');

  let dsm_part1_form_successful = 'false';
  let dsm_part2_form_successful = 'false';

  /* DSM Part 1 & 3 (SCD 1) */
  const dsm_part1_form1 = document.getElementById('dsm-scd1-loan');
  const dsm_part3_form1 = document.getElementById('dsm-scd1-return');

  dsm_part1_form1.classList.add('unlocked');
  dsm_part3_form1.classList.add('overlay');

  function lockPart3form1status() {
    dsm_part3_form1.classList.add('locked');
    dsm_part3_form1.classList.remove('unlocked');
  }
  
  dsm_part1_form1.onclick = function() {
    window.open("https://forms.office.com/r/5ywqqfF3MV", '_blank');
    toggleDisplay('reminder-one', 'none');
    dsm_part1_form_successful = 'false';
    if (dsm_part1_form_successful === 'true'){
      dsm_part3_form1.classList.remove('overlay');
      dsm_part1_form1.classList.remove('unlocked');

      for (let i = 0; i < dsm_username.options.length; i++) {
        if (dsm_username.options[i].value !== 'dsm-pm-pic') {
            dsm_username.options[i].style.display = 'none';
        } else {
          dsm_username.options[i].style.display = 'block';
        }
      }

      for (let i = 0; i < dsm_scd_number.options.length; i++) {
        if (dsm_scd_number.options[i].value !== 'dsm-1scd') {
          dsm_scd_number.options[i].style.display = 'none';
        } else {
          dsm_scd_number.options[i].style.display = 'block';
        }
      }
      
      for (let i = 0; i < dsm_1scd_name.options.length; i++) {
        if (dsm_1scd_name.options[i].value !== 'dsm-scd1') {
          dsm_1scd_name.options[i].style.display = 'none';
        } else {
          dsm_1scd_name.options[i].style.display = 'block';
        }
      }
    } else if (dsm_part1_form_successful === 'false') {
      setTimeout(() => {
        alert('Your TOA Part 1 is rejected. Please submit again.');
    }, 1000);
    }
  };

  function lockP3form1() {
    window.location.href = "#"
    dsm_part3_form1.disabled = true;
    dsm_part3_form1.classList.add('locked');
    dsm_part3_form1.style.fontSize = "20px"
    dsm_part3_form1.style.fontWeight = 'bold';
    dsm_part3_form1.classList.remove('unlocked');
    dsm_part3_form1.innerHTML = 'Please return SCD 1 first';
  }
  
  function unlockPart3form1status() {
    dsm_part3_form1.classList.add('unlocked');
    dsm_part3_form1.classList.remove('locked');
    localStorage.setItem('part3FormLocked', 'false');
  }
  
  function unlockP3form1() {
    window.open(dsm_part3_form1.dataset.href, '_blank');
    dsm_part3_form1.disabled = false;
    dsm_part3_form1.classList.add('unlocked');
    dsm_part3_form1.classList.remove('locked');
  }
  
  if (distance1 <= 14) {
    unlockPart3form1status();
  } else {
    lockPart3form1status();
   }
  
   dsm_part3_form1.addEventListener('click',() => {
    if (distance1 <= 14) {
      unlockP3form1();
      location.href = location.href.split('#')[0];
    } else {
      lockP3form1();
    }
  });

  /* DSM Part 1 & 3 (SCD 2) */
  const dsm_part1_form2 = document.getElementById('dsm-scd2-loan');
  const dsm_part3_form2 = document.getElementById('dsm-scd2-return');

  dsm_part3_form2.classList.add('overlay');
  dsm_part1_form2.classList.add('unlocked');

  dsm_part1_form2.onclick = function() {
    window.open("https://forms.office.com/r/5ywqqfF3MV", '_blank');
    toggleDisplay('reminder-two', 'none');
    dsm_part1_form_successful = 'true';
    if (dsm_part1_form_successful === 'true'){
      dsm_part3_form2.classList.remove('overlay');
      dsm_part1_form2.classList.remove('unlocked');

      for (let i = 0; i < dsm_username.options.length; i++) {
        if (dsm_username.options[i].value !== 'dsm-pm-pic') {
          dsm_username.options[i].style.display = 'none';
        } else {
          dsm_username.options[i].style.display = 'block';
        }
      }

      for (let i = 0; i < dsm_scd_number.options.length; i++) {
        if (dsm_scd_number.options[i].value !== 'dsm-1scd') {
          dsm_scd_number.options[i].style.display = 'none';
        } else {
          dsm_scd_number.options[i].style.display = 'block';
        }
      }
      
      for (let i = 0; i < dsm_1scd_name.options.length; i++) {
        if (dsm_1scd_name.options[i].value !== 'dsm-scd2') {
          dsm_1scd_name.options[i].style.display = 'none';
        } else {
          dsm_1scd_name.options[i].style.display = 'block';
        }
      }
    } else if (dsm_part1_form_successful === 'false') {
        setTimeout(() => {
          alert('Your TOA Part 1 is rejected. Please submit again.');
      }, 1000);
    }
  };

  function lockPart3form2status() {
    dsm_part3_form2.classList.add('locked');
    dsm_part3_form2.classList.remove('unlocked');
  }

  function lockP3form2() {
    window.location.href = "#"
    dsm_part3_form2.disabled = true;
    dsm_part3_form2.classList.add('locked');
    dsm_part3_form2.style.fontSize = "20px"
    dsm_part3_form2.style.fontWeight = 'bold';
    dsm_part3_form2.classList.remove('unlocked');
    dsm_part3_form2.innerHTML = 'Please return SCD 2 first';
  }

  function unlockPart3form2status() {
    dsm_part3_form2.classList.add('unlocked');
    dsm_part3_form2.classList.remove('locked');
  }

  function unlockP3form2() {
    window.open(dsm_part3_form2.dataset.href, '_blank');
    dsm_part3_form2.disabled = false;
    dsm_part3_form2.classList.add('unlocked');
    dsm_part3_form2.classList.remove('locked');
  }

  if (distance2 <= 14) {
    unlockPart3form2status();
  } else {
    lockPart3form2status();
  }

  dsm_part3_form2.addEventListener('click',() => {
    if (distance2 <= 14) {
      unlockP3form2();
      location.href = location.href.split('#')[0];
    } else {
      lockP3form2();
    }
  });

  /* DSM Part 1 & 3 (SCD 3) */
  const dsm_part1_form3 = document.getElementById('dsm-scd3-loan');
  const dsm_part3_form3 = document.getElementById('dsm-scd3-return');

  dsm_part3_form3.classList.add('overlay');
  dsm_part1_form3.classList.add('unlocked');

  dsm_part1_form3.onclick = function() {
    window.open("https://forms.office.com/r/5ywqqfF3MV", '_blank');
    toggleDisplay('reminder-three', 'none')
    dsm_part1_form_successful = 'true';
    if (dsm_part1_form_successful === 'true'){
      dsm_part3_form3.classList.remove('overlay');
      dsm_part1_form3.classList.remove('unlocked');

      for (let i = 0; i < dsm_username.options.length; i++) {
        if (dsm_username.options[i].value !== 'dsm-pm-pic') {
          dsm_username.options[i].style.display = 'none';
        } else {
          dsm_username.options[i].style.display = 'block';
        }
      }

      for (let i = 0; i < dsm_scd_number.options.length; i++) {
        if (dsm_scd_number.options[i].value !== 'dsm-1scd') {
          dsm_scd_number.options[i].style.display = 'none';
        } else {
          dsm_scd_number.options[i].style.display = 'block';
        }
      }
      
      for (let i = 0; i < dsm_1scd_name.options.length; i++) {
        if (dsm_1scd_name.options[i].value !== 'dsm-scd3') {
          dsm_1scd_name.options[i].style.display = 'none';
        } else {
          dsm_1scd_name.options[i].style.display = 'block';
        }
      }
    } else if (dsm_part1_form_successful === 'false') {
        setTimeout(() => {
          alert('Your TOA Part 1 is rejected. Please submit again.');
      }, 1000);
    }
  };

  function lockPart3form3status() {
    dsm_part3_form3.classList.add('locked');
    dsm_part3_form3.classList.remove('unlocked');
  }

  function lockP3form3() {
    window.location.href = "#"
    dsm_part3_form3.disabled = true;
    dsm_part3_form3.classList.add('locked');
    dsm_part3_form3.style.fontSize = "20px"
    dsm_part3_form3.style.fontWeight = 'bold';
    dsm_part3_form3.classList.remove('unlocked');
    dsm_part3_form3.innerHTML = 'Please return SCD 3 first';
  }

  function unlockPart3form3status() {
    dsm_part3_form3.classList.add('unlocked');
    dsm_part3_form3.classList.remove('locked');
  }

  function unlockP3form3() {
    window.open(dsm_part3_form3.dataset.href, '_blank');
    dsm_part3_form3.disabled = false;
    dsm_part3_form3.classList.add('unlocked');
    dsm_part3_form3.classList.remove('locked');
  }

  if (distance3 <= 14) {
    unlockPart3form3status();
  } else {
    lockPart3form3status();
  }

  dsm_part3_form3.addEventListener('click',() => {
    if (distance3 <= 14) {
      unlockP3form3();
      location.href = location.href.split('#')[0];
    } else {
      lockP3form3();
    }
  });

  /* DSM Part 1 & 3 (SCD 4) */ 
  const dsm_part1_form4 = document.getElementById('dsm-scd4-loan');
  const dsm_part3_form4 = document.getElementById('dsm-scd4-return');

  dsm_part3_form4.classList.add('overlay');
  dsm_part1_form4.classList.add('unlocked');

  dsm_part1_form4.onclick = function() {
    window.open("https://forms.office.com/r/5ywqqfF3MV", '_blank');
    toggleDisplay('reminder-four', 'none');
    dsm_part1_form_successful = 'true';
    if (dsm_part1_form_successful === 'true'){
      dsm_part3_form4.classList.remove('overlay');
      dsm_part1_form4.classList.remove('unlocked');

      for (let i = 0; i < dsm_username.options.length; i++) {
        if (dsm_username.options[i].value !== 'dsm-pm-pic') {
          dsm_username.options[i].style.display = 'none';
        } else {
          dsm_username.options[i].style.display = 'block';
        }
      }

      for (let i = 0; i < dsm_scd_number.options.length; i++) {
        if (dsm_scd_number.options[i].value !== 'dsm-1scd') {
          dsm_scd_number.options[i].style.display = 'none';
        } else {
          dsm_scd_number.options[i].style.display = 'block';
        }
      }
      
      for (let i = 0; i < dsm_1scd_name.options.length; i++) {
        if (dsm_1scd_name.options[i].value !== 'dsm-scd4') {
          dsm_1scd_name.options[i].style.display = 'none';
        } else {
          dsm_1scd_name.options[i].style.display = 'block';
        }
      }
    } else if (dsm_part1_form_successful === 'false') {
        setTimeout(() => {
          alert('Your TOA Part 1 is rejected. Please submit again.');
      }, 1000);
    }
  };

  function lockPart3form4status() {
    dsm_part3_form4.classList.add('locked');
    dsm_part3_form4.classList.remove('unlocked');
  }

  function lockP3form4() {
    window.location.href = "#"
    dsm_part3_form4.disabled = true;
    dsm_part3_form4.classList.add('locked');
    dsm_part3_form4.style.fontSize = "20px"
    dsm_part3_form4.style.fontWeight = 'bold';
    dsm_part3_form4.classList.remove('unlocked');
    dsm_part3_form4.innerHTML = 'Please return SCD 4 first';
  }

  function unlockPart3form4status() {
    dsm_part3_form4.classList.add('unlocked');
    dsm_part3_form4.classList.remove('locked');
  }

  function unlockP3form4() {
    window.open(dsm_part3_form4.dataset.href, '_blank');
    dsm_part3_form4.disabled = false;
    dsm_part3_form4.classList.add('unlocked');
    dsm_part3_form4.classList.remove('locked');
  }

  if (distance4 <= 14) {
    unlockPart3form4status();
  } else {
    lockPart3form4status();
  }

  dsm_part3_form4.addEventListener('click',() => {
    if (distance4 <= 14) {
      unlockP3form4();
      location.href = location.href.split('#')[0];
    } else {
      lockP3form4();
    }
  });

  /* DSM Part 1 & 3 (SCD 1 & 2) */
  const dsm_part1_form5 = document.getElementById('dsm-scd1-2-loan');
  const dsm_part3_form5 = document.getElementById('dsm-scd1-2-return');

  dsm_part3_form5.classList.add('overlay');
  dsm_part1_form5.classList.add('unlocked');

  dsm_part1_form5.onclick = function() {
    window.open("https://forms.office.com/r/5ywqqfF3MV", '_blank');
    toggleDisplay('reminder-five','none');
    dsm_part1_form_successful = 'true';
    if (dsm_part1_form_successful === 'true'){
      dsm_part3_form5.classList.remove('overlay');
      dsm_part1_form5.classList.remove('unlocked');

      for (let i = 0; i < dsm_username.options.length; i++) {
        if (dsm_username.options[i].value !== 'dsm-pm-pic') {
          dsm_username.options[i].style.display = 'none';
        } else {
          dsm_username.options[i].style.display = 'block';
        }
      }

      for (let i = 0; i < dsm_scd_number.options.length; i++) {
        if (dsm_scd_number.options[i].value !== 'dsm-2scd') {
          dsm_scd_number.options[i].style.display = 'none';
        } else {
          dsm_scd_number.options[i].style.display = 'block';
        }
      }
      
      for (let i = 0; i < dsm_2scd_name.options.length; i++) {
        if (dsm_2scd_name.options[i].value !== 'dsm-scd1-2') {
          dsm_2scd_name.options[i].style.display = 'none';
        } else {
          dsm_2scd_name.options[i].style.display = 'block';
        }
      }
    } else if (dsm_part1_form_successful === 'false') {
        setTimeout(() => {
          alert('Your TOA Part 1 is rejected. Please submit again.');
      }, 1000);
    }
  };

  function lockPart3form5status() {
    dsm_part3_form5.classList.add('locked');
    dsm_part3_form5.classList.remove('unlocked');
  }

  function lockP3form5() {
    window.location.href = "#"
    dsm_part3_form5.disabled = true;
    dsm_part3_form5.classList.add('locked');
    dsm_part3_form5.style.fontSize = "20px"
    dsm_part3_form5.style.fontWeight = 'bold';
    dsm_part3_form5.classList.remove('unlocked');
    dsm_part3_form5.innerHTML = 'Please return SCD 1 & 2 first';
  }

  function unlockPart3form5status() {
    dsm_part3_form5.classList.add('unlocked');
    dsm_part3_form5.classList.remove('locked');
  }

  function unlockP3form5() {
    window.open(dsm_part3_form5.dataset.href, '_blank');
    dsm_part3_form5.disabled = false;
    dsm_part3_form5.classList.add('unlocked');
    dsm_part3_form5.classList.remove('locked');
  }

  if ((distance1 <= 14) && (distance2 <= 14))  {
    unlockPart3form5status();
  } else {
    lockPart3form5status();
  }

  dsm_part3_form5.addEventListener('click',() => {
    if ((distance1 <= 14) && (distance2 <= 14)) {
      unlockP3form5();
      location.href = location.href.split('#')[0];
    } else {
      lockP3form5();
    }
  });

  /* DSM Part 1 & 3 (SCD 1 & 3) */
  const dsm_part1_form6 = document.getElementById('dsm-scd1-3-loan');
  const dsm_part3_form6 = document.getElementById('dsm-scd1-3-return');

  dsm_part3_form6.classList.add('overlay');
  dsm_part1_form6.classList.add('unlocked');

  dsm_part1_form6.onclick = function() {
      window.open("https://forms.office.com/r/5ywqqfF3MV", '_blank');
      toggleDisplay('reminder-six', 'none');
      dsm_part1_form_successful = 'true';
    if (dsm_part1_form_successful === 'true'){
      dsm_part3_form6.classList.remove('overlay');
      dsm_part1_form6.classList.remove('unlocked');

      for (let i = 0; i < dsm_username.options.length; i++) {
        if (dsm_username.options[i].value !== 'dsm-pm-pic') {
          dsm_username.options[i].style.display = 'none';
        } else {
          dsm_username.options[i].style.display = 'block';
        }
      }

      for (let i = 0; i < dsm_scd_number.options.length; i++) {
        if (dsm_scd_number.options[i].value !== 'dsm-2scd') {
          dsm_scd_number.options[i].style.display = 'none';
        } else {
          dsm_scd_number.options[i].style.display = 'block';
        }
      }
      
      for (let i = 0; i < dsm_2scd_name.options.length; i++) {
        if (dsm_2scd_name.options[i].value !== 'dsm-scd1-3') {
          dsm_2scd_name.options[i].style.display = 'none';
        } else {
          dsm_2scd_name.options[i].style.display = 'block';
        }
      }
    } else if (dsm_part1_form_successful === 'false') {
        setTimeout(() => {
          alert('Your TOA Part 1 is rejected. Please submit again.');
      }, 1000);
    }

    };

  function lockPart3form6status() {
    dsm_part3_form6.classList.add('locked');
    dsm_part3_form6.classList.remove('unlocked');
  }

  function lockP3form6() {
    window.location.href = "#"
    dsm_part3_form6.disabled = true;
    dsm_part3_form6.classList.add('locked');
    dsm_part3_form6.style.fontSize = "20px"
    dsm_part3_form6.style.fontWeight = 'bold';
    dsm_part3_form6.classList.remove('unlocked');
    dsm_part3_form6.innerHTML = 'Please return SCD 1 & 3 first';
  }

  function unlockPart3form6status() {
    dsm_part3_form6.classList.add('unlocked');
    dsm_part3_form6.classList.remove('locked');
  }

  function unlockP3form6() {
    window.open(dsm_part3_form6.dataset.href, '_blank');
    dsm_part3_form6.disabled = false;
    dsm_part3_form6.classList.add('unlocked');
    dsm_part3_form6.classList.remove('locked');
  }

  if ((distance1 <= 14) && (distance3 <= 14))  {
    unlockPart3form6status();
  } else {
    lockPart3form6status();
  }

  dsm_part3_form6.addEventListener('click',() => {
    if ((distance1 <= 14) && (distance3 <= 14)) {
      unlockP3form6();
      location.href = location.href.split('#')[0];
    } else {
      lockP3form6();
    }
  });

  /* DSM Part 1 & 3 (SCD 1 & 4) */
  const dsm_part1_form7 = document.getElementById('dsm-scd1-4-loan');
  const dsm_part3_form7 = document.getElementById('dsm-scd1-4-return');

  dsm_part3_form7.classList.add('overlay');
  dsm_part1_form7.classList.add('unlocked');

  dsm_part1_form7.onclick = function() {
    window.open("https://forms.office.com/r/5ywqqfF3MV", '_blank');
    toggleDisplay('reminder-seven', 'none');
    dsm_part1_form_successful = 'true';
    if (dsm_part1_form_successful === 'true'){
      dsm_part3_form7.classList.remove('overlay');
      dsm_part1_form7.classList.remove('unlocked');

      for (let i = 0; i < dsm_username.options.length; i++) {
        if (dsm_username.options[i].value !== 'dsm-pm-pic') {
          dsm_username.options[i].style.display = 'none';
        } else {
          dsm_username.options[i].style.display = 'block';
        }
      }

      for (let i = 0; i < dsm_scd_number.options.length; i++) {
        if (dsm_scd_number.options[i].value !== 'dsm-2scd') {
          dsm_scd_number.options[i].style.display = 'none';
        } else {
          dsm_scd_number.options[i].style.display = 'block';
        }
      }
      
      for (let i = 0; i < dsm_2scd_name.options.length; i++) {
        if (dsm_2scd_name.options[i].value !== 'dsm-scd1-4') {
          dsm_2scd_name.options[i].style.display = 'none';
        } else {
          dsm_2scd_name.options[i].style.display = 'block';
        }
      }
    } else if (dsm_part1_form_successful === 'false') {
        setTimeout(() => {
          alert('Your TOA Part 1 is rejected. Please submit again.');
      }, 1000);
    }
  }

  function lockPart3form7status() {
    dsm_part3_form7.classList.add('locked');
    dsm_part3_form7.classList.remove('unlocked');
  }

  function lockP3form7() {
    window.location.href = "#"
    dsm_part3_form7.disabled = true;
    dsm_part3_form7.classList.add('locked');
    dsm_part3_form7.style.fontSize = "20px"
    dsm_part3_form7.style.fontWeight = 'bold';
    dsm_part3_form7.classList.remove('unlocked');
    dsm_part3_form7.innerHTML = 'Please return SCD 1 & 4 first';
  }

  function unlockPart3form7status() {
    dsm_part3_form7.classList.add('unlocked');
    dsm_part3_form7.classList.remove('locked');
  }

  function unlockP3form7() {
    window.open(dsm_part3_form7.dataset.href, '_blank');
    dsm_part3_form7.disabled = false;
    dsm_part3_form7.classList.add('unlocked');
    dsm_part3_form7.classList.remove('locked');
  }

  if ((distance1 <= 14) && (distance4 <= 14))  {
    unlockPart3form7status();
  } else {
    lockPart3form7status();
  }

  dsm_part3_form7.addEventListener('click',() => {
    if ((distance1 <= 14) && (distance4 <= 14)) {
      unlockP3form7();
      location.href = location.href.split('#')[0];
    } else {
      lockP3form7();
    }
  });

  /* DSM Part 1 & 3 (SCD 2 & 3) */
  const dsm_part1_form8 = document.getElementById('dsm-scd2-3-loan');
  const dsm_part3_form8 = document.getElementById('dsm-scd2-3-return');

  dsm_part3_form8.classList.add('overlay');
  dsm_part1_form8.classList.add('unlocked');

  dsm_part1_form8.onclick = function() {
    window.open("https://forms.office.com/r/5ywqqfF3MV", '_blank');
    toggleDisplay('reminder-eight', 'none');
    dsm_part1_form_successful = 'true';
    if (dsm_part1_form_successful === 'true'){
      dsm_part3_form8.classList.remove('overlay');
      dsm_part1_form8.classList.remove('unlocked');

      for (let i = 0; i < dsm_username.options.length; i++) {
        if (dsm_username.options[i].value !== 'dsm-pm-pic') {
          dsm_username.options[i].style.display = 'none';
        } else {
          dsm_username.options[i].style.display = 'block';
        }
      }

      for (let i = 0; i < dsm_scd_number.options.length; i++) {
        if (dsm_scd_number.options[i].value !== 'dsm-2scd') {
          dsm_scd_number.options[i].style.display = 'none';
        } else {
          dsm_scd_number.options[i].style.display = 'block';
        }
      }
      
      for (let i = 0; i < dsm_2scd_name.options.length; i++) {
        if (dsm_2scd_name.options[i].value !== 'dsm-scd2-3') {
          dsm_2scd_name.options[i].style.display = 'none';
        } else {
          dsm_2scd_name.options[i].style.display = 'block';
        }
      }
    } else if (dsm_part1_form_successful === 'false') {
        setTimeout(() => {
          alert('Your TOA Part 1 is rejected. Please submit again.');
      }, 1000);
    }
  }

  function lockPart3form8status() {
    dsm_part3_form8.classList.add('locked');
    dsm_part3_form8.classList.remove('unlocked');
  }

  function lockP3form8() {
    window.location.href = "#"
    dsm_part3_form8.disabled = true;
    dsm_part3_form8.classList.add('locked');
    dsm_part3_form8.style.fontSize = "20px"
    dsm_part3_form8.style.fontWeight = 'bold';
    dsm_part3_form8.classList.remove('unlocked');
    dsm_part3_form8.innerHTML = 'Please return SCD 2 & 3 first';
  }

  function unlockPart3form8status() {
    dsm_part3_form8.classList.add('unlocked');
    dsm_part3_form8.classList.remove('locked');
  }

  function unlockP3form8() {
    window.open(dsm_part3_form8.dataset.href, '_blank');
    dsm_part3_form8.disabled = false;
    dsm_part3_form8.classList.add('unlocked');
    dsm_part3_form8.classList.remove('locked');
  }

  if ((distance2 <= 14) && (distance3 <= 14))  {
    unlockPart3form8status();
  } else {
    lockPart3form8status();
  }

  dsm_part3_form8.addEventListener('click',() => {
    if ((distance2 <= 14) && (distance3 <= 14)) {
      unlockP3form8();
      location.href = location.href.split('#')[0];
    } else {
      lockP3form8();
    }
  });

  /* DSM Part 1 & 3 (SCD 2 & 4) */
  const dsm_part1_form9 = document.getElementById('dsm-scd2-4-loan');
  const dsm_part3_form9 = document.getElementById('dsm-scd2-4-return');

  dsm_part3_form9.classList.add('overlay');
  dsm_part1_form9.classList.add('unlocked');

  dsm_part1_form9.onclick = function() {
    window.open("https://forms.office.com/r/5ywqqfF3MV", '_blank');
    toggleDisplay('reminder-nine', 'none');
    dsm_part1_form_successful = 'true';
    if (dsm_part1_form_successful === 'true'){
      dsm_part3_form9.classList.remove('overlay');
      dsm_part1_form9.classList.remove('unlocked');

      for (let i = 0; i < dsm_username.options.length; i++) {
        if (dsm_username.options[i].value !== 'dsm-pm-pic') {
          dsm_username.options[i].style.display = 'none';
        } else {
          dsm_username.options[i].style.display = 'block';
        }
      }

      for (let i = 0; i < dsm_scd_number.options.length; i++) {
        if (dsm_scd_number.options[i].value !== 'dsm-2scd') {
          dsm_scd_number.options[i].style.display = 'none';
        } else {
          dsm_scd_number.options[i].style.display = 'block';
        }
      }
      
      for (let i = 0; i < dsm_2scd_name.options.length; i++) {
        if (dsm_2scd_name.options[i].value !== 'dsm-scd2-4') {
          dsm_2scd_name.options[i].style.display = 'none';
        } else {
          dsm_2scd_name.options[i].style.display = 'block';
        }
      }
    } else if (dsm_part1_form_successful === 'false') {
        setTimeout(() => {
          alert('Your TOA Part 1 is rejected. Please submit again.');
      }, 1000);
    }
  }

  function lockPart3form9status() {
    dsm_part3_form9.classList.add('locked');
    dsm_part3_form9.classList.remove('unlocked');
  }

  function lockP3form9() {
    window.location.href = "#"
    dsm_part3_form9.disabled = true;
    dsm_part3_form9.classList.add('locked');
    dsm_part3_form9.style.fontSize = "20px"
    dsm_part3_form9.style.fontWeight = 'bold';
    dsm_part3_form9.classList.remove('unlocked');
    dsm_part3_form9.innerHTML = 'Please return SCD 2 & 4 first';
  }

  function unlockPart3form9status() {
    dsm_part3_form9.classList.add('unlocked');
    dsm_part3_form9.classList.remove('locked');
  }

  function unlockP3form9() {
    window.open(dsm_part3_form9.dataset.href, '_blank');
    dsm_part3_form9.disabled = false;
    dsm_part3_form9.classList.add('unlocked');
    dsm_part3_form9.classList.remove('locked');
  }

  if ((distance2 <= 14) && (distance4 <= 14))  {
    unlockPart3form9status();
  } else {
    lockPart3form9status();
  }

  dsm_part3_form9.addEventListener('click',() => {
    if ((distance2 <= 14) && (distance4 <= 14)) {
      unlockP3form9();
      location.href = location.href.split('#')[0];
    } else {
      lockP3form9();
    }
  });

  /* DSM Part 1 & 3 (SCD 3 & 4) */
  const dsm_part1_form10 = document.getElementById('dsm-scd3-4-loan');
  const dsm_part3_form10 = document.getElementById('dsm-scd3-4-return');

  dsm_part3_form10.classList.add('overlay');
  dsm_part1_form10.classList.add('unlocked');

  dsm_part1_form10.onclick = function() {
    window.open("https://forms.office.com/r/5ywqqfF3MV", '_blank');
    toggleDisplay('reminder-ten', 'none');
    dsm_part1_form_successful = 'true';
    if (dsm_part1_form_successful === 'true'){
      dsm_part3_form10.classList.remove('overlay');
      dsm_part1_form10.classList.remove('unlocked');

      for (let i = 0; i < dsm_username.options.length; i++) {
        if (dsm_username.options[i].value !== 'dsm-pm-pic') {
          dsm_username.options[i].style.display = 'none';
        } else {
          dsm_username.options[i].style.display = 'block';
        }
      }

      for (let i = 0; i < dsm_scd_number.options.length; i++) {
        if (dsm_scd_number.options[i].value !== 'dsm-2scd') {
          dsm_scd_number.options[i].style.display = 'none';
        } else {
          dsm_scd_number.options[i].style.display = 'block';
        }
      }
      
      for (let i = 0; i < dsm_2scd_name.options.length; i++) {
        if (dsm_2scd_name.options[i].value !== 'dsm-scd3-4') {
          dsm_2scd_name.options[i].style.display = 'none';
        } else {
          dsm_2scd_name.options[i].style.display = 'block';
        }
      }
    } else if (dsm_part1_form_successful === 'false') {
        setTimeout(() => {
          alert('Your TOA Part 1 is rejected. Please submit again.');
      }, 1000);
    }
  }

  function lockPart3form10status() {
    dsm_part3_form10.classList.add('locked');
    dsm_part3_form10.classList.remove('unlocked');
  }

  function lockP3form10() {
    window.location.href = "#"
    dsm_part3_form10.disabled = true;
    dsm_part3_form10.classList.add('locked');
    dsm_part3_form10.style.fontSize = "20px"
    dsm_part3_form10.style.fontWeight = 'bold';
    dsm_part3_form10.classList.remove('unlocked');
    dsm_part3_form10.innerHTML = 'Please return SCD 3 & 4 first';
  }

  function unlockPart3form10status() {
    dsm_part3_form10.classList.add('unlocked');
    dsm_part3_form10.classList.remove('locked');
  }

  function unlockP3form10() {
    window.open(dsm_part3_form10.dataset.href, '_blank');
    dsm_part3_form10.disabled = false;
    dsm_part3_form10.classList.add('unlocked');
    dsm_part3_form10.classList.remove('locked');
  }

  if ((distance3 <= 14) && (distance4 <= 14))  {
    unlockPart3form10status();
  } else {
    lockPart3form10status();
  }

  dsm_part3_form10.addEventListener('click',() => {
    if ((distance3 <= 14) && (distance4 <= 14)) {
      unlockP3form10();
      location.href = location.href.split('#')[0];
    } else {
      lockP3form10();
    }
  });

  /* DSM Part 1 & 3 (SCD 1 & 2 & 3) */
  const dsm_part1_form11 = document.getElementById('dsm-scd1-2-3-loan');
  const dsm_part3_form11 = document.getElementById('dsm-scd1-2-3-return');

  dsm_part3_form11.classList.add('overlay');
  dsm_part1_form11.classList.add('unlocked');

  dsm_part1_form11.onclick = function() {
    window.open("https://forms.office.com/r/5ywqqfF3MV", '_blank');
    toggleDisplay('reminder-eleven', 'none');
    dsm_part1_form_successful = 'true';
    if (dsm_part1_form_successful === 'true'){
      dsm_part3_form11.classList.remove('overlay');
      dsm_part1_form11.classList.remove('unlocked');

      for (let i = 0; i < dsm_username.options.length; i++) {
        if (dsm_username.options[i].value !== 'dsm-pm-pic') {
          dsm_username.options[i].style.display = 'none';
        } else {
          dsm_username.options[i].style.display = 'block';
        }
      }

      for (let i = 0; i < dsm_scd_number.options.length; i++) {
        if (dsm_scd_number.options[i].value !== 'dsm-3scd') {
          dsm_scd_number.options[i].style.display = 'none';
        } else {
          dsm_scd_number.options[i].style.display = 'block';
        }
      }
      
      for (let i = 0; i < dsm_3scd_name.options.length; i++) {
        if (dsm_3scd_name.options[i].value !== 'dsm-scd1-2-3') {
          dsm_3scd_name.options[i].style.display = 'none';
        } else {
          dsm_3scd_name.options[i].style.display = 'block';
        }
      }
    } else if (dsm_part1_form_successful === 'false') {
        setTimeout(() => {
          alert('Your TOA Part 1 is rejected. Please submit again.');
      }, 1000);
    }
  }

  function lockPart3form11status() {
    dsm_part3_form11.classList.add('locked');
    dsm_part3_form11.classList.remove('unlocked');
  }

  function lockP3form11() {
    window.location.href = "#"
    dsm_part3_form11.disabled = true;
    dsm_part3_form11.classList.add('locked');
    dsm_part3_form11.style.fontSize = "20px"
    dsm_part3_form11.style.fontWeight = 'bold';
    dsm_part3_form11.classList.remove('unlocked');
    dsm_part3_form11.innerHTML = 'Please return SCD 1 & 2 & 3 first';
  }

  function unlockPart3form11status() {
    dsm_part3_form11.classList.add('unlocked');
    dsm_part3_form11.classList.remove('locked');
  }

  function unlockP3form11() {
    window.open(dsm_part3_form11.dataset.href, '_blank');
    dsm_part3_form11.disabled = false;
    dsm_part3_form11.classList.add('unlocked');
    dsm_part3_form11.classList.remove('locked');
  }

  if ((distance1 <= 14) && (distance2 <= 14) && (distance3 <= 14))  {
    unlockPart3form11status();
  } else {
    lockPart3form11status();
  }

  dsm_part3_form11.addEventListener('click',() => {
    if ((distance1 <= 14) && (distance2 <= 14) && (distance3 <= 14)) {
      unlockP3form11();
      location.href = location.href.split('#')[0];
    } else {
      lockP3form11();
    }
  });

  /* DSM Part 1 & 3 (SCD 1 & 2 & 4) */
  const dsm_part1_form12 = document.getElementById('dsm-scd1-2-4-loan');
  const dsm_part3_form12 = document.getElementById('dsm-scd1-2-4-return');

  dsm_part3_form12.classList.add('overlay');
  dsm_part1_form12.classList.add('unlocked');

  dsm_part1_form12.onclick = function() {
    window.open("https://forms.office.com/r/5ywqqfF3MV", '_blank');
    toggleDisplay('reminder-twelve', 'none');
    dsm_part1_form_successful = 'true';
    if (dsm_part1_form_successful === 'true'){
      dsm_part3_form12.classList.remove('overlay');
      dsm_part1_form12.classList.remove('unlocked');

      for (let i = 0; i < dsm_username.options.length; i++) {
        if (dsm_username.options[i].value !== 'dsm-pm-pic') {
          dsm_username.options[i].style.display = 'none';
        } else {
          dsm_username.options[i].style.display = 'block';
        }
      }

      for (let i = 0; i < dsm_scd_number.options.length; i++) {
        if (dsm_scd_number.options[i].value !== 'dsm-3scd') {
          dsm_scd_number.options[i].style.display = 'none';
        } else {
          dsm_scd_number.options[i].style.display = 'block';
        }
      }
      
      for (let i = 0; i < dsm_3scd_name.options.length; i++) {
        if (dsm_3scd_name.options[i].value !== 'dsm-scd1-2-4') {
          dsm_3scd_name.options[i].style.display = 'none';
        } else {
          dsm_3scd_name.options[i].style.display = 'block';
        }
      }
    } else if (dsm_part1_form_successful === 'false') {
        setTimeout(() => {
          alert('Your TOA Part 1 is rejected. Please submit again.');
      }, 1000);
    }
  }

  function lockPart3form12status() {
    dsm_part3_form12.classList.add('locked');
    dsm_part3_form12.classList.remove('unlocked');
  }

  function lockP3form12() {
    window.location.href = "#"
    dsm_part3_form12.disabled = true;
    dsm_part3_form12.classList.add('locked');
    dsm_part3_form12.style.fontSize = "20px"
    dsm_part3_form12.style.fontWeight = 'bold';
    dsm_part3_form12.classList.remove('unlocked');
    dsm_part3_form12.innerHTML = 'Please return SCD 1 & 2 & 4 first';
  }

  function unlockPart3form12status() {
    dsm_part3_form12.classList.add('unlocked');
    dsm_part3_form12.classList.remove('locked');
  }

  function unlockP3form12() {
    window.open(dsm_part3_form12.dataset.href, '_blank');
    dsm_part3_form12.disabled = false;
    dsm_part3_form12.classList.add('unlocked');
    dsm_part3_form12.classList.remove('locked');
  }

  if ((distance1 <= 14) && (distance2 <= 14) && (distance4 <= 14))  {
    unlockPart3form12status();
  } else {
    lockPart3form12status();
  }

  dsm_part3_form12.addEventListener('click',() => {
    if ((distance1 <= 14) && (distance2 <= 14) && (distance4 <= 14)) {
      unlockP3form12();
      location.href = location.href.split('#')[0];
    } else {
      lockP3form12();
    }
  });

  /* DSM Part 1 & 3 (SCD 1 & 3 & 4) */
  const dsm_part1_form13 = document.getElementById('dsm-scd1-3-4-loan');
  const dsm_part3_form13 = document.getElementById('dsm-scd1-3-4-return');

  dsm_part3_form13.classList.add('overlay');
  dsm_part1_form13.classList.add('unlocked');

  dsm_part1_form13.onclick = function() {
    window.open("https://forms.office.com/r/5ywqqfF3MV", '_blank');
    toggleDisplay('reminder-thirteen', 'none');
    dsm_part1_form_successful = 'true';
    if (dsm_part1_form_successful === 'true'){
      dsm_part3_form13.classList.remove('overlay');
      dsm_part1_form13.classList.remove('unlocked');

      for (let i = 0; i < dsm_username.options.length; i++) {
        if (dsm_username.options[i].value !== 'dsm-pm-pic') {
          dsm_username.options[i].style.display = 'none';
        } else {
          dsm_username.options[i].style.display = 'block';
        }
      }

      for (let i = 0; i < dsm_scd_number.options.length; i++) {
        if (dsm_scd_number.options[i].value !== 'dsm-3scd') {
          dsm_scd_number.options[i].style.display = 'none';
        } else {
          dsm_scd_number.options[i].style.display = 'block';
        }
      }
      
      for (let i = 0; i < dsm_3scd_name.options.length; i++) {
        if (dsm_3scd_name.options[i].value !== 'dsm-scd1-3-4') {
          dsm_3scd_name.options[i].style.display = 'none';
        } else {
          dsm_3scd_name.options[i].style.display = 'block';
        }
      }
    } else if (dsm_part1_form_successful === 'false') {
        setTimeout(() => {
          alert('Your TOA Part 1 is rejected. Please submit again.');
      }, 1000);
    }
  }

  function lockPart3form13status() {
    dsm_part3_form13.classList.add('locked');
    dsm_part3_form13.classList.remove('unlocked');
  }

  function lockP3form13() {
    window.location.href = "#"
    dsm_part3_form13.disabled = true;
    dsm_part3_form13.classList.add('locked');
    dsm_part3_form13.style.fontSize = "20px"
    dsm_part3_form13.style.fontWeight = 'bold';
    dsm_part3_form13.classList.remove('unlocked');
    dsm_part3_form13.innerHTML = 'Please return SCD 1 & 3 & 4 first';
  }

  function unlockPart3form13status() {
    dsm_part3_form13.classList.add('unlocked');
    dsm_part3_form13.classList.remove('locked');
  }

  function unlockP3form13() {
    window.open(dsm_part3_form13.dataset.href, '_blank');
    dsm_part3_form13.disabled = false;
    dsm_part3_form13.classList.add('unlocked');
    dsm_part3_form13.classList.remove('locked');
  }

  if ((distance1 <= 14) && (distance3 <= 14) && (distance4 <= 14))  {
    unlockPart3form13status();
  } else {
    lockPart3form13status();
  }

  dsm_part3_form13.addEventListener('click',() => {
    if ((distance1 <= 14) && (distance3 <= 14) && (distance4 <= 14)) {
      unlockP3form13();
      location.href = location.href.split('#')[0];
    } else {
      lockP3form13();
    }
  });

  /* DSM Part 1 & 3 (SCD 2 & 3 & 4) */
  const dsm_part1_form14 = document.getElementById('dsm-scd2-3-4-loan');
  const dsm_part3_form14 = document.getElementById('dsm-scd2-3-4-return');

  dsm_part3_form14.classList.add('overlay');
  dsm_part1_form14.classList.add('unlocked');

  dsm_part1_form14.onclick = function() {
    window.open("https://forms.office.com/r/5ywqqfF3MV", '_blank');
    toggleDisplay('reminder-forteen', 'none');
    dsm_part1_form_successful = 'true';
    if (dsm_part1_form_successful === 'true'){
      dsm_part3_form14.classList.remove('overlay');
      dsm_part1_form14.classList.remove('unlocked');

      for (let i = 0; i < dsm_username.options.length; i++) {
        if (dsm_username.options[i].value !== 'dsm-pm-pic') {
          dsm_username.options[i].style.display = 'none';
        } else {
          dsm_username.options[i].style.display = 'block';
        }
      }

      for (let i = 0; i < dsm_scd_number.options.length; i++) {
        if (dsm_scd_number.options[i].value !== 'dsm-3scd') {
          dsm_scd_number.options[i].style.display = 'none';
        } else {
          dsm_scd_number.options[i].style.display = 'block';
        }
      }
      
      for (let i = 0; i < dsm_3scd_name.options.length; i++) {
        if (dsm_3scd_name.options[i].value !== 'dsm-scd2-3-4') {
          dsm_3scd_name.options[i].style.display = 'none';
        } else {
          dsm_3scd_name.options[i].style.display = 'block';
        }
      }
    } else if (dsm_part1_form_successful === 'false') {
        setTimeout(() => {
          alert('Your TOA Part 1 is rejected. Please submit again.');
      }, 1000);
    }
  }

  function lockPart3form14status() {
    dsm_part3_form14.classList.add('locked');
    dsm_part3_form14.classList.remove('unlocked');
  }

  function lockP3form14() {
    window.location.href = "#"
    dsm_part3_form14.disabled = true;
    dsm_part3_form14.classList.add('locked');
    dsm_part3_form14.style.fontSize = "20px"
    dsm_part3_form14.style.fontWeight = 'bold';
    dsm_part3_form14.classList.remove('unlocked');
    dsm_part3_form14.innerHTML = 'Please return SCD 2 & 3 & 4 first';
  }

  function unlockPart3form14status() {
    dsm_part3_form14.classList.add('unlocked');
    dsm_part3_form14.classList.remove('locked');
  }

  function unlockP3form14() {
    window.open(dsm_part3_form14.dataset.href, '_blank');
    dsm_part3_form14.disabled = false;
    dsm_part3_form14.classList.add('unlocked');
    dsm_part3_form14.classList.remove('locked');
  }

  if ((distance2 <= 14) && (distance3 <= 14) && (distance4 <= 14))  {
    unlockPart3form14status();
  } else {
    lockPart3form14status();
  }

  dsm_part3_form14.addEventListener('click',() => {
    if ((distance2 <= 14) && (distance3 <= 14) && (distance4 <= 14)) {
      unlockP3form14();
      location.href = location.href.split('#')[0];
    } else {
      lockP3form14();
    }
  });

  /* DSM Part 1 & 3 (SCD 1 & 2 & 3 & 4) */
  const dsm_part1_form15 = document.getElementById('dsm-scd1-2-3-4-loan');
  const dsm_part3_form15 = document.getElementById('dsm-scd1-2-3-4-return');

  dsm_part3_form15.classList.add('overlay');
  dsm_part1_form15.classList.add('unlocked');

  dsm_part1_form15.onclick = function() {
    window.open("https://forms.office.com/r/5ywqqfF3MV", '_blank');
    toggleDisplay('reminder-fifteen', 'none');
    dsm_part1_form_successful = 'true';
    if (dsm_part1_form_successful === 'true'){
      dsm_part3_form15.classList.remove('overlay');
      dsm_part1_form15.classList.remove('unlocked');

      for (let i = 0; i < dsm_username.options.length; i++) {
        if (dsm_username.options[i].value !== 'dsm-pm-pic') {
          dsm_username.options[i].style.display = 'none';
        } else {
          dsm_username.options[i].style.display = 'block';
        }
      }

      for (let i = 0; i < dsm_scd_number.options.length; i++) {
        if (dsm_scd_number.options[i].value !== 'dsm-4scd') {
          dsm_scd_number.options[i].style.display = 'none';
        } else {
          dsm_scd_number.options[i].style.display = 'block';
        }
      }
      
      for (let i = 0; i < dsm_4scd_name.options.length; i++) {
        if (dsm_4scd_name.options[i].value !== 'dsm-scd1-2-3-4') {
          dsm_4scd_name.options[i].style.display = 'none';
        } else {
          dsm_4scd_name.options[i].style.display = 'block';
        }
      }
    } else if (dsm_part1_form_successful === 'false') {
        setTimeout(() => {
          alert('Your TOA Part 1 is rejected. Please submit again.');
      }, 1000);
    }
  }

  function lockPart3form15status() {
    dsm_part3_form15.classList.add('locked');
    dsm_part3_form15.classList.remove('unlocked');
  }

  function lockP3form15() {
    window.location.href = "#"
    dsm_part3_form15.disabled = true;
    dsm_part3_form15.classList.add('locked');
    dsm_part3_form15.style.fontSize = "20px"
    dsm_part3_form15.style.fontWeight = 'bold';
    dsm_part3_form15.classList.remove('unlocked');
    dsm_part3_form15.innerHTML = 'Please return SCD 1 & 2 & 3 & 4 first';
  }

  function unlockPart3form15status() {
    dsm_part3_form15.classList.add('unlocked');
    dsm_part3_form15.classList.remove('locked');
  }

  function unlockP3form15() {
    window.open(dsm_part3_form15.dataset.href, '_blank');
    dsm_part3_form15.disabled = false;
    dsm_part1_form_successful = 'true';
    if (dsm_part1_form_successful === 'true'){
      dsm_part3_form15.classList.remove('overlay');
      dsm_part1_form15.classList.remove('unlocked');

      for (let i = 0; i < dsm_username.options.length; i++) {
        if (dsm_username.options[i].value !== 'dsm-pm-pic') {
          dsm_username.options[i].style.display = 'none';
        } else {
          dsm_username.options[i].style.display = 'block';
        }
      }

      for (let i = 0; i < dsm_scd_number.options.length; i++) {
        if (dsm_scd_number.options[i].value !== 'dsm-4scd') {
          dsm_scd_number.options[i].style.display = 'none';
        } else {
          dsm_scd_number.options[i].style.display = 'block';
        }
      }
      
      for (let i = 0; i < dsm_4scd_name.options.length; i++) {
        if (dsm_4scd_name.options[i].value !== 'dsm-scd1-2-3-4') {
          dsm_4scd_name.options[i].style.display = 'none';
        } else {
          dsm_4scd_name.options[i].style.display = 'block';
        }
      }
    } else if (dsm_part1_form_successful === 'false') {
        setTimeout(() => {
          alert('Your TOA Part 1 is rejected. Please submit again.');
      }, 1000);
    }
  }

  if ((distance1 <= 14) && (distance2 <= 14) && (distance3 <= 14) && (distance4 <= 14))  {
    unlockPart3form15status();
  } else {
    lockPart3form15status();
  }

  dsm_part3_form15.addEventListener('click',() => {
    if ((distance1 <= 14) && (distance2 <= 14) && (distance3 <= 14) && (distance4 <= 14)) {
      unlockP3form15();
      location.href = location.href.split('#')[0];
    } else {
      lockP3form15();
    }
  });

   /* DSM Part 2 & 4 (SCD 1) */
   const dsm_part2_form1 = document.getElementById('dsm-scd1-loan-moc');
   const dsm_part4_form1 = document.getElementById('dsm-scd1-return-moc');
 
   dsm_part4_form1.classList.add('overlay');
   dsm_part2_form1.classList.add('unlocked');
 
   function lockPart4form1status() {
     dsm_part4_form1.classList.add('locked');
     dsm_part4_form1.classList.remove('unlocked');
   }
   
   dsm_part2_form1.onclick = function() {
      window.open("https://forms.office.com/r/L6biZWTxhp", '_blank');
      toggleDisplay('reminder-one-moc', 'none');
      dsm_part2_form_successful = 'true';
      if (dsm_part2_form_successful === 'true'){
        dsm_part4_form1.classList.remove('overlay');
        dsm_part2_form1.classList.remove('unlocked');

        for (let i = 0; i < dsm_username.options.length; i++) {
          if (dsm_username.options[i].value !== 'dsm-moc') {
            dsm_username.options[i].style.display = 'none';
          } else {
            dsm_username.options[i].style.display = 'block';
          }
        }

        for (let i = 0; i < dsm_scd_number_moc.options.length; i++) {
          if (dsm_scd_number.options[i].value !== 'dsm-1scd') {
            dsm_scd_number_moc.options[i].style.display = 'none';
          } else {
            dsm_scd_number_moc.options[i].style.display = 'block';
          }
        }
        
        for (let i = 0; i < dsm_1scd_name_moc.options.length; i++) {
          if (dsm_1scd_name_moc.options[i].value !== 'dsm-scd1') {
            dsm_1scd_name_moc.options[i].style.display = 'none';
          } else {
            dsm_1scd_name_moc.options[i].style.display = 'block';
          }
        }
      } else if (dsm_part2_form_successful === 'false') {
          setTimeout(() => {
            alert('Your TOA Part 2 is rejected. Please submit again.');
          }, 1000);
      }
   };
 
   function lockP4form1() {
     window.location.href = "#"
     dsm_part4_form1.disabled = true;
     dsm_part4_form1.classList.add('locked');
     dsm_part4_form1.style.fontSize = "20px"
     dsm_part4_form1.style.fontWeight = 'bold';
     dsm_part4_form1.classList.remove('unlocked');
     dsm_part4_form1.innerHTML = 'Please return SCD 1 first';
   }
   
   function unlockPart4form1status() {
     dsm_part4_form1.classList.add('unlocked');
     dsm_part4_form1.classList.remove('locked');
   }
   
   function unlockP4form1() {
     window.open(dsm_part4_form1.dataset.href, '_blank');
     dsm_part4_form1.disabled = false;
     dsm_part4_form1.classList.add('unlocked');
     dsm_part4_form1.classList.remove('locked');
   }
   
   if (distance1 <= 14) {
     unlockPart4form1status();
   } else {
     lockPart4form1status();
    }
   
    dsm_part4_form1.addEventListener('click',() => {
     if (distance1 <= 14) {
       unlockP4form1();
       location.href = location.href.split('#')[0];
     } else {
       lockP4form1();
     }
   });
 
   /* DSM Part 2 & 4 (SCD 2) */
   const dsm_part2_form2 = document.getElementById('dsm-scd2-loan-moc');
   const dsm_part4_form2 = document.getElementById('dsm-scd2-return-moc');
 
   dsm_part4_form2.classList.add('overlay');
   dsm_part2_form2.classList.add('unlocked');
 
   dsm_part2_form2.onclick = function() {
      window.open("https://forms.office.com/r/L6biZWTxhp", '_blank');
      toggleDisplay('reminder-two-moc', 'none');
      dsm_part2_form_successful = 'true';
      if (dsm_part2_form_successful === 'true'){
        dsm_part4_form2.classList.remove('overlay');
        dsm_part2_form2.classList.remove('unlocked');

        for (let i = 0; i < dsm_username.options.length; i++) {
          if (dsm_username.options[i].value !== 'dsm-moc') {
            dsm_username.options[i].style.display = 'none';
          } else {
            dsm_username.options[i].style.display = 'block';
          }
        }

        for (let i = 0; i < dsm_scd_number_moc.options.length; i++) {
          if (dsm_scd_number.options[i].value !== 'dsm-1scd') {
            dsm_scd_number_moc.options[i].style.display = 'none';
          } else {
            dsm_scd_number_moc.options[i].style.display = 'block';
          }
        }
        
        for (let i = 0; i < dsm_1scd_name_moc.options.length; i++) {
          if (dsm_1scd_name_moc.options[i].value !== 'dsm-scd2') {
            dsm_1scd_name_moc.options[i].style.display = 'none';
          } else {
            dsm_1scd_name_moc.options[i].style.display = 'block';
          }
        }
      } else if (dsm_part1_form_successful === 'false') {
          setTimeout(() => {
            alert('Your TOA Part 1 is rejected. Please submit again.');
          }, 1000);
      }
    };
 
   function lockPart4form2status() {
     dsm_part4_form2.classList.add('locked');
     dsm_part4_form2.classList.remove('unlocked');
   }
 
   function lockP4form2() {
     window.location.href = "#"
     dsm_part4_form2.disabled = true;
     dsm_part4_form2.classList.add('locked');
     dsm_part4_form2.style.fontSize = "20px"
     dsm_part4_form2.style.fontWeight = 'bold';
     dsm_part4_form2.classList.remove('unlocked');
     dsm_part4_form2.innerHTML = 'Please return SCD 2 first';
   }
 
   function unlockPart4form2status() {
     dsm_part4_form2.classList.add('unlocked');
     dsm_part4_form2.classList.remove('locked');
   }
 
   function unlockP4form2() {
     window.open(dsm_part4_form2.dataset.href, '_blank');
     dsm_part4_form2.disabled = false;
     dsm_part4_form2.classList.add('unlocked');
     dsm_part4_form2.classList.remove('locked');
   }
 
   if (distance2 <= 14) {
     unlockPart4form2status();
   } else {
     lockPart4form2status();
   }
 
   dsm_part4_form2.addEventListener('click',() => {
     if (distance2 <= 14) {
       unlockP4form2();
       location.href = location.href.split('#')[0];
     } else {
       lockP4form2();
     }
   });
 
   /* DSM Part 2 & 4 (SCD 3) */
   const dsm_part2_form3 = document.getElementById('dsm-scd3-loan-moc');
   const dsm_part4_form3 = document.getElementById('dsm-scd3-return-moc');
 
   dsm_part4_form3.classList.add('overlay');
   dsm_part2_form3.classList.add('unlocked');
 
   dsm_part2_form3.onclick = function() {
      window.open("https://forms.office.com/r/L6biZWTxhp", '_blank');
      toggleDisplay('reminder-three-moc','none');
      dsm_part2_form_successful = 'true';
      if (dsm_part2_form_successful === 'true'){
        dsm_part4_form3.classList.remove('overlay');
        dsm_part2_form3.classList.remove('unlocked');

        for (let i = 0; i < dsm_username.options.length; i++) {
          if (dsm_username.options[i].value !== 'dsm-moc') {
            dsm_username.options[i].style.display = 'none';
          } else {
            dsm_username.options[i].style.display = 'block';
          }
        }

        for (let i = 0; i < dsm_scd_number_moc.options.length; i++) {
          if (dsm_scd_number.options[i].value !== 'dsm-1scd') {
            dsm_scd_number_moc.options[i].style.display = 'none';
          } else {
            dsm_scd_number_moc.options[i].style.display = 'block';
          }
        }
        
        for (let i = 0; i < dsm_1scd_name_moc.options.length; i++) {
          if (dsm_4scd_name_moc.options[i].value !== 'dsm-scd3') {
            dsm_1scd_name_moc.options[i].style.display = 'none';
          } else {
            dsm_1scd_name_moc.options[i].style.display = 'block';
          }
        }
      } else if (dsm_part2_form_successful === 'false') {
          setTimeout(() => {
            alert('Your TOA Part 2 is rejected. Please submit again.');
          }, 1000);
      }
   };
 
   function lockPart4form3status() {
     dsm_part4_form3.classList.add('locked');
     dsm_part4_form3.classList.remove('unlocked');
   }
 
   function lockP4form3() {
     window.location.href = "#"
     dsm_part4_form3.disabled = true;
     dsm_part4_form3.classList.add('locked');
     dsm_part4_form3.style.fontSize = "20px"
     dsm_part4_form3.style.fontWeight = 'bold';
     dsm_part4_form3.classList.remove('unlocked');
     dsm_part4_form3.innerHTML = 'Please return SCD 3 first';
   }
 
   function unlockPart4form3status() {
     dsm_part4_form3.classList.add('unlocked');
     dsm_part4_form3.classList.remove('locked');
   }
 
   function unlockP4form3() {
     window.open(dsm_part4_form3.dataset.href, '_blank');
     dsm_part4_form3.disabled = false;
     dsm_part4_form3.classList.add('unlocked');
     dsm_part4_form3.classList.remove('locked');
   }
 
   if (distance3 <= 14) {
     unlockPart4form3status();
   } else {
     lockPart4form3status();
   }
 
   dsm_part4_form3.addEventListener('click',() => {
     if (distance3 <= 14) {
       unlockP4form3();
       location.href = location.href.split('#')[0];
     } else {
       lockP4form3();
     }
   });
 
   /* DSM Part 2 & 4 (SCD 4) */ 
   const dsm_part2_form4 = document.getElementById('dsm-scd4-loan-moc');
   const dsm_part4_form4 = document.getElementById('dsm-scd4-return-moc');
 
   dsm_part4_form4.classList.add('overlay');
   dsm_part2_form4.classList.add('unlocked');
 
   dsm_part2_form4.onclick = function() {
      window.open("https://forms.office.com/r/L6biZWTxhp", '_blank');
      toggleDisplay('reminder-four-moc', 'none');
      dsm_part2_form_successful = 'true';
      if (dsm_part2_form_successful === 'true'){
        dsm_part4_form4.classList.remove('overlay');
        dsm_part2_form4.classList.remove('unlocked');

        for (let i = 0; i < dsm_username.options.length; i++) {
          if (dsm_username.options[i].value !== 'dsm-moc') {
            dsm_username.options[i].style.display = 'none';
          } else {
            dsm_username.options[i].style.display = 'block';
          }
        }

        for (let i = 0; i < dsm_scd_number_moc.options.length; i++) {
          if (dsm_scd_number.options[i].value !== 'dsm-1scd') {
            dsm_scd_number_moc.options[i].style.display = 'none';
          } else {
            dsm_scd_number_moc.options[i].style.display = 'block';
          }
        }
        
        for (let i = 0; i < dsm_1scd_name_moc.options.length; i++) {
          if (dsm_1scd_name_moc.options[i].value !== 'dsm-scd4') {
            dsm_1scd_name_moc.options[i].style.display = 'none';
          } else {
            dsm_1scd_name_moc.options[i].style.display = 'block';
          }
        }
      } else if (dsm_part2_form_successful === 'false') {
          setTimeout(() => {
            alert('Your TOA Part 2 is rejected. Please submit again.');
          }, 1000);
      }
   };
 
   function lockPart4form4status() {
     dsm_part4_form4.classList.add('locked');
     dsm_part4_form4.classList.remove('unlocked');
   }
 
   function lockP4form4() {
     window.location.href = "#"
     dsm_part4_form4.disabled = true;
     dsm_part4_form4.classList.add('locked');
     dsm_part4_form4.style.fontSize = "20px"
     dsm_part4_form4.style.fontWeight = 'bold';
     dsm_part4_form4.classList.remove('unlocked');
     dsm_part4_form4.innerHTML = 'Please return SCD 4 first';
   }
 
   function unlockPart4form4status() {
     dsm_part4_form4.classList.add('unlocked');
     dsm_part4_form4.classList.remove('locked');
   }
 
   function unlockP4form4() {
     window.open(dsm_part4_form4.dataset.href, '_blank');
     dsm_part4_form4.disabled = false;
     dsm_part4_form4.classList.add('unlocked');
     dsm_part4_form4.classList.remove('locked');
   }
 
   if (distance4 <= 14) {
     unlockPart4form4status();
   } else {
     lockPart4form4status();
   }
 
   dsm_part4_form4.addEventListener('click',() => {
     if (distance4 <= 14) {
       unlockP4form4();
       location.href = location.href.split('#')[0];
     } else {
       lockP4form4();
     }
   });
 
   /* DSM Part 2 & 4 (SCD 1 & 2) */
   const dsm_part2_form5 = document.getElementById('dsm-scd1-2-loan-moc');
   const dsm_part4_form5 = document.getElementById('dsm-scd1-2-return-moc');
 
   dsm_part4_form5.classList.add('overlay');
   dsm_part2_form5.classList.add('unlocked');
 
   dsm_part2_form5.onclick = function() {
      window.open("https://forms.office.com/r/L6biZWTxhp", '_blank');
      toggleDisplay('reminder-five-moc', 'none');
      dsm_part2_form_successful = 'true';
      if (dsm_part2_form_successful === 'true'){
        dsm_part4_form5.classList.remove('overlay');
        dsm_part2_form5.classList.remove('unlocked');

        for (let i = 0; i < dsm_username.options.length; i++) {
          if (dsm_username.options[i].value !== 'dsm-moc') {
            dsm_username.options[i].style.display = 'none';
          } else {
            dsm_username.options[i].style.display = 'block';
          }
        }

        for (let i = 0; i < dsm_scd_number_moc.options.length; i++) {
          if (dsm_scd_number.options[i].value !== 'dsm-2scd') {
            dsm_scd_number_moc.options[i].style.display = 'none';
          } else {
            dsm_scd_number_moc.options[i].style.display = 'block';
          }
        }
        
        for (let i = 0; i < dsm_2scd_name_moc.options.length; i++) {
          if (dsm_2scd_name_moc.options[i].value !== 'dsm-scd1-2') {
            dsm_2scd_name_moc.options[i].style.display = 'none';
          } else {
            dsm_2scd_name_moc.options[i].style.display = 'block';
          }
        }
      } else if (dsm_part2_form_successful === 'false') {
          setTimeout(() => {
            alert('Your TOA Part 2 is rejected. Please submit again.');
          }, 1000);
      }
   };
 
   function lockPart4form5status() {
     dsm_part4_form5.classList.add('locked');
     dsm_part4_form5.classList.remove('unlocked');
   }
 
   function lockP4form5() {
     window.location.href = "#"
     dsm_part4_form5.disabled = true;
     dsm_part4_form5.classList.add('locked');
     dsm_part4_form5.style.fontSize = "20px"
     dsm_part4_form5.style.fontWeight = 'bold';
     dsm_part4_form5.classList.remove('unlocked');
     dsm_part4_form5.innerHTML = 'Please return SCD 1 & 2 first';
   }
 
   function unlockPart4form5status() {
     dsm_part4_form5.classList.add('unlocked');
     dsm_part4_form5.classList.remove('locked');
   }
 
   function unlockP4form5() {
     window.open(dsm_part4_form5.dataset.href, '_blank');
     dsm_part4_form5.disabled = false;
     dsm_part4_form5.classList.add('unlocked');
     dsm_part4_form5.classList.remove('locked');
   }
 
   if ((distance1 <= 14) && (distance2 <= 14))  {
     unlockPart4form5status();
   } else {
     lockPart4form5status();
   }
 
   dsm_part4_form5.addEventListener('click',() => {
     if ((distance1 <= 14) && (distance2 <= 14)) {
       unlockP4form5();
       location.href = location.href.split('#')[0];
     } else {
       lockP4form5();
     }
   });
 
   /* DSM Part 2 & 4 (SCD 1 & 3) */
   const dsm_part2_form6 = document.getElementById('dsm-scd1-3-loan-moc');
   const dsm_part4_form6 = document.getElementById('dsm-scd1-3-return-moc');
 
   dsm_part4_form6.classList.add('overlay');
   dsm_part2_form6.classList.add('unlocked');
 
   dsm_part2_form6.onclick = function() {
        window.open("https://forms.office.com/r/L6biZWTxhp", '_blank');
        toggleDisplay('reminder-six-moc', 'none');
        dsm_part2_form_successful = 'true';
      if (dsm_part2_form_successful === 'true'){
        dsm_part4_form6.classList.remove('overlay');
        dsm_part2_form6.classList.remove('unlocked');

        for (let i = 0; i < dsm_username.options.length; i++) {
          if (dsm_username.options[i].value !== 'dsm-moc') {
            dsm_username.options[i].style.display = 'none';
          } else {
            dsm_username.options[i].style.display = 'block';
          }
        }

        for (let i = 0; i < dsm_scd_number_moc.options.length; i++) {
          if (dsm_scd_number.options[i].value !== 'dsm-2scd') {
            dsm_scd_number_moc.options[i].style.display = 'none';
          } else {
            dsm_scd_number_moc.options[i].style.display = 'block';
          }
        }
        
        for (let i = 0; i < dsm_2scd_name_moc.options.length; i++) {
          if (dsm_2scd_name_moc.options[i].value !== 'dsm-scd1-3') {
            dsm_2scd_name_moc.options[i].style.display = 'none';
          } else {
            dsm_2scd_name_moc.options[i].style.display = 'block';
          }
        }
      } else if (dsm_part2_form_successful === 'false') {
          setTimeout(() => {
            alert('Your TOA Part 2 is rejected. Please submit again.');
          }, 1000);
      }
    };
 
   function lockPart4form6status() {
     dsm_part4_form6.classList.add('locked');
     dsm_part4_form6.classList.remove('unlocked');
   }
 
   function lockP4form6() {
     window.location.href = "#"
     dsm_part4_form6.disabled = true;
     dsm_part4_form6.classList.add('locked');
     dsm_part4_form6.style.fontSize = "20px"
     dsm_part4_form6.style.fontWeight = 'bold';
     dsm_part4_form6.classList.remove('unlocked');
     dsm_part4_form6.innerHTML = 'Please return SCD 1 & 3 first';
   }
 
   function unlockPart4form6status() {
     dsm_part4_form6.classList.add('unlocked');
     dsm_part4_form6.classList.remove('locked');
   }
 
   function unlockP4form6() {
     window.open(dsm_part4_form6.dataset.href, '_blank');
     dsm_part4_form6.disabled = false;
     dsm_part4_form6.classList.add('unlocked');
     dsm_part4_form6.classList.remove('locked');
   }
 
   if ((distance1 <= 14) && (distance3 <= 14))  {
     unlockPart4form6status();
   } else {
     lockPart4form6status();
   }
 
   dsm_part4_form6.addEventListener('click',() => {
     if ((distance1 <= 14) && (distance3 <= 14)) {
       unlockP4form6();
       location.href = location.href.split('#')[0];
     } else {
       lockP4form6();
     }
   });
 
   /* DSM Part 2 & 4 (SCD 1 & 4) */
   const dsm_part2_form7 = document.getElementById('dsm-scd1-4-loan-moc');
   const dsm_part4_form7 = document.getElementById('dsm-scd1-4-return-moc');
 
   dsm_part4_form7.classList.add('overlay');
   dsm_part2_form7.classList.add('unlocked');
 
   dsm_part2_form7.onclick = function() {
      window.open("https://forms.office.com/r/L6biZWTxhp", '_blank');
      toggleDisplay('reminder-seven-moc', 'none');
      dsm_part2_form_successful = 'true';
      if (dsm_part2_form_successful === 'true'){
        dsm_part4_form7.classList.remove('overlay');
        dsm_part2_form7.classList.remove('unlocked');

        for (let i = 0; i < dsm_username.options.length; i++) {
          if (dsm_username.options[i].value !== 'dsm-moc') {
            dsm_username.options[i].style.display = 'none';
          } else {
            dsm_username.options[i].style.display = 'block';
          }
        }

        for (let i = 0; i < dsm_scd_number_moc.options.length; i++) {
          if (dsm_scd_number.options[i].value !== 'dsm-2scd') {
            dsm_scd_number_moc.options[i].style.display = 'none';
          } else {
            dsm_scd_number_moc.options[i].style.display = 'block';
          }
        }
        
        for (let i = 0; i < dsm_2scd_name_moc.options.length; i++) {
          if (dsm_2scd_name_moc.options[i].value !== 'dsm-scd1-4') {
            dsm_2scd_name_moc.options[i].style.display = 'none';
          } else {
            dsm_2scd_name_moc.options[i].style.display = 'block';
          }
        }
      } else if (dsm_part2_form_successful === 'false') {
          setTimeout(() => {
            alert('Your TOA Part 2 is rejected. Please submit again.');
          }, 1000);
      }
    }

   function lockPart4form7status() {
     dsm_part4_form7.classList.add('locked');
     dsm_part4_form7.classList.remove('unlocked');
   }
 
   function lockP4form7() {
     window.location.href = "#"
     dsm_part4_form7.disabled = true;
     dsm_part4_form7.classList.add('locked');
     dsm_part4_form7.style.fontSize = "20px"
     dsm_part4_form7.style.fontWeight = 'bold';
     dsm_part4_form7.classList.remove('unlocked');
     dsm_part4_form7.innerHTML = 'Please return SCD 1 & 4 first';
   }
 
   function unlockPart4form7status() {
     dsm_part4_form7.classList.add('unlocked');
     dsm_part4_form7.classList.remove('locked');
   }
 
   function unlockP4form7() {
     window.open(dsm_part4_form7.dataset.href, '_blank');
     dsm_part4_form7.disabled = false;
     dsm_part4_form7.classList.add('unlocked');
     dsm_part4_form7.classList.remove('locked');
   }
 
   if ((distance1 <= 14) && (distance4 <= 14))  {
     unlockPart4form7status();
   } else {
     lockPart4form7status();
   }
 
   dsm_part4_form7.addEventListener('click',() => {
     if ((distance1 <= 14) && (distance4 <= 14)) {
       unlockP4form7();
       location.href = location.href.split('#')[0];
     } else {
       lockP4form7();
     }
   });
 
   /* DSM Part 2 & 4 (SCD 2 & 3) */
   const dsm_part2_form8 = document.getElementById('dsm-scd2-3-loan-moc');
   const dsm_part4_form8 = document.getElementById('dsm-scd2-3-return-moc');
 
   dsm_part4_form8.classList.add('overlay');
   dsm_part2_form8.classList.add('unlocked');
 
   dsm_part2_form8.onclick = function() {
      window.open("https://forms.office.com/r/L6biZWTxhp", '_blank');
      toggleDisplay('reminder-eight-moc','none');
      dsm_part2_form_successful = 'true';
      if (dsm_part2_form_successful === 'true'){
        dsm_part4_form8.classList.remove('overlay');
        dsm_part2_form8.classList.remove('unlocked');

        for (let i = 0; i < dsm_username.options.length; i++) {
          if (dsm_username.options[i].value !== 'dsm-moc') {
            dsm_username.options[i].style.display = 'none';
          } else {
            dsm_username.options[i].style.display = 'block';
          }
        }

        for (let i = 0; i < dsm_scd_number_moc.options.length; i++) {
          if (dsm_scd_number.options[i].value !== 'dsm-2scd') {
            dsm_scd_number_moc.options[i].style.display = 'none';
          } else {
            dsm_scd_number_moc.options[i].style.display = 'block';
          }
        }
        
        for (let i = 0; i < dsm_2scd_name_moc.options.length; i++) {
          if (dsm_2scd_name_moc.options[i].value !== 'dsm-scd2-3') {
            dsm_2scd_name_moc.options[i].style.display = 'none';
          } else {
            dsm_2scd_name_moc.options[i].style.display = 'block';
          }
        }
      } else if (dsm_part2_form_successful === 'false') {
          setTimeout(() => {
            alert('Your TOA Part 2 is rejected. Please submit again.');
          }, 1000);
      }
   }
 
   function lockPart4form8status() {
     dsm_part4_form8.classList.add('locked');
     dsm_part4_form8.classList.remove('unlocked');
   }
 
   function lockP4form8() {
     window.location.href = "#"
     dsm_part4_form8.disabled = true;
     dsm_part4_form8.classList.add('locked');
     dsm_part4_form8.style.fontSize = "20px"
     dsm_part4_form8.style.fontWeight = 'bold';
     dsm_part4_form8.classList.remove('unlocked');
     dsm_part4_form8.innerHTML = 'Please return SCD 2 & 3 first';
   }
 
   function unlockPart4form8status() {
     dsm_part4_form8.classList.add('unlocked');
     dsm_part4_form8.classList.remove('locked');
   }
 
   function unlockP4form8() {
     window.open(dsm_part4_form8.dataset.href, '_blank');
     dsm_part4_form8.disabled = false;
     dsm_part4_form8.classList.add('unlocked');
     dsm_part4_form8.classList.remove('locked');
   }
 
   if ((distance2 <= 14) && (distance3 <= 14))  {
     unlockPart4form8status();
   } else {
     lockPart4form8status();
   }
 
   dsm_part4_form8.addEventListener('click',() => {
     if ((distance2 <= 14) && (distance3 <= 14)) {
       unlockP4form8();
       location.href = location.href.split('#')[0];
     } else {
       lockP4form8();
     }
   });
 
   /* DSM Part 2 & 4 (SCD 2 & 4) */
   const dsm_part2_form9 = document.getElementById('dsm-scd2-4-loan-moc');
   const dsm_part4_form9 = document.getElementById('dsm-scd2-4-return-moc');
 
   dsm_part4_form9.classList.add('overlay');
   dsm_part2_form9.classList.add('unlocked');
 
   dsm_part2_form9.onclick = function() {
      window.open("https://forms.office.com/r/L6biZWTxhp", '_blank');
      toggleDisplay('reminder-nine-moc', 'none');
      dsm_part2_form_successful = 'true';
      if (dsm_part2_form_successful === 'true'){
        dsm_part4_form9.classList.remove('overlay');
        dsm_part2_form9.classList.remove('unlocked');

        for (let i = 0; i < dsm_username.options.length; i++) {
          if (dsm_username.options[i].value !== 'dsm-moc') {
            dsm_username.options[i].style.display = 'none';
          } else {
            dsm_username.options[i].style.display = 'block';
          }
        }

        for (let i = 0; i < dsm_scd_number_moc.options.length; i++) {
          if (dsm_scd_number.options[i].value !== 'dsm-2scd') {
            dsm_scd_number_moc.options[i].style.display = 'none';
          } else {
            dsm_scd_number_moc.options[i].style.display = 'block';
          }
        }
        
        for (let i = 0; i < dsm_2scd_name_moc.options.length; i++) {
          if (dsm_2scd_name_moc.options[i].value !== 'dsm-scd2-4') {
            dsm_2scd_name_moc.options[i].style.display = 'none';
          } else {
            dsm_2scd_name_moc.options[i].style.display = 'block';
          }
        }
      } else if (dsm_part2_form_successful === 'false') {
          setTimeout(() => {
            alert('Your TOA Part 2 is rejected. Please submit again.');
          }, 1000);
      }
   }
 
   function lockPart4form9status() {
     dsm_part4_form9.classList.add('locked');
     dsm_part4_form9.classList.remove('unlocked');
   }
 
   function lockP4form9() {
     window.location.href = "#"
     dsm_part4_form9.disabled = true;
     dsm_part4_form9.classList.add('locked');
     dsm_part4_form9.style.fontSize = "20px"
     dsm_part4_form9.style.fontWeight = 'bold';
     dsm_part4_form9.classList.remove('unlocked');
     dsm_part4_form9.innerHTML = 'Please return SCD 2 & 4 first';
   }
 
   function unlockPart4form9status() {
     dsm_part4_form9.classList.add('unlocked');
     dsm_part4_form9.classList.remove('locked');
   }
 
   function unlockP4form9() {
     window.open(dsm_part4_form9.dataset.href, '_blank');
     dsm_part4_form9.disabled = false;
     dsm_part4_form9.classList.add('unlocked');
     dsm_part4_form9.classList.remove('locked');
   }
 
   if ((distance2 <= 14) && (distance4 <= 14))  {
     unlockPart4form9status();
   } else {
     lockPart4form9status();
   }
 
   dsm_part4_form9.addEventListener('click',() => {
     if ((distance2 <= 14) && (distance4 <= 14)) {
       unlockP4form9();
       location.href = location.href.split('#')[0];
     } else {
       lockP4form9();
     }
   });
 
   /* DSM Part 2 & 4 (SCD 3 & 4) */
   const dsm_part2_form10 = document.getElementById('dsm-scd3-4-loan-moc');
   const dsm_part4_form10 = document.getElementById('dsm-scd3-4-return-moc');
 
   dsm_part4_form10.classList.add('overlay');
   dsm_part2_form10.classList.add('unlocked');
 
   dsm_part2_form10.onclick = function() {
      window.open("https://forms.office.com/r/L6biZWTxhp", '_blank');
      toggleDisplay('reminder-ten-moc', 'none');
      dsm_part2_form_successful = 'true';
      if (dsm_part2_form_successful === 'true'){
        dsm_part4_form10.classList.remove('overlay');
        dsm_part2_form10.classList.remove('unlocked');

        for (let i = 0; i < dsm_username.options.length; i++) {
          if (dsm_username.options[i].value !== 'dsm-moc') {
            dsm_username.options[i].style.display = 'none';
          } else {
            dsm_username.options[i].style.display = 'block';
          }
        }

        for (let i = 0; i < dsm_scd_number_moc.options.length; i++) {
          if (dsm_scd_number.options[i].value !== 'dsm-2scd') {
            dsm_scd_number_moc.options[i].style.display = 'none';
          } else {
            dsm_scd_number_moc.options[i].style.display = 'block';
          }
        }
        
        for (let i = 0; i < dsm_2scd_name_moc.options.length; i++) {
          if (dsm_2scd_name_moc.options[i].value !== 'dsm-scd3-4') {
            dsm_2scd_name_moc.options[i].style.display = 'none';
          } else {
            dsm_2scd_name_moc.options[i].style.display = 'block';
          }
        }
      } else if (dsm_part2_form_successful === 'false') {
          setTimeout(() => {
            alert('Your TOA Part 2 is rejected. Please submit again.');
          }, 1000);
      }
   }
 
   function lockPart4form10status() {
     dsm_part4_form10.classList.add('locked');
     dsm_part4_form10.classList.remove('unlocked');
   }
 
   function lockP4form10() {
     window.location.href = "#"
     dsm_part4_form10.disabled = true;
     dsm_part4_form10.classList.add('locked');
     dsm_part4_form10.style.fontSize = "20px"
     dsm_part4_form10.style.fontWeight = 'bold';
     dsm_part4_form10.classList.remove('unlocked');
     dsm_part4_form10.innerHTML = 'Please return SCD 3 & 4 first';
   }
 
   function unlockPart4form10status() {
     dsm_part4_form10.classList.add('unlocked');
     dsm_part4_form10.classList.remove('locked');
   }
 
   function unlockP4form10() {
     window.open(dsm_part4_form10.dataset.href, '_blank');
     dsm_part4_form10.disabled = false;
     dsm_part4_form10.classList.add('unlocked');
     dsm_part4_form10.classList.remove('locked');
   }
 
   if ((distance3 <= 14) && (distance4 <= 14))  {
     unlockPart4form10status();
   } else {
     lockPart4form10status();
   }
 
   dsm_part3_form10.addEventListener('click',() => {
     if ((distance3 <= 14) && (distance4 <= 14)) {
       unlockP4form10();
       location.href = location.href.split('#')[0];
     } else {
       lockP4form10();
     }
   });
 
   /* DSM Part 2 & 4 (SCD 1 & 2 & 3) */
   const dsm_part2_form11 = document.getElementById('dsm-scd1-2-3-loan-moc');
   const dsm_part4_form11 = document.getElementById('dsm-scd1-2-3-return-moc');
 
   dsm_part4_form11.classList.add('overlay');
   dsm_part2_form11.classList.add('unlocked');
 
   dsm_part2_form11.onclick = function() {
      window.open("https://forms.office.com/r/L6biZWTxhp", '_blank');
      toggleDisplay('reminder-eleven-moc', 'none');
      dsm_part2_form_successful = 'true';
      if (dsm_part2_form_successful === 'true'){
        dsm_part4_form11.classList.remove('overlay');
        dsm_part2_form11.classList.remove('unlocked');

        for (let i = 0; i < dsm_username.options.length; i++) {
          if (dsm_username.options[i].value !== 'dsm-moc') {
            dsm_username.options[i].style.display = 'none';
          } else {
            dsm_username.options[i].style.display = 'block';
          }
        }

        for (let i = 0; i < dsm_scd_number_moc.options.length; i++) {
          if (dsm_scd_number.options[i].value !== 'dsm-3scd') {
            dsm_scd_number_moc.options[i].style.display = 'none';
          } else {
            dsm_scd_number_moc.options[i].style.display = 'block';
          }
        }
        
        for (let i = 0; i < dsm_3scd_name_moc.options.length; i++) {
          if (dsm_3scd_name_moc.options[i].value !== 'dsm-scd1-2-3') {
            dsm_3scd_name_moc.options[i].style.display = 'none';
          } else {
            dsm_3scd_name_moc.options[i].style.display = 'block';
          }
        }
      } else if (dsm_part2_form_successful === 'false') {
          setTimeout(() => {
            alert('Your TOA Part 2 is rejected. Please submit again.');
          }, 1000);
      }
   }
 
   function lockPart4form11status() {
     dsm_part4_form11.classList.add('locked');
     dsm_part4_form11.classList.remove('unlocked');
   }
 
   function lockP4form11() {
     window.location.href = "#"
     dsm_part4_form11.disabled = true;
     dsm_part4_form11.classList.add('locked');
     dsm_part4_form11.style.fontSize = "20px"
     dsm_part4_form11.style.fontWeight = 'bold';
     dsm_part4_form11.classList.remove('unlocked');
     dsm_part4_form11.innerHTML = 'Please return SCD 1 & 2 & 3 first';
   }
 
   function unlockPart4form11status() {
     dsm_part4_form11.classList.add('unlocked');
     dsm_part4_form11.classList.remove('locked');
   }
 
   function unlockP4form11() {
     window.open(dsm_part4_form11.dataset.href, '_blank');
     dsm_part4_form11.disabled = false;
     dsm_part4_form11.classList.add('unlocked');
     dsm_part4_form11.classList.remove('locked');
   }
 
   if ((distance1 <= 14) && (distance2 <= 14) && (distance3 <= 14))  {
     unlockPart4form11status();
   } else {
     lockPart4form11status();
   }
 
   dsm_part4_form11.addEventListener('click',() => {
     if ((distance1 <= 14) && (distance2 <= 14) && (distance3 <= 14)) {
       unlockP4form11();
       location.href = location.href.split('#')[0];
     } else {
       lockP4form11();
     }
   });
 
   /* DSM Part 2 & 4 (SCD 1 & 2 & 4) */
   const dsm_part2_form12 = document.getElementById('dsm-scd1-2-4-loan-moc');
   const dsm_part4_form12 = document.getElementById('dsm-scd1-2-4-return-moc');
 
   dsm_part4_form12.classList.add('overlay');
   dsm_part2_form12.classList.add('unlocked');
 
   dsm_part2_form12.onclick = function() {
      window.open("https://forms.office.com/r/L6biZWTxhp", '_blank');
      toggleDisplay('reminder-twelve-moc', 'none');
      dsm_part2_form_successful = 'true';
      if (dsm_part2_form_successful === 'true'){
        dsm_part4_form12.classList.remove('overlay');
        dsm_part2_form12.classList.remove('unlocked');

        for (let i = 0; i < dsm_username.options.length; i++) {
          if (dsm_username.options[i].value !== 'dsm-moc') {
            dsm_username.options[i].style.display = 'none';
          } else {
            dsm_username.options[i].style.display = 'block';
          }
        }

        for (let i = 0; i < dsm_scd_number_moc.options.length; i++) {
          if (dsm_scd_number.options[i].value !== 'dsm-3scd') {
            dsm_scd_number_moc.options[i].style.display = 'none';
          } else {
            dsm_scd_number_moc.options[i].style.display = 'block';
          }
        }
        
        for (let i = 0; i < dsm_3scd_name_moc.options.length; i++) {
          if (dsm_3scd_name_moc.options[i].value !== 'dsm-scd1-2-4') {
            dsm_3scd_name_moc.options[i].style.display = 'none';
          } else {
            dsm_3scd_name_moc.options[i].style.display = 'block';
          }
        }
      } else if (dsm_part2_form_successful === 'false') {
          setTimeout(() => {
            alert('Your TOA Part 2 is rejected. Please submit again.');
          }, 1000);
      }
   }
 
   function lockPart4form12status() {
     dsm_part4_form12.classList.add('locked');
     dsm_part4_form12.classList.remove('unlocked');
   }
 
   function lockP4form12() {
     window.location.href = "#"
     dsm_part4_form12.disabled = true;
     dsm_part4_form12.classList.add('locked');
     dsm_part4_form12.style.fontSize = "20px"
     dsm_part4_form12.style.fontWeight = 'bold';
     dsm_part4_form12.classList.remove('unlocked');
     dsm_part4_form12.innerHTML = 'Please return SCD 1 & 2 & 4 first';
   }
 
   function unlockPart4form12status() {
     dsm_part4_form12.classList.add('unlocked');
     dsm_part4_form12.classList.remove('locked');
   }
 
   function unlockP4form12() {
     window.open(dsm_part4_form12.dataset.href, '_blank');
     dsm_part4_form12.disabled = false;
     dsm_part4_form12.classList.add('unlocked');
     dsm_part4_form12.classList.remove('locked');
   }
 
   if ((distance1 <= 14) && (distance2 <= 14) && (distance4 <= 14))  {
     unlockPart4form12status();
   } else {
     lockPart4form12status();
   }
 
   dsm_part4_form12.addEventListener('click',() => {
     if ((distance1 <= 14) && (distance2 <= 14) && (distance4 <= 14)) {
       unlockP4form12();
       location.href = location.href.split('#')[0];
     } else {
       lockP4form12();
     }
   });
 
   /* DSM Part 2 & 4 (SCD 1 & 3 & 4) */
   const dsm_part2_form13 = document.getElementById('dsm-scd1-3-4-loan-moc');
   const dsm_part4_form13 = document.getElementById('dsm-scd1-3-4-return-moc');
 
   dsm_part4_form13.classList.add('overlay');
   dsm_part2_form13.classList.add('unlocked');
 
   dsm_part2_form13.onclick = function() {
      window.open("https://forms.office.com/r/L6biZWTxhp", '_blank');
      toggleDisplay('reminder-thirteen-moc', 'none');
      dsm_part2_form_successful = 'true';
      if (dsm_part2_form_successful === 'true'){
        dsm_part4_form13.classList.remove('overlay');
        dsm_part2_form13.classList.remove('unlocked');

        for (let i = 0; i < dsm_username.options.length; i++) {
          if (dsm_username.options[i].value !== 'dsm-moc') {
            dsm_username.options[i].style.display = 'none';
          } else {
            dsm_username.options[i].style.display = 'block';
          }
        }

        for (let i = 0; i < dsm_scd_number_moc.options.length; i++) {
          if (dsm_scd_number.options[i].value !== 'dsm-3scd') {
            dsm_scd_number_moc.options[i].style.display = 'none';
          } else {
            dsm_scd_number_moc.options[i].style.display = 'block';
          }
        }
        
        for (let i = 0; i < dsm_3scd_name_moc.options.length; i++) {
          if (dsm_3scd_name_moc.options[i].value !== 'dsm-scd1-3-4') {
            dsm_3scd_name_moc.options[i].style.display = 'none';
          } else {
            dsm_3scd_name_moc.options[i].style.display = 'block';
          }
        }
      } else if (dsm_part2_form_successful === 'false') {
          setTimeout(() => {
            alert('Your TOA Part 2 is rejected. Please submit again.');
          }, 1000);
      }
   }
 
   function lockPart4form13status() {
     dsm_part4_form13.classList.add('locked');
     dsm_part4_form13.classList.remove('unlocked');
   }
 
   function lockP4form13() {
     window.location.href = "#"
     dsm_part4_form13.disabled = true;
     dsm_part4_form13.classList.add('locked');
     dsm_part4_form13.style.fontSize = "20px"
     dsm_part4_form13.style.fontWeight = 'bold';
     dsm_part4_form13.classList.remove('unlocked');
     dsm_part4_form13.innerHTML = 'Please return SCD 1 & 3 & 4 first';
   }
 
   function unlockPart4form13status() {
     dsm_part4_form13.classList.add('unlocked');
     dsm_part4_form13.classList.remove('locked');
   }
 
   function unlockP4form13() {
     window.open(dsm_part4_form13.dataset.href, '_blank');
     dsm_part4_form13.disabled = false;
     dsm_part4_form13.classList.add('unlocked');
     dsm_part4_form13.classList.remove('locked');
   }
 
   if ((distance1 <= 14) && (distance3 <= 14) && (distance4 <= 14))  {
     unlockPart4form13status();
   } else {
     lockPart4form13status();
   }
 
   dsm_part4_form13.addEventListener('click',() => {
     if ((distance1 <= 14) && (distance3 <= 14) && (distance4 <= 14)) {
       unlockP4form13();
       location.href = location.href.split('#')[0];
     } else {
       lockP4form13();
     }
   });
 
   /* DSM Part 2 & 4 (SCD 2 & 3 & 4) */
   const dsm_part2_form14 = document.getElementById('dsm-scd2-3-4-loan-moc');
   const dsm_part4_form14 = document.getElementById('dsm-scd2-3-4-return-moc');
 
   dsm_part4_form14.classList.add('overlay');
   dsm_part2_form14.classList.add('unlocked');
 
   dsm_part2_form14.onclick = function() {
      window.open("https://forms.office.com/r/L6biZWTxhp", '_blank');
      toggleDisplay('reminder-forteen-moc', 'none');
      dsm_part2_form_successful = 'true';
      if (dsm_part2_form_successful === 'true'){
        dsm_part4_form14.classList.remove('overlay');
        dsm_part2_form14.classList.remove('unlocked');

        for (let i = 0; i < dsm_username.options.length; i++) {
          if (dsm_username.options[i].value !== 'dsm-moc') {
            dsm_username.options[i].style.display = 'none';
          } else {
            dsm_username.options[i].style.display = 'block';
          }
        }

        for (let i = 0; i < dsm_scd_number_moc.options.length; i++) {
          if (dsm_scd_number.options[i].value !== 'dsm-3scd') {
            dsm_scd_number_moc.options[i].style.display = 'none';
          } else {
            dsm_scd_number_moc.options[i].style.display = 'block';
          }
        }
        
        for (let i = 0; i < dsm_3scd_name_moc.options.length; i++) {
          if (dsm_3scd_name_moc.options[i].value !== 'dsm-scd2-3-4') {
            dsm_3scd_name_moc.options[i].style.display = 'none';
          } else {
            dsm_3scd_name_moc.options[i].style.display = 'block';
          }
        }
      } else if (dsm_part2_form_successful === 'false') {
          setTimeout(() => {
            alert('Your TOA Part 2 is rejected. Please submit again.');
          }, 1000);
      }
   }
 
   function lockPart4form14status() {
     dsm_part4_form14.classList.add('locked');
     dsm_part4_form14.classList.remove('unlocked');
   }
 
   function lockP4form14() {
     window.location.href = "#"
     dsm_part4_form14.disabled = true;
     dsm_part4_form14.classList.add('locked');
     dsm_part4_form14.style.fontSize = "20px"
     dsm_part4_form14.style.fontWeight = 'bold';
     dsm_part4_form14.classList.remove('unlocked');
     dsm_part4_form14.innerHTML = 'Please return SCD 2 & 3 & 4 first';
   }
 
   function unlockPart4form14status() {
     dsm_part4_form14.classList.add('unlocked');
     dsm_part4_form14.classList.remove('locked');
   }
 
   function unlockP4form14() {
     window.open(dsm_part4_form14.dataset.href, '_blank');
     dsm_part4_form14.disabled = false;
     dsm_part4_form14.classList.add('unlocked');
     dsm_part4_form14.classList.remove('locked');
   }
 
   if ((distance2 <= 14) && (distance3 <= 14) && (distance4 <= 14))  {
     unlockPart4form14status();
   } else {
     lockPart4form14status();
   }
 
   dsm_part4_form14.addEventListener('click',() => {
     if ((distance2 <= 14) && (distance3 <= 14) && (distance4 <= 14)) {
       unlockP4form14();
       location.href = location.href.split('#')[0];
     } else {
       lockP4form14();
     }
   });
 
   /* DSM Part 1 & 3 (SCD 1 & 2 & 3 & 4) */
   const dsm_part2_form15 = document.getElementById('dsm-scd1-2-3-4-loan-moc');
   const dsm_part4_form15 = document.getElementById('dsm-scd1-2-3-4-return-moc');
 
   dsm_part4_form15.classList.add('overlay');
   dsm_part2_form15.classList.add('unlocked');
 
   dsm_part2_form15.onclick = function() {
      window.open("https://forms.office.com/r/L6biZWTxhp", '_blank');
      toggleDisplay('reminder-fifteen-moc', 'none');
      dsm_part2_form_successful = 'true';
      if (dsm_part2_form_successful === 'true'){
        dsm_part4_form8.classList.remove('overlay');
        dsm_part2_form8.classList.remove('unlocked');

        for (let i = 0; i < dsm_username.options.length; i++) {
          if (dsm_username.options[i].value !== 'dsm-moc') {
            dsm_username.options[i].style.display = 'none';
          } else {
            dsm_username.options[i].style.display = 'block';
          }
        }

        for (let i = 0; i < dsm_scd_number_moc.options.length; i++) {
          if (dsm_scd_number.options[i].value !== 'dsm-4scd') {
            dsm_scd_number_moc.options[i].style.display = 'none';
          } else {
            dsm_scd_number_moc.options[i].style.display = 'block';
          }
        }
        
        for (let i = 0; i < dsm_4scd_name_moc.options.length; i++) {
          if (dsm_4scd_name_moc.options[i].value !== 'dsm-scd1-2-3-4') {
            dsm_4scd_name_moc.options[i].style.display = 'none';
          } else {
            dsm_4scd_name_moc.options[i].style.display = 'block';
          }
        }
      } else if (dsm_part2_form_successful === 'false') {
          setTimeout(() => {
            alert('Your TOA Part 2 is rejected. Please submit again.');
          }, 1000);
      }
   }
 
   function lockPart4form15status() {
     dsm_part4_form15.classList.add('locked');
     dsm_part4_form15.classList.remove('unlocked');
   }
 
   function lockP4form15() {
     window.location.href = "#"
     dsm_part4_form15.disabled = true;
     dsm_part4_form15.classList.add('locked');
     dsm_part4_form15.style.fontSize = "20px"
     dsm_part4_form15.style.fontWeight = 'bold';
     dsm_part4_form15.classList.remove('unlocked');
     dsm_part4_form15.innerHTML = 'Please return SCD 1 & 2 & 3 & 4 first';
   }
 
   function unlockPart4form15status() {
     dsm_part3_form15.classList.add('unlocked');
     dsm_part3_form15.classList.remove('locked');
   }
 
   function unlockP4form15() {
     window.open(dsm_part4_form15.dataset.href, '_blank');
     dsm_part4_form15.disabled = false;
     dsm_part4_form15.classList.add('unlocked');
     dsm_part4_form15.classList.remove('locked');
   }
 
   if ((distance1 <= 14) && (distance2 <= 14) && (distance3 <= 14) && (distance4 <= 14))  {
     unlockPart4form15status();
   } else {
     lockPart4form15status();
   }
 
   dsm_part4_form15.addEventListener('click',() => {
     if ((distance1 <= 14) && (distance2 <= 14) && (distance3 <= 14) && (distance4 <= 14)) {
       unlockP4form15();
       location.href = location.href.split('#')[0];
     } else {
       lockP4form15();
     }
   });

});