let questions = [
    {
        q: 'How many teams play in the EPL?',
        o1: '18',
        o2: '20',
        o3: '22',
        o4: '24',
        ans: '2',
    },
    {
        q: 'Which team has won the Premier League 13 times?',
        o1: 'Man City',
        o2: 'Liverpool',
        o3: 'Arsenal',
        o4: 'Man Utd',
        ans: '4',
    },
    {
        q: 'Who won the Premier League in the 2015-16 season?',
        o1: 'Leicester',
        o2: 'Newcastle',
        o3: 'Arsenal',
        o4: 'Chelsea',
        ans: '1',
    },
    {
        q:
            'Which two clubs have remained in the Premier League since their first promotion?',
        o1: 'Bournemouth and Brighton',
        o2: 'Newcastle and Sheffield Utd',
        o3: 'Wolves and Watford',
        o4: 'Aston Villa & Leeds',
        ans: '1',
    },
    {
        q: 'Who has substituted the most times in Premier League history?',
        o1: 'Theo Walcott',
        o2: 'Ryan Giggs',
        o3: 'Aaron Lennon',
        o4: 'Peter Crouch',
        ans: '2',
    },
    {
        q:
            "In which year was the league's name changed from FA Premier League to Premier League?",
        o1: '2007',
        o2: '2008',
        o3: '2009',
        o4: '2010',
        ans: '1',
    },
];

let currentquestion = 0;
var score = 0;
let totalquestions = questions.length;

let box = document.getElementById('quizcontainer');
let question = document.getElementById('question');
let start = document.getElementById('start');
let startquiz = document.getElementById('startquiz');
let op1 = document.getElementById('op1');
let op2 = document.getElementById('op2');
let op3 = document.getElementById('op3');
let op4 = document.getElementById('op4');
let r1 = document.getElementById('r1');
let r2 = document.getElementById('r2');
let r3 = document.getElementById('r3');
let r4 = document.getElementById('r4');
let option = document.getElementsByClassName('option');
for (let i = 0; i < 4; i++) {
    option[i].addEventListener('mouseover', function () {
        option[i].style.boxShadow = '0 0 8px 4px red';
    });
    option[i].addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });
    option[i].addEventListener('mouseout', function () {
        option[i].style.boxShadow = '0 0 0px 0px';
    });
    option[i].addEventListener('click', function () {
        for (let j = 0; j < 4; j++) {
            if (j != option[i]) option[j].style.backgroundColor = 'lightgrey';
        }
        option[i].style.backgroundColor = 'palegreen';
        option[i].classList.remove('shake-horizontal');
        void option[i].offsetWidth;
        option[i].classList.add('shake-horizontal');
    });
}
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let flag = document.getElementById('flag');
let check = document.getElementById('check');
let progress = document.getElementById('progress');
let answers = [];
let flags = [];
startquiz.addEventListener('click', function () {
    start.style.display = 'none';
    box.style.display = '';
    check.style.display = 'none';
    progress.style.display = '';
    timer();
    loadQuestion(currentquestion);
    document.body.style.backgroundImage = 'url(darkness.png)';
});
next.addEventListener('click', function () {
    Loadnext();
});
prev.addEventListener('click', function () {
    Loadprev();
});
flag.addEventListener('click', function () {
    flagques();
});
let modal = document.getElementById('myModal');
let close = document.getElementById('close');
let scoreboard = document.getElementById('scoreboard');
close.addEventListener('click', function () {
    window.location.reload();
});

function loadQuestion(ques_index) {
    let q = questions[ques_index];
    question.innerText = ques_index + 1 + '.' + q.q;
    question.classList.remove('text-focus-in');
    void question.offsetWidth;
    question.classList.add('text-focus-in');
    op1.innerHTML = q.o1;
    op2.innerHTML = q.o2;
    op3.innerHTML = q.o3;
    op4.innerHTML = q.o4;
    const element = document.getElementsByClassName('option');
    for (let i = 0; i < 4; i++) {
        element[i].classList.remove('puff-in-center');
        element[i].classList.remove('shake-horizontal');
        void element[i].offsetWidth;
        element[i].classList.add('puff-in-center');
    }
}
function flagques() {
    flags[currentquestion] = 1;
    document.getElementById(currentquestion + 1).style.background = 'yellow';
}
function Loadprev() {
    let selectedoption = document.querySelector('input[type=radio]:checked');
    if (selectedoption) {
        let ans = selectedoption.value;
        answers[currentquestion] = ans;
        selectedoption.checked = false;
        option[ans - 1].style.backgroundColor = 'lightgrey';
        if (flags[currentquestion] != 1)
            document.getElementById(currentquestion + 1).style.background =
                'green';
    } else {
        if (flags[currentquestion] != 1)
            document.getElementById(currentquestion + 1).style.background =
                'red';
    }
    flags[currentquestion] = 0;
    currentquestion--;
    if (currentquestion != totalquestions - 1) {
        next.innerHTML = 'Next';
    }
    if (currentquestion == 0) {
        prev.style.display = 'none';
    }
    if (answers[currentquestion] != undefined) {
        let select = answers[currentquestion];
        if (r1.value == select) {
            r1.checked = true;
        } else if (r2.value == select) {
            r2.checked = true;
        } else if (r3.value == select) {
            r3.checked = true;
        } else {
            r4.checked = true;
        }
        option[select - 1].style.backgroundColor = '#3B945E';
    }
    loadQuestion(currentquestion);
}

function Loadnext() {
    let selectedoption = document.querySelector('input[type=radio]:checked');
    if (selectedoption) {
        let ans = selectedoption.value;
        answers[currentquestion] = ans;
        selectedoption.checked = false;
        option[ans - 1].style.backgroundColor = 'lightgrey';
        if (flags[currentquestion] != 1)
            document.getElementById(currentquestion + 1).style.background =
                'green';
    } else {
        if (flags[currentquestion] != 1)
            document.getElementById(currentquestion + 1).style.background =
                'red';
    }
    flags[currentquestion] = 0;
    currentquestion++;
    if (answers[currentquestion] != undefined) {
        let select = answers[currentquestion];
        if (r1.value == select) {
            r1.checked = true;
        } else if (r2.value == select) {
            r2.checked = true;
        } else if (r3.value == select) {
            r3.checked = true;
        } else if (r4.value == select) {
            r4.checked = true;
        }
        option[select - 1].style.backgroundColor = '#3B945E';
    }
    if (currentquestion == totalquestions) {
        result();
        return;
    }
    if (currentquestion > 0) prev.style.display = '';

    if (currentquestion == totalquestions - 1) {
        next.innerHTML = 'Submit';
    }
    loadQuestion(currentquestion);
}
function result() {
    for (let i = 0; i < totalquestions; i++) {
        if (answers[i] == questions[i].ans) {
            score++;
            document.getElementById(i + 1).style.background = 'green';
        } else document.getElementById(i + 1).style.backgroundColor = 'red';
    }
    scoreboard.innerHTML = 'YOU SCORE : ' + score + ' / ' + totalquestions;
    box.style.display = 'none';
    document.getElementById('time').style.display = 'none';
    modal.style.display = 'flex';
}

function timer() {
    // 10 minutes from now
    let time_in_minutes = 10;
    let current_time = Date.parse(new Date());
    let deadline = new Date(current_time + time_in_minutes * 60 * 1000);

    function time_remaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        };
    }
    function run_clock(id, endtime) {
        let clock = document.getElementById(id);
        function update_clock() {
            let t = time_remaining(endtime);
            clock.innerHTML =
                t.minutes + 'minutes ' + '&nbsp' + t.seconds + 'seconds ';
            if (t.total <= 0) {
                clearInterval(timeinterval);
                clock.style.display = 'none';
                result();
            }
        }
        update_clock(); // run function once at first to avoid delay
        let timeinterval = setInterval(update_clock, 1000);
    }
    run_clock('time', deadline);
}
