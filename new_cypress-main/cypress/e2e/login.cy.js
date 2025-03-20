import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"
import * as result_page from "../locators/result_page.json"
import * as recovery_password_page from "../locators/recovery_password_page.json"

describe('Проверка авторизации', function () {
    beforeEach('Начало теста', function () {
        cy.visit('/');
        cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');
        });
    afterEach('Конец теста', function () {
        cy.get(result_page.close).should('be.visible');// Крестик есть и он виден
        });   
// Проверка на позитивный кейс авторизации:
    it('1.Верный пароль и верный логин', function () {
         cy.get(main_page.email).type(data.login); // нашли кнопку прицелом, потом скопировали и сделали взаимодействие 
         cy.get(main_page.password).type(data.password);//Ввести пароль
         cy.get(main_page.login_button).click(); // тыкнуть на кнопку
         cy.get(result_page.title).contains('Авторизация прошла успешно');// Првоерка правильныый ли текст вышел после ввода
         cy.get(result_page.title).should('be.visible');// Првоерка правильныый ли текст вышел после ввода
     })
// Проверка логики восстановления пароля:
     it('2. Проверка логики восстановления пароля', function () {
        cy.get(main_page.fogot_pass_btn).click(); // тыкнуть на кнопку
        cy.get(recovery_password_page.email).type('marinnnn@ddfdffdfdfv.ru'); // ВВели люой емаил
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');// Првоерка правильныый ли текст вышел после ввода
        cy.get(result_page.title).should('be.visible');// Првоерка правильныый ли текст вышел после ввода
    })
// Проверка на негативный кейс авторизации:
    it('3. НЕ верный пароль и верный логин', function () {
        cy.get(main_page.email).type(data.login); // нашли кнопку прицелом, потом скопировали и сделали взаимодействие 
        cy.get(main_page.password).type('iLoveqadsdsstudfio1');//Ввести пароль
        cy.get(main_page.login_button).click(); // тыкнуть на кнопку
        cy.get(result_page.title).contains('Такого логина или пароля нет');// Првоерка правильныый ли текст вышел после ввода
        cy.get(result_page.title).should('be.visible');// Првоерка правильныый ли текст вышел после ввода
    })
 // Проверка на негативный кейс авторизации 2:
    it('4. Верный пароль и НЕ верный логин', function () {
        cy.get(main_page.email).type('german@dolnsddsikodffffv.ru'); // нашли кнопку прицелом, потом скопировали и сделали взаимодействие 
        cy.get(main_page.password).type(data.password);//Ввести пароль
        cy.get(main_page.login_button).click(); // тыкнуть на кнопку
        cy.get(result_page.title).contains('Такого логина или пароля нет');// Првоерка правильныый ли текст вышел после ввода
        cy.get(result_page.title).should('be.visible');// Првоерка правильныый ли текст вышел после ввода
    })   
//Проверка на негативный кейс валидации:
    it('5. Проверка на негативный кейс валидации', function () {
        cy.get(main_page.email).type('germdssadsaandolsssadsdanikov.ru'); // нашли кнопку прицелом, потом скопировали и сделали взаимодействие 
        cy.get(main_page.password).type(data.password);//Ввести пароль
        cy.get(main_page.login_button).click(); // тыкнуть на кнопку
        cy.get(result_page.title).contains('Нужно исправить проблему валидации');// Првоерка правильныый ли текст вышел после ввода
        cy.get(result_page.title).should('be.visible');// Првоерка правильныый ли текст вышел после ввода
    })   
//Проверка на приведение к строчным буквам в логине:
    it('6. Проверка на приведение к строчным буквам в логине', function () {
        cy.get(main_page.email).type('GerMan@DolnissddsaDSDDskov.ru'); // нашли кнопку прицелом, потом скопировали и сделали взаимодействие 
        cy.get(main_page.password).type(data.password);//Ввести пароль
        cy.get(main_page.login_button).click(); // тыкнуть на кнопку
        cy.get(result_page.title).contains('Авторизация прошла успешно');// Првоерка правильныый ли текст вышел после ввода
        cy.get(result_page.title).should('be.visible');// Првоерка правильныый ли текст вышел после ввода
    })   
})
    


 
 
 