window.onload = function () {
    var user = JSON.parse(sessionStorage.getItem("user"));
    document.getElementById('welcome-name').innerHTML = user.first + " " + user.last;

    var count=0;
    var SQL = JSON.parse(sql);
    //question 1
    document.getElementsByTagName('h3')[0].textContent = SQL[0].q1
    document.getElementsByTagName('label')[0].textContent = SQL[0].chooseA1
    document.getElementsByTagName('label')[1].textContent = SQL[0].chooseA2
    document.getElementsByTagName('label')[2].textContent = SQL[0].chooseA3
    document.getElementsByTagName('label')[3].textContent = SQL[0].chooseA4
    //question 2
    document.getElementsByTagName('h3')[1].textContent = SQL[1].q2
    document.getElementsByTagName('label')[4].textContent = SQL[1].chooseB1
    document.getElementsByTagName('label')[5].textContent = SQL[1].chooseB2
    document.getElementsByTagName('label')[6].textContent = SQL[1].chooseB3
    document.getElementsByTagName('label')[7].textContent = SQL[1].chooseB4
    //question 3
    document.getElementsByTagName('h3')[2].textContent = SQL[2].q3
    document.getElementsByTagName('label')[8].textContent = SQL[2].chooseC1
    document.getElementsByTagName('label')[9].textContent = SQL[2].chooseC2
    document.getElementsByTagName('label')[10].textContent = SQL[2].chooseC3
    document.getElementsByTagName('label')[11].textContent = SQL[2].chooseC4
    //question 4
    document.getElementsByTagName('h3')[3].textContent = SQL[3].q4
    document.getElementsByTagName('label')[12].textContent = SQL[3].chooseD1
    document.getElementsByTagName('label')[13].textContent = SQL[3].chooseD2
    document.getElementsByTagName('label')[14].textContent = SQL[3].chooseD3
    document.getElementsByTagName('label')[15].textContent = SQL[3].chooseD4
    //question 5
    document.getElementsByTagName('h3')[4].textContent = SQL[4].q5
    document.getElementsByTagName('label')[16].textContent = SQL[4].chooseE1
    document.getElementsByTagName('label')[17].textContent = SQL[4].chooseE2
    document.getElementsByTagName('label')[18].textContent = SQL[4].chooseE3
    document.getElementsByTagName('label')[19].textContent = SQL[4].chooseE4
    //question 6
    document.getElementsByTagName('h3')[5].textContent = SQL[5].q6
    document.getElementsByTagName('label')[20].textContent = SQL[5].chooseF1
    document.getElementsByTagName('label')[21].textContent = SQL[5].chooseF2
    document.getElementsByTagName('label')[22].textContent = SQL[5].chooseF3
    document.getElementsByTagName('label')[23].textContent = SQL[5].chooseF4
    //question 7
    document.getElementsByTagName('h3')[6].textContent = SQL[6].q7
    document.getElementsByTagName('label')[24].textContent = SQL[6].chooseG1
    document.getElementsByTagName('label')[25].textContent = SQL[6].chooseG2
    document.getElementsByTagName('label')[26].textContent = SQL[6].chooseG3
    document.getElementsByTagName('label')[27].textContent = SQL[6].chooseG4
    //question 8
    document.getElementsByTagName('h3')[7].textContent = SQL[7].q8
    document.getElementsByTagName('label')[28].textContent = SQL[7].chooseH1
    document.getElementsByTagName('label')[29].textContent = SQL[7].chooseH2
    document.getElementsByTagName('label')[30].textContent = SQL[7].chooseH3
    document.getElementsByTagName('label')[31].textContent = SQL[7].chooseH4
    //question 9
    document.getElementsByTagName('h3')[8].textContent = SQL[8].q9
    document.getElementsByTagName('label')[32].textContent = SQL[8].chooseI1
    document.getElementsByTagName('label')[33].textContent = SQL[8].chooseI2
    document.getElementsByTagName('label')[34].textContent = SQL[8].chooseI3
    document.getElementsByTagName('label')[35].textContent = SQL[8].chooseI4
    //question 10
    document.getElementsByTagName('h3')[9].textContent = SQL[9].q10
    document.getElementsByTagName('label')[36].textContent = SQL[9].chooseJ1
    document.getElementsByTagName('label')[37].textContent = SQL[9].chooseJ2
    document.getElementsByTagName('label')[38].textContent = SQL[9].chooseJ3
    document.getElementsByTagName('label')[39].textContent = SQL[9].chooseJ4

    //Finish
    document.getElementById('click').onclick=finish;
    function finish() {
        cont = 0;
        if(document.getElementById('answer1').checked){
            ++count;
        }
        if (document.getElementById('answer2').checked) {
            ++count;
        }
        if (document.getElementById('answer3').checked) {
            ++count;
        }
        if (document.getElementById('answer4').checked) {
            ++count;
        }
        if (document.getElementById('answer5').checked) {
            ++count;
        }
        if (document.getElementById('answer6').checked) {
            ++count;
        }
        if (document.getElementById('answer7').checked) {
            ++count;
        }
        if (document.getElementById('answer8').checked) {
            ++count;
        }
        if (document.getElementById('answer9').checked) {
            ++count;
        }
        if (document.getElementById('answer10').checked) {
            ++count;
        }
        alert('your score is: ' + count + '/10')
        window.location.href = "../profile.html";
        var arr_courses = [];
        arr_courses = JSON.parse(localStorage.getItem("courses"))
        if (arr_courses == null) {
            arr_courses = [];
        }
        var course = {}
        course.name = document.title;
        course.score = count;
        arr_courses.push(course);
        localStorage.setItem("courses", JSON.stringify(arr_courses));
    }
    //timer
    var hour = 19;
    var sec = 60;
    setInterval(function () {
        document.getElementById("timer").innerHTML = hour + " : " + sec;
        sec--;
        if (hour == 0 && sec == 00) {
            finish();
        }
        if (sec == 00) {
            hour--;
            sec = 60;
        }

    }, 1000);
    
}
