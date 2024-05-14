const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

async function testGoogleHomePage() {
    let driver = await new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(new firefox.Options())
        .build();

    try {

        await driver.get('https://www.google.com');

        await driver.findElement(By.id('hplogo'));

        await driver.findElement(By.name('q'));

        await driver.findElement(By.name('btnK'));

        await driver.findElement(By.name('btnSearch')).then(element => {
            console.log('Тест 4 пройшов, кнопка знайдена');
        }, error => {
            console.log('Тест 4 не пройшов, кнопка не знайдена');
        });

        await driver.findElement(By.name('btnI'));

        await driver.getTitle().then(title => {
            if (title === "Google Search") {
                console.log('Тест 6 пройшов, title правильний');
            } else {
                throw new Error('Тест 6 не пройшов, неправильний title');
            }
        });

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit();
        console.log('Тест завершено, браузер закрито.');
    }
}

testGoogleHomePage();
