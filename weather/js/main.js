const cityName = document.getElementById('cityName')
const submitBut = document.getElementById('submitBut')
const cityNameInOutput = document.getElementById('cityNameInOutput')
const temp_status_icon = document.getElementById('temp_status_icon')
const temp_real_value = document.getElementById('temp_real_value')

const getInfo = async (event) => {

    event.preventDefault();

    let cityNameValue = cityName.value;

    if (cityName === "") {
        cityNameInOutput.innerText = 'Enter the city name to search.'
        // alert('Enter the VALID name. Don\'t left it empty.')


    } else {
        try {
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&units=metric&appid=43f33eb3582255227508ce7b60100ac6`;

            const response = await fetch(url)
            const data = await response.json()
            const dataArr = [data]

            console.log(response)


            // Getting displaying our output 
            cityNameInOutput.innerText = `${dataArr[0].name}, ${dataArr[0].sys.country}`;
            temp_real_value.innerText = dataArr[0].main.temp;

            // for changing our Weather condition ICON
            const tempCondition = dataArr[0].weather[0].main;
            if (tempCondition == 'Clear') {
                temp_status_icon.innerHTML = "<i class='fa fa-sun' style='color: #eccc68;'></i>"
            }
            else if (tempCondition == 'Clouds') {
                temp_status_icon.innerHTML = "<i class='fa fa-cloud' style='color: #eccc68;'></i>"
            }
            else if (tempCondition == 'Rain') {
                temp_status_icon.innerHTML = "<i class='fa fa-rain' style='color: #eccc68;'></i>"
            }
            else {
                temp_status_icon.innerHTML = "<i class='fa fa-sun' style='color: #eccc68;'></i>"
            }

        } catch {
            cityNameInOutput.innerText = 'Plz enter the proper name.'
        }
    }
}

submitBut.addEventListener('click', getInfo)