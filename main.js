// Accordion

let accordion_btns = document.querySelectorAll('.accordion__button');

if (accordion_btns.length > 0) {

    accordion_btns.forEach(accordion => {
        accordion_body = accordion.nextElementSibling;
        if (accordion_body.classList.contains('_acco-active') && !accordion_body.style.maxHeight) {
                accordion_body.style.maxHeight = '250px';
        }
    });

    accordion_btns.forEach(accordion => {
        accordion.addEventListener('click', () => {
            accordion_body = accordion.nextElementSibling;
            if (accordion_body.style.maxHeight && accordion_body.classList.contains('_acco-active')) {
                document.querySelectorAll('.accordion__body').forEach(element => {
                    element.style.maxHeight = null;
                    if (element.classList.contains("_acco-active")) {
                        element.classList.remove("_acco-active")
                    }
                });
                document.querySelectorAll('.accordion__button').forEach(element => {
                    if (element.classList.contains("_acco-active")) {
                        element.classList.remove("_acco-active")
                    }
                });
            } else {
                document.querySelectorAll('.accordion__body').forEach(element => {
                    element.style.maxHeight = null;
                    if (element.classList.contains("_acco-active")) {
                        element.classList.remove("_acco-active")
                    }
                });
                document.querySelectorAll('.accordion__button').forEach(element => {
                    if (element.classList.contains("_acco-active")) {
                        element.classList.remove("_acco-active")
                    }
                });
                accordion_body.classList.add('_acco-active');
                accordion.classList.add('_acco-active')
                accordion_body.style.maxHeight = '250px';
            }
        });
    });
}

// ======================

// Create burger

let name_burger_input = document.querySelector('.burger-name');
let create_burger = document.querySelector('.create-burger');

create_burger.addEventListener('click', createBurger);

function createBurger() {
    if (!name_burger_input.value) {
        alert('Дайте название вашему бургеру!');
    } else {
        name_of_burger = name_burger_input.value;
        alert(`Бургер "${name_of_burger}" создан!`)
        name_burger_input.value = ''
    };
};

// ======================

// Price for burger

let total_price = document.querySelector('.sum__title'),
    total_items = 0,
    image_inner = document.querySelector('.maker-plate__image'),
    item_prices = document.querySelectorAll('.accordion_buttons-price'),
    add_item = document.querySelectorAll('.add-item'),
    remove_item = document.querySelectorAll('.remove-item');

    // Добавить элемент добавки
    add_item.forEach(item => {
        item.addEventListener('click', () => {
            total_items += 1
            let item_name = item.parentElement;
            item_name = item_name.parentElement;
            item_name = item_name.querySelector('.accordion_buttons-price');
            let item_price = item_name.innerHTML.split(' ')[0];
            let item_data_attr = item_name.dataset.itemname;
            document.querySelector('.total-extras').innerHTML = total_items;

            info_text = document.querySelectorAll('.info-name');
            let iter = 0;
            if (info_text.length > 0) {
                for (let i = 0; i < info_text.length; i++) {
                    elem = info_text[i];
                    if (elem.innerHTML == item_data_attr) {
                        iter = 1;
                        info_total = elem.nextElementSibling;
                        break;
                    };
                };
                console.log(item_name, item_data_attr, iter)
                if (iter == 1) {
                    if (Number(info_total.innerHTML) < 0) {
                        info_total.innerHTML = '0';
                    } else {
                        info_total.innerHTML++
                    };
                } else {
                    new_modal_info__text_ex = document.createElement('div');
                    new_modal_info__text_ex.classList.add('modal-info__text-ex');
                    new_modal_info_name = document.createElement('div');
                    new_modal_info_name.classList.add('info__text-ex');
                    new_modal_info_name.classList.add('info-name');
                    new_modal_info_name.innerHTML = item_data_attr
                    new_modal_info_total = document.createElement('div');
                    new_modal_info_total.classList.add('info__text-ex');
                    new_modal_info_total.classList.add('info-total');
                    // Image
                    new_image = document.createElement('img');
                    new_image.classList.add('plate-image');
                    new_image.id = item_data_attr;
                    new_image.src = `images/${item_data_attr}.png`;
                    if (item_name.classList.contains('index-max')) {
                        new_image.style.zIndex = 999;
                    } else {
                        new_image.style.zIndex = document.querySelectorAll('.plate-image').length;
                    };
                    image_inner.append(new_image);

                    if (Number(new_modal_info_total.innerHTML) < 0) {
                        new_modal_info_total.innerHTML = '0';
                    } else {
                        new_modal_info_total.innerHTML++;
                    };
                    new_modal_info__text_ex.append(new_modal_info_name);
                    new_modal_info__text_ex.append(new_modal_info_total);
                    document.querySelector('.modal-info__body').append(new_modal_info__text_ex);
                    iter = 1;
                };
            } else {
                let new_modal_info__text_ex = document.createElement('div');
                new_modal_info__text_ex.classList.add('modal-info__text-ex');
                let new_modal_info_name = document.createElement('div');
                new_modal_info_name.classList.add('info__text-ex');
                new_modal_info_name.classList.add('info-name');
                new_modal_info_name.innerHTML = item_data_attr
                let new_modal_info_total = document.createElement('div');
                new_modal_info_total.classList.add('info__text-ex');
                new_modal_info_total.classList.add('info-total');
                // Image
                let new_image = document.createElement('img');
                new_image.classList.add('plate-image');
                new_image.id = item_data_attr;
                new_image.src = `images/${item_data_attr}.png`;
                if (item_name.classList.contains('index-max')) {
                    new_image.style.zIndex = 999;
                } else {
                    new_image.style.zIndex = document.querySelectorAll('.plate-image').length;
                };
                image_inner.append(new_image);

                if (Number(new_modal_info_total.innerHTML) < 0) {
                    new_modal_info_total.innerHTML = '0';
                } else {
                    new_modal_info_total.innerHTML++;
                };
                new_modal_info__text_ex.append(new_modal_info_name);
                new_modal_info__text_ex.append(new_modal_info_total);
                document.querySelector('.modal-info__body').append(new_modal_info__text_ex);
            };
            total_price_finally = total_price.innerHTML.split(' ')[0]
            total_price.innerHTML = Number(total_price_finally) + Number(item_price) + ' руб.'
        });
    });

    // Убрать элемент добавки
    remove_item.forEach(item => {
        item.addEventListener('click', () => {
            let item_name = item.parentElement;
            item_name = item_name.parentElement;
            item_name = item_name.querySelector('.accordion_buttons-price');
            let item_price = item_name.innerHTML.split(' ')[0];
            let item_data_attr = item_name.dataset.itemname;

            info_text = document.querySelectorAll('.info-name');
            let iter = 0;

            if (info_text.length > 0) {
                for (let i = 0; i < info_text.length; i++) {
                    const elem = info_text[i];
                    if (elem.innerHTML == item_data_attr) {
                        iter = 1;
                        info_total = elem.nextElementSibling;
                        break;
                    };
                };
                if (iter == 1) {
                    if (info_total.innerHTML <= 0) {
                        let info_parent = info_total.parentElement;
                        document.querySelector('.modal-info__body').removeChild(info_parent);
                        image_inner.removeChild(document.getElementById(item_data_attr));
                        info_total.innerHTML = '0';
                    } else {
                        info_total.innerHTML--;
                        total_items--;
                        if (info_total.innerHTML <= 0) {
                            let info_parent = info_total.parentElement;
                            document.querySelector('.modal-info__body').removeChild(info_parent);
                            image_inner.removeChild(document.getElementById(item_data_attr));
                            info_total.innerHTML = '0';
                        };
                        total_price_finally = total_price.innerHTML.split(' ')[0];
                        if (total_price_finally <= 0 || (total_price_finally-item_price) <= 0) {
                            total_price.innerHTML = '0 руб.';
                        } else {
                            total_price.innerHTML = Number(total_price_finally) - Number(item_price) + ' руб.';
                        };
                    };  
                };
            };
            
            if (total_items <= 0) {
                total_items = 0;
                document.querySelector('.total-extras').innerHTML = total_items;
            } else {
                document.querySelector('.total-extras').innerHTML = total_items;
            };
        });
    });

// ======================

// Modal windows

const modals = document.querySelectorAll(".modal-window");
const openModals = document.querySelectorAll(".open-modal[data-open]");
const closeModals = document.querySelectorAll(".modal__close[data-close]");

if (openModals.length > 0 && modals.length > 0) {
    openModals.forEach((openModal) => {
        openModal.addEventListener('click', openModalWindow);
    });
}

if (closeModals.length > 0 && modals.length > 0) {
    closeModals.forEach((closeModal) => {
        closeModal.addEventListener('click', closeModalWindow);
    });
}

function openModalWindow(e) {
    e.preventDefault();
    const dataAtribute = this.dataset.open;

    if (document.querySelector(dataAtribute)) {
        // if (menuBody.classList.contains('_active') && menuBurger.classList.contains('_active')) {
        //     menuBody.classList.remove('_active');
        //     menuBurger.classList.remove('_active');
        // }

        const modalWindow = document.querySelector(dataAtribute)
        modalWindow.classList.add('_active');
        const htmlElem = document.documentElement
        document.body.style.paddingRight = window.innerWidth - htmlElem.clientWidth + 'px';
        document.querySelector('.header').style.paddingRight = window.innerWidth - htmlElem.clientWidth + 'px';
        document.body.classList.add("_lock");
    }
};

function closeModalWindow() {
    const dataAtribute = this.dataset.close;

    if (document.querySelector(dataAtribute)) {
        const modalWindow = document.querySelector(dataAtribute)
        modalWindow.classList.remove('_active');
        document.body.classList.remove("_lock");
        document.querySelector('.header').style.paddingRight = '0px';
        document.body.style.paddingRight = '0px';
    }
}