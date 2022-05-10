const inverter = () => {
    const li = document.querySelectorAll("li");

    li.forEach((item) => {
        if (item.classList.contains("vermelho")) {
            console.log(item);
            item.classList.remove("vermelho");
            item.classList.add("azul");
        } else {
            item.classList.remove("azul");
            item.classList.add("vermelho");
        }
    });
};