const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
       let seededFruitelements = document.querySelectorAll("li.seed")

       console.log(seededFruitelements)
        
    // 2. Get all seedless fruit elements
    // Your code here 
    let seedlessFruitelements = document.querySelectorAll("li.seedless")
    console.log(seedlessFruitelements);


    // 3. Get first seedless fruit element
    let firstseedless = document.getElementByClassName("seedless") 
    console.log(firstseedless)

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here 

    // 5. Get all children of element "wrapper"
    // Your code here 

    // 6. Get all odd number list items in the list
    // Your code here 

    // 7. Get all even number list items in the list
    // Your code here 

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here 

    // 9. Get "Amazon" list element
    // Your code here 

    // 10. Get all unicorn list elements (not the image element)
    // Your code here 
}

window.onload = select;