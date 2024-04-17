let input = document.querySelector(".input1");
let input1 = document.querySelector(".input2");
let btn = document.querySelector("button");
let userHtml = document.querySelector(".all");
let userHtmlDiv = document.querySelector(".age");
function getAll() {
  fetch(`https://dummyjson.com/users?limit=${input1.value}`)
    .then((req) => req.json())
    .then((res) => {
      let users = res.users;
      console.log(users);
      let filterdata = users.filter((children) => children.age > input.value);
      console.log(filterdata);

      users.map((item, ind) => {
        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");
        let p1 = document.createElement("p");
        let p2 = document.createElement("b");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let div = document.createElement("div");
        div.style.border = "1px solid gray";
        div.style.padding = "10px";
        h2.innerHTML = `Ism: ${item.firstName}`;
        h3.innerHTML = `Email: ${item.email}`;
        p1.innerHTML = `Manzil: ${item.address.address}`;
        p2.innerHTML = `Yosh: ${item.age}`;
        p3.innerHTML = `Phone number: ${item.phone}`;
        p4.innerHTML = `Tugulgan sanasi: ${item.birthDate}`;

        div.append(h2, h3, p1, p2, p3, p4);
        userHtml.append(div);
      });

      filterdata.map((item, ind) => {
        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");
        let p1 = document.createElement("p");
        let p2 = document.createElement("b");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let div = document.createElement("div");
        div.style.border = "1px solid gray";
        div.style.padding = "10px";
        h2.innerHTML = `Ism: ${item.firstName}`;
        h3.innerHTML = `Email: ${item.email}`;
        p1.innerHTML = `Manzil: ${item.address.address}`;
        p2.innerHTML = `Yosh: ${item.age}`;
        p3.innerHTML = `Phone number: ${item.phone}`;
        p4.innerHTML = `Tugulgan sanasi: ${item.birthDate}`;

        div.append(h2, h3, p1, p2, p3, p4);
        userHtmlDiv.append(div);

        document.querySelector(
          ".hello"
        ).innerHTML = `User limit: ${input1.value}`;
        document.querySelector(
          ".hello1"
        ).innerHTML = `${input.value} yoshdan katta  Userlar:`;
      });
    });
}
btn.addEventListener("click", getAll);
