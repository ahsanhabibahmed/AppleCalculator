// ডিসপ্লে এলিমেন্টটি সিলেক্ট করা
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let calculation = '';

// সব বাটনের জন্য লুপ চালানো
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === '=') {
            // হিসাব সম্পন্ন করা
            try {
                // eval() ফাংশন স্ট্রিং থেকে ম্যাথমেটিক্যাল ক্যালকুলেশন করে
                calculation = eval(calculation);
                display.value = calculation;
            } catch (error) {
                display.value = "Error";
                calculation = "";
            }
        } 
        else if (value === 'C') {
            // ডিসপ্লে ক্লিয়ার করা
            calculation = '';
            display.value = '';
        } 
        else {
            // সংখ্যা বা অপারেটর যোগ করা
            calculation += value;
            display.value = calculation;
        }
        
        console.log('Current Calculation:', calculation);
    });
});
