document.getElementById("tip_form").onchange = function () {
  const bill = Number(document.getElementById("amount").value);
  const tip = document.getElementById("tip_input").value;
  const tipOutput = document.getElementById("tip_output");

  const tipAmmount = document.getElementById("tip-num");
  const totalBilWithTip = document.getElementById("total_amount");

  //   restlt
  const tipvalue = bill * (tip / 100);
  const finalBill = bill + tipvalue;
  tipAmmount.value = tipvalue.toFixed(2);
  totalBilWithTip.value = finalBill.toFixed(2);

  //   showing restlt
  tipOutput.innerHTML = `${tip}%`;
};
