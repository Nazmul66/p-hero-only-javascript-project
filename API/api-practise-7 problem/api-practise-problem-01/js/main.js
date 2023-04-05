const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };


// ui design & linkup start

function dataFind(person){
    const insideDetails = document.getElementById("separate-2");
  for(let persons of person){
    console.log(persons);
    const col = document.createElement("div");
    col.classList.add("col-half");
    col.classList.add("border-2");
    col.classList.add("w-full");
    col.innerHTML = `
        <h3 class="p-4 border bg-[#ccc]">person Name: ${persons.name.fullName[0] + " " + persons.name.fullName[1]}</h3>
        <p class="px-4 py-1">age: ${persons.age}</p>
        <p class="px-4 py-1">street: ${persons.address.street} house no.${persons.address.house}</p>
    `;
    insideDetails.appendChild(col);
  }

}

dataFind(person.result);