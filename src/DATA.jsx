import { TEX } from "./TEX";
import { GEOGERBA, Geogebra } from "./Geogebra";


export const DATA = {
    1: {
        name: "Координатное пространство",
        1: {
            name: "Точка",
            1: {
                name: "Координаты точки",
                tasks: [
                    <div answer="15" answer1="1">
                        <div>Даны точки:  <TEX>{"A(1;~2;~3),~B(4;~5;~6),~C(7;~8;~9)"}</TEX>.</div>
                        <div>Найдите <TEX>{"A_x + B_y + C_z"}</TEX>.</div>
                    </div>
                ],
                video: "https://drive.google.com/file/d/1aL88h2pnIiSJ8gP-y8y2Ci1eMImOAbAD/preview"
            },
            2: {
                name: "Точка на отрезке",
                video: "https://drive.google.com/file/d/19VW7N5Hvpfahr3jSy5kQfnM0-6No-0z0/preview",
                tasks: [
                    <div answer="(-2; -2; -5)" answer1="1">
                        <div>Найдите координаты середины отрезка <TEX>{"AB"}</TEX>,</div>
                        <div>если <TEX>{"A(3;-10;-3),~B(-7;6;-7)"}</TEX>.</div>
                    </div>,
                    <div answer="(-3; -2; -1)" answer1="1">
                        <div>
                            Дана точка <TEX>{"A(1;2;3)"}</TEX>. Точка <TEX>{"B(-1;0;1)~"}</TEX> 
                            является серединой отрезка <TEX>{"AC"}</TEX>.
                        </div>
                        <div>
                            Найдите координаты точки <TEX>{"C"}</TEX>.
                        </div>
                    </div>,
                    <div answer="(4; -3; 1)" answer1="1">
                        <div>Дан отрезок <TEX>{"AB"}</TEX> с концами <TEX>{"A(4;0;4),~B(4;-5;-1)"}</TEX>.</div>
                        <div>На отрезке выбрана точка <TEX>{"C"}</TEX> так, что <TEX>{"AC:CB=3:2"}</TEX>.</div>
                        <div>Найдите координаты точки <TEX>{"C"}</TEX>.</div>
                    </div>,
                    <div answer="(-1; 3; 2)" answer1="1">
                        <div>Даны точки <TEX>{"A(5;0;-4),~B(1;2;0)"}</TEX>. <TEX>{"AB = 10"}</TEX> .</div>
                        <div>Отрезок <TEX>{"AB"}</TEX> продлили за точку <TEX>{"B"}</TEX> на <TEX>{"BC=5"}</TEX>. </div>
                        <div>Найдите координаты точки <TEX>{"C"}</TEX>.</div>
                    </div>
                ]
            }
        },
        2: {
            name: "Вектор",
            
            1: {
                name: "Координаты вектора", //https://drive.google.com/file/d/1cDTNZAX1i_wRSv5p74Ssr0CRcbUsQwMc/view?usp=drive_link
                video: "https://drive.google.com/file/d/1cDTNZAX1i_wRSv5p74Ssr0CRcbUsQwMc/preview",
                tasks: [
                    <div answer="{-6; -2; 4}" answer1="1">
                        <div>
                            Даны точки <TEX>{"A(4;2;-1)"}</TEX> и <TEX>{"B(-2; 0; 3)"}</TEX>.                            
                        </div>
                        <div>
                            Найдите координаты вектора <TEX>{"\\vec{AB}"}</TEX>.
                        </div>
                    </div>,
                    <div answer="(1; 6; -1)" answer1="1">
                        <div>
                            Дан вектор <TEX>{"\\vec{AB}\\{-4;5;-1\\}~"}</TEX>
                            с началом в точке <TEX>{"A(5;1;0)"}</TEX>.
                        </div>
                        <div>
                            Найдите координаты конца вектора.
                        </div>
                    </div>
                ]
            },
            2: {
                name: "Действия с векторами",//https://drive.google.com/file/d/1jbcZNbj3nrNWXbWjyAms6tE4c6RWFbSZ/view?usp=drive_link
                video: "https://drive.google.com/file/d/1jbcZNbj3nrNWXbWjyAms6tE4c6RWFbSZ/view?usp=drive_link",
                tasks: [
                    <div answer="{-2; -3; 5}">
                        <div>
                            Даны векторы <TEX>{"\\vec{a}\\{ 0;-3;4 \\},~\\vec{b}\\{-2;0;1\\}"}</TEX>.
                        </div>
                        <div>
                            Найдите координаты вектора <TEX>{"\\vec{a} + \\vec{b}"}</TEX>.
                        </div>
                    </div>,
                    <div answer="{2; -3; 3}">
                        <div>
                            Даны те же векторы, что и в задании 1.
                        </div>
                        <div>
                            Найдите координаты вектора <TEX>{"\\vec{a} - \\vec{b}"}</TEX>.
                        </div>
                    </div>,
                    <div answer="{6; -6; 5}">
                        <div>
                            Даны те же векторы, что и в задании 1.
                        </div>
                        <div>
                            Найдите координаты вектора <TEX>{"2 \\cdot \\vec{a} - 3 \\cdot \\vec{b}"}</TEX>.
                        </div>
                    </div>,
                ]
            },
            3: {
                name: "Параллельность векторов",
                foo: "https://drive.google.com/file/d/1NgUBP50OYFznzPD2Vowa8RpPIVGvrZVC/view?usp=drive_link",
                video: "https://drive.google.com/file/d/1NgUBP50OYFznzPD2Vowa8RpPIVGvrZVC/preview",
                tasks: [
                    <div answer="1">
                        <div>Даны векторы <TEX>{"\\vec{a}\\{-3;6;15\\}~"}</TEX>и 
                        <TEX>{"~\\vec{b}\\{1;-2;-5\\}"}</TEX> .</div>
                        <div>Выберите верное утверждение:</div>
                        <div>1. <TEX>{"\\vec{a} \\parallel \\vec{b}"}</TEX></div>
                        <div>2. <TEX>{"\\vec{a} \\not\\parallel \\vec{b}"}</TEX>.</div>
                    </div>,
                    <div answer="{3; 0; -1}">
                        <div>
                            Дан вектор <TEX>{"\\vec{a}\\{21;0;-7\\}"}</TEX>.
                            Найдите координаты вектора, параллельного данному,
                            с взаимнопростыми координатами и положительной первой координатой.
                        </div>
                    </div>
                ]
            },
            4: {
                name: "Скалярное произведение",
                foo: "",
                video: "https://drive.google.com/file/d/1jI89UrI4yVFCFPDGwng3qvsgxJkohuKs/view?usp=drive_link",
                tasks: [
                    <div answer="-10">
                        <div>Дано <TEX>{"\\vec{a}\\{3;-4;-2\\},~\\vec{b}\\{-2;-1;4\\}"}</TEX>.</div>
                        <div>Найдите <TEX>{"\\vec{a}\\cdot \\vec{b}"}</TEX>.</div>
                    </div>,
                    <div answer="0">
                        <div>Дано <TEX>{"\\vec{a}\\{-1;1;-2\\},~\\vec{b}\\{4;-2;-3\\}"}</TEX>.</div>
                        <div>Найдите <TEX>{"\\vec{a}\\cdot \\vec{b}"}</TEX>.</div>
                    </div>
                ]
            },
            5: {
                name: "Длина вектора",
                foo: "",
                video: "https://drive.google.com/file/d/1RYVUNfpMzFOqp0qhFrUl9uEHZMm_rfPz/view?usp=drive_link",
                tasks: [
                    <div answer="6">
                        <div>Дано <TEX>{"\\vec{a}\\{-4;-2;4\\}"}</TEX>.
                        Найдите <TEX>{"\\left|\\vec{a}\\right|"}</TEX>.</div>
                    </div>,
                    <div answer="5">
                        <div>Дано <TEX>{"\\vec{a}\\{3;-4;0\\}"}</TEX>.
                        Найдите <TEX>{"\\left|\\vec{a}\\right|"}</TEX>.</div>
                    </div>
                ]
            },
            6: {
                name: "Угол между векторами",
                foo: "",
                video: "https://drive.google.com/file/d/1HMhE6U2-0StT9rKFLOs9Y-81V0GHVXIM/view?usp=drive_link",
                tasks: [
                    <div answer="90">
                        <div>Дано <TEX>{"\\vec{a}\\{1;1;3\\},~\\vec{b}\\{-5;-1;2\\}"}</TEX>.</div>
                        <div>Найдите в градусах <TEX>{"\\angle\\left(\\vec{a}, \\vec{b}\\right)"}</TEX>.</div>
                    </div>,
                    <div answer="120">
                        <div>Дано <TEX>{"\\vec{a}\\{-3;1;-2\\},~\\vec{b}\\{1;2;3\\}"}</TEX>.</div>
                        <div>Найдите в градусах <TEX>{"\\angle\\left(\\vec{a}, \\vec{b}\\right)"}</TEX>.</div>
                    </div>,
                    <div answer="45">
                        <div>Дано <TEX>{"\\vec{a}\\{-2;-1;-2\\},~\\vec{b}\\{0;-2;-2\\}"}</TEX>.</div>
                        <div>Найдите в градусах <TEX>{"\\angle\\left(\\vec{a}, \\vec{b}\\right)"}</TEX>.</div>
                    </div>,
                    <div answer="135">
                        <div>Дано <TEX>{"\\vec{a}\\{2;1;2\\},~\\vec{b}\\{0;-2;-2\\}"}</TEX>.</div>
                        <div>Найдите в градусах <TEX>{"\\angle\\left(\\vec{a}, \\vec{b}\\right)"}</TEX>.</div>
                    </div>,
                    <div answer="arccos(5/6)">
                        <div>Дано <TEX>{"\\vec{a}\\{-1;0;1\\},~\\vec{b}\\{-1;-1;4\\}"}</TEX>.</div>
                        <div>Найдите в радианах <TEX>{"\\angle\\left(\\vec{a}, \\vec{b}\\right)"}</TEX>.</div>
                    </div>,
                    <div answer="arccos(-9/10)">
                        <div>Дано <TEX>{"\\vec{a}\\{3;-4;5\\},~\\vec{b}\\{-1;1;-4\\}"}</TEX>.</div>
                        <div>Найдите в радианах <TEX>{"\\angle\\left(\\vec{a}, \\vec{b}\\right)"}</TEX>.</div>
                    </div>,
                ]
            },
        },
        3: {
            name: "Прямая",
            
            1: {
                name: "Направляющий вектор",
                foo: "",
                video: "https://drive.google.com/file/d/1JNveIXDu9eX4ghPUhcVhCMShykTNzNPo/view?usp=drive_link",
                tasks: [
                    <div answer="2">
                        <div>
                            Вектор <TEX>{"\\vec{a}\\{1;2;0\\}~"}</TEX>
                            является направляющим для прямой <TEX>{"a"}</TEX>.
                        </div>
                        <div>
                            Вектор <TEX>{"\\vec{b}\\{2;4;1\\}~"}</TEX>
                            является направляющим для прямой <TEX>{"b"}</TEX>.
                        </div>
                        <div>
                            Выберите верное утверждение:
                        </div>
                        <div>1. <TEX>{"a \\parallel b"}</TEX></div>
                        <div>2. <TEX>{"a \\not\\parallel b"}</TEX>.</div>
                    </div>
                ]
            },
            2: {
                name: "Уравнения прямой",
                foo: "",
                video: "https://drive.google.com/file/d/1ayn7e0r19bR6KSf28GHeGl4PkaVfP96s/view?usp=drive_link",
                tasks: [
                    <div answer="(2; -1; 2)">
                        <div>
                            Прямая <TEX>{"a"}</TEX> задана точкой <TEX>{"A(0;3;-4)~"}</TEX>
                            и направляющим вектором <TEX>{"\\vec{a}\\{1;-2;3\\}"}</TEX>.
                        </div>
                        <div>Точка <TEX>{"B \\in a,~B_x = 2"}</TEX>. Найдите координаты точки <TEX>B</TEX>.</div>
                        <div className="i">Примечание: нужно составить уравнения прямой, затем
                        подставить <TEX>{"x = 2"}</TEX>.</div>
                    </div>,
                    <div answer="3">
                        <div>
                            Прямая <TEX>{"a"}</TEX> задана точкой <TEX>{"A(0;3;-4)~"}</TEX>
                            и направляющим вектором <TEX>{"\\vec{a}\\{1;0;3\\}"}</TEX>.
                        </div>
                        <div>Точка <TEX>{"B \\in a"}</TEX>. Найдите <TEX>{"B_y"}</TEX>.</div>
                    </div>
                ]
            },
        },
        4: {
            name: "Плоскость",
            
            1: {
                name: "Нормальный вектор",
                video: "https://drive.google.com/file/d/1bBufzXqsXPQ1AbNeCzFGwQV5K86Anv-6/view?usp=drive_link",
                tasks: [
                    <div answer="{7; 6; 6}">
                        <div>Даны векторы: <TEX>{"\\vec{a}\\left\\{6;2;-9\\right\\},~\\vec{b}\\{6;-8;1\\}"}</TEX>.</div>
                        <div>Найдите нормальный вектор плоскости <TEX>{"\\alpha:~\\alpha \\parallel \\vec{a},\\vec{b}"}</TEX>.</div>
                        <div className="i">Примечание:
                            координаты нормального вектора по возможности не должны содержать дробей,
                            не должны иметь общего множителя, а первая
                            координата должна быть неотрицательной.
                        </div>
                    </div>,
                    <div answer="{1; 1; 1}">
                        <div>Даны векторы: <TEX>{"\\vec{a}\\left\\{-\\frac{5}{3};\\frac{1}{3};\\frac{4}{3}\\right\\},~\\vec{b}\\{-8;1;7\\}"}</TEX>.</div>
                        <div>Найдите нормальный вектор плоскости <TEX>{"\\alpha:~\\alpha \\parallel \\vec{a},\\vec{b}"}</TEX>.</div>
                        <div className="i">Примечание: используйте <TEX>{"3\\vec{a}"}</TEX> вместо <TEX>{"\\vec{a}"}</TEX>.</div>
                    </div>,
                    <div answer="{1; -1; 0}">
                        <div>Плоскость <TEX>{"(ABC)"}</TEX> содержит точки:</div>
                        <div><TEX>{"A(5;2;3),~B(-2;-5;-4),~C(0;-3;0)"}</TEX>.</div>
                        <div>Найдите нормальный вектор <TEX>{"(ABC)~"}</TEX>.</div>
                    </div>,
                    <div answer="{3; -4; 6}">
                        <div>Плоскость <TEX>{"(ABC)"}</TEX> содержит точки:</div>
                        <div><TEX>{"A(2;-1;5),~B(4;-4;2),~C(2;2;7)"}</TEX>.</div>
                        <div>Найдите <TEX>{"\\vec{n}_{(ABC)}"}</TEX>.</div>
                    </div>,
                ]
            },
            2: {
                name: "Уравнение плоскости",
                foo: "",
                video: "https://drive.google.com/file/d/1nz_CESl1BxsATvcM-RxiyOIWSu2tN-56/view?usp=drive_link",
                tasks: [
                    <div answer="2x + y - 5z - 1 = 0">
                        <div>
                            Плоскость <TEX>{"\\alpha"}</TEX> содержит точку <TEX>{"A(10;6;5)~"}</TEX>
                            и перпендикулярна вектору <TEX>{"\\vec{n}\\{2;1;-5\\}"}</TEX>.
                        </div>
                        <div>
                            Найдите уравнение уравнение плоскости <TEX>\alpha</TEX>.
                        </div>
                    </div>,
                    <div answer="3x - 9y - 8z + 10 = 0">
                        <div>
                            Плоскость <TEX>\alpha</TEX> содержит точку <TEX>A(-7;-3;2)</TEX> и
                            параллельна векторам <TEX>{"\\vec{a}\\{-3;-9;9\\},~\\vec{b}\\{5;-1;3\\}"}</TEX>.
                        </div>
                        <div>
                            Найдите уравнение плоскости <TEX>\alpha</TEX>.
                        </div>
                    </div>,
                    <div answer="6x - y - 8z + 17 = 0">
                        <div>
                            Даны точки: <TEX>A(-4;3;-1),~B(-4;-5;0),~C(-5;-3;-1)</TEX>.
                        </div>
                        <div>
                            Найдите уравнение плоскости <TEX>(ABC)</TEX>.
                        </div>
                    </div>,
                    <div answer="(-15; -7; 6)">
                        <div>Даны точки: <TEX>{"A(2;2;4),~B(8;4;-2),~C(9;5;0)"}</TEX></div>
                        <div><TEX>{"D(-1;0;6),~E(1;1;6)"}</TEX>.</div>
                        <div>Составьте уравнения прямой <TEX>{"DE"}</TEX> и плоскости <TEX>{"(ABC)"}</TEX>.</div>
                        <div>Решив систему уравнений, найдите точку пересечения <TEX>{"DE~"}</TEX> и <TEX>{"(ABC)"}</TEX>.</div>
                    </div>,
                ]
            }
        }
    },
    2: {
        name: "Задачи в координатах",
        
        1: {
            name: "Углы",
            1: {
                name: "Угол между прямыми",
                foo: "",
                video: "https://drive.google.com/file/d/1gLlpl1hYPTVgOkfnSSWo_zHpl4jrNT4E/view?usp=drive_link",
                tasks: [
                        <div answer="90">
                            <div>
                                Даны точки: <TEX>{"A(3;1;1),~B(3;0;2),~C(2;-3;-3),~D(-4;-4;-4)"}</TEX>.
                            </div>
                            <div>Найдите в градусах <TEX>{"\\angle\\left(AB,CD\\right)"}</TEX>.</div>
                        </div>,
                        <div answer="60">
                            <div>
                                Даны точки: <TEX>{"A(-4;-2;0),~B(-3;-1;4),~C(-1;4;-5),~D(-3;4;-3)"}</TEX>.
                            </div>
                            <div>Найдите в градусах <TEX>{"\\angle\\left(AB,CD\\right)"}</TEX>.</div>
                        </div>,
                ]
            },
            2: {
                name: "Угол между прямой и плоскостью",
                foo: "",
                video: "https://drive.google.com/file/d/1DwURx_8Y9dK_4V2yMAQ1GOZ-2oGPCKef/view?usp=drive_link",
                tasks: [
                    <div answer="0">
                        <div>
                            Даны точки: <TEX>{"A(3;2;-4),~B(4;2;-2),~C(3;4;-5),~D(0;4;-3),~"}</TEX>
                            <TEX>{"E(4;4;3)"}</TEX>.
                        </div>
                        <div>Найдите в градусах <TEX>{"\\angle\\left(AB,(CDE)\\right)"}</TEX>.</div>
                    </div>,
                    <div answer="30">
                        <div>
                            Даны точки: <TEX>{"A(-3;2;-3),~B(0;0;-4),~C(-1;-1;1),~D(3;0;4),~"}</TEX>
                            <TEX>{"E(1;4;4)"}</TEX>.
                        </div>
                        <div>Найдите в градусах <TEX>{"\\angle\\left(AB,(CDE)\\right)"}</TEX>.</div>
                    </div>
                ]
            },
            3: {
                name: "Угол между плоскостями",
                foo: "",
                video: "https://drive.google.com/file/d/1dleMUbEQ_sh21rturaSDGdi2bv2vZCOL/view?usp=drive_link",
                tasks: [
                    <div answer="90">
                        <div>
                            Даны точки: <TEX>{"A(-3;0;3),~B(-2;4;-1),~C(2;3;0),~D(0;-4;-3),~"}</TEX>
                            <TEX>{"E(-2;3;3),~F(-4;-4;-5)"}</TEX>.
                        </div>
                        <div>Найдите в градусах <TEX>{"\\angle\\left((ABC),(DEF)\\right)"}</TEX>.</div>
                    </div>,
                    <div answer="11">
                        <div>
                            Даны точки: <TEX>{"A(1;2;0),~B(3;2;1),~C(-3;4;0),~D(1;-1;0),~"}</TEX>
                            <TEX>{"E(0;4;-1),~F(5;-5;-2)"}</TEX>.
                        </div>
                        <div>Найдите <TEX>{"\\tg{\\angle\\left((ABC),(DEF)\\right)}"}</TEX>.</div>
                    </div>,
                ]
            },
        },
        2: {
            name: "Расстояния",
            1: {
                name: "Расстояние между точками",
                foo: "",
                video: "https://drive.google.com/file/d/11AvYazC6WazRfGK77usVXxh46OTSHhQX/view?usp=drive_link",
                tasks: [
                    <div answer="2">
                        <div>Даны точки <TEX>{"A(2;1;4),~B(4;1;4)"}</TEX>.
                        <br />Найдите <TEX>{"\\rho(A,B)"}</TEX>.
                        </div>
                    </div>,
                    <div answer="3">
                        <div>Даны точки <TEX>{"A(0;4;-1),~B(2;5;-3)"}</TEX>.
                        <br />Найдите <TEX>{"\\rho(A,B)"}</TEX>.
                        </div>
                    </div>,
                ]
            },
            2: {
                name: "Расстояние от точки до прямой",
                foo: "",
                video: "https://drive.google.com/file/d/1BBcxKVEScqhdBXg-j38FfcWdrsboHolW/view?usp=drive_link",
                tasks: [
                    <div answer="3">
                        Даны точки <TEX>{"A(-1;-3;-3),~B(-5;0;4),~C(1;-2;-1)"}</TEX>.
                        <br/>Найдите <TEX>{"\\rho(A,BC)"}</TEX>.
                    </div>,
                    <div answer="7">
                        Даны точки <TEX>{"A(2;-4;4),~B(0;0;-3),~C(0;3;3)"}</TEX>.
                        <br />Найдите <TEX>{"\\rho(A,BC)"}</TEX>.
                    </div>,
                    <div answer="1">
                        Даны точки <TEX>{"A(-2;1;-1),~B(-4;-1;-4),~C(-2;0;-2)"}</TEX>.
                        <br />Найдите <TEX>{"\\rho(A,BC)"}</TEX>.
                    </div>,
                ]
            },
            3: {
                name: "Расстояние от точки до плоскости",
                foo: "",
                video: "https://drive.google.com/file/d/1leYzt5QDPZXR_Z7IveSudK1dA9VeZOXE/view?usp=drive_link",
                tasks: [
                    <div answer="1">
                        <div>Дано уравнение плоскости <TEX>{"\\alpha:~~3x-6y-2z+3=0"}</TEX></div>
                        <div>и точка <TEX>A(2;3;-1)</TEX>.</div>
                        <div>Найдите <TEX>{"\\rho(A,\\alpha)"}</TEX>.</div>
                    </div>,
                    <div answer="0">
                        <div>Даны точки <TEX>{"A(3;-4;-2),~B(3;0;-1),~C(-4;-4;-5),~D(-4;4;-3)"}</TEX>.</div>
                        <div>Найдите <TEX>{"\\rho(A,(BCD))"}</TEX>.</div>
                        <div>Подумайте, в чём смысл полученного ответа?</div>
                    </div>,
                    <div answer="2">
                        <div>Даны точки <TEX>{"A(1;-1;4),~B(2;-2;2),~C(-3;2;2),~D(3;-3;2)"}</TEX>.</div>
                        <div>Найдите <TEX>{"\\rho(A,(BCD))"}</TEX>.</div>
                    </div>
                ]
            },
            4: {
                name: "Расстояние от прямой до плоскости",
                foo: "",
                video: "https://drive.google.com/file/d/1x58jwt722KFhnAHcOJ18WYwDymfswcYI/view?usp=drive_link",
                tasks: [
                    <div answer="3,2">
                        <div>
                            Дана плоскость <TEX>{"(ABC):~A(-3;4;-4),~B(-1;4;-4),~C(-1;1;0)~"}</TEX>
                            и прямая <TEX>{"DE \\parallel (ABC):~D(3;-3;0),~E(5;-6;4)"}</TEX>.
                        </div>
                        <div>Найдите <TEX>{"\\rho(DE,(ABC))"}</TEX>.</div>
                    </div>
                ]
            },
            5: {
                name: "Расстояние между плоскостями",
                foo: "",
                video: "https://drive.google.com/file/d/1jO5_2rEOgLEvUHgSSLT_4zSEPoyZ9-GO/view?usp=drive_link",
                tasks: [
                    <div answer="0,6">
                        <div>
                            Даны точки <TEX>{"A(-1;-2;-3),~B(3;-3;0),~C(-1;4;-3)"}</TEX>.
                        </div>
                        <div>
                            Через точку <TEX>{"D(4;3;0)~"}</TEX> проходит плоскость <TEX>{"\\alpha \\parallel (ABC)"}</TEX>. 
                        </div>
                        <div>Найдите <TEX>{"\\rho(\\alpha, (ABC))"}</TEX>.</div>
                    </div>
                ]
            },
            6: {
                name: "Расстояние между прямыми",
                foo: "",
                video: "https://drive.google.com/file/d/11OOEUKn-vqHumL-gDh2-vTmGZ4hhpJly/view?usp=drive_link",
                tasks: [
                    <div answer="3">
                        <div>Прямая <TEX>{"a"}</TEX> проходит через 
                            точки <TEX>{"A(-3;-5;1)~"}</TEX> и <TEX>{"B(-3;3;-1)"}</TEX>. Прямая <TEX>{"b"}</TEX> проходит через
                            точки <TEX>{"C(0;-1;0)~"}</TEX> и <TEX>{"D(0;-9;2)"}</TEX>.
                        </div>
                        <div>Найдите <TEX>{"\\rho(a,b)"}</TEX>.</div>
                    </div>,
                    <div answer="8">
                        <div>Прямая <TEX>{"a"}</TEX> проходит через точки <TEX>{"A(-5;-3;-5)~"}</TEX>
                            и <TEX>{"B(-2;-2;-5)"}</TEX>. Прямая <TEX>{"b"}</TEX> проходит через точки
                            <TEX>{"~C(4;-4;3)~"}</TEX> и <TEX>{"D(5;-4;3)"}</TEX>.
                        </div>
                        <div>Найдите <TEX>{"\\rho(a,b)"}</TEX>.</div>
                    </div>,
                ]
            },
        }
    },
    3: {
        name: "Система координат для тел",
        1: {
            name: "Прямоугольные тела", 
            1: {
                name: "Прямоугольный параллелепипед",
                foo: "",
                video: "https://drive.google.com/file/d/1aQMmFG9Jkw9kwm3v-qfs-9HKLUfbyWw2/view?usp=drive_link",
                tasks: [
                    <div answer="(1/2; 1/2; 1/2)">
                        Найдите координаты центра единичного куба.
                    </div>
                ],
                material: <Geogebra name={GEOGERBA.PRISM4} />
            },
            2: {
                name: "Правильная четырёхугольная пирамида",
                foo: "",
                video: "https://drive.google.com/file/d/1WU8Sc8WE_GGJ9Gx58_vbzumM8L7NuLTo/view?usp=drive_link",
                tasks: [
                    <div answer="(0; 0; 1/√2)">
                        Найдите координаты вершины <TEX>P</TEX> в правильной четырёхугольной
                        пирамиде, все рёбра которой равны 1.
                    </div>
                ],
                material: <Geogebra name={GEOGERBA.PYRAMID4} />
            },
        },
        2: {
            name: "Треугольные тела",
            1: {
                name: "Правильная треугольная призма",
                foo: "",
                video: "https://drive.google.com/file/d/1MbzWBTFUF8C4HWtlBC5FWpxflB8uOhm6/view?usp=drive_link",
                tasks: [
                    <div answer="(0; √3/2; 1)">
                        Найдите координаты точки <TEX>C_1</TEX> в правильной треугольной
                        призме, у которой все рёбра равны 1.
                    </div>
                ],
                material: <Geogebra name={GEOGERBA.PRISM3} />   
            },
            2: {
                name: "Правильная треугольная пирамида",
                foo: "",
                video: "https://drive.google.com/file/d/1bMQoQ2tHLa9T4_W5ySyQYJBRCs-M-uFv/view?usp=drive_link",
                tasks: [
                    <div answer="(0; √3/6; sqrt(2/3))">
                        Найдите координаты вершины <TEX>P</TEX> единичном правильном тетраэдре.
                    </div>
                ],
                material: <Geogebra name={GEOGERBA.PYRAMID3} />
            },
        },
        3: {
            name: "Шестиугольные тела",
            1: {
                name: "Правильная шестиугольная призма",
                foo: "",
                video: "https://drive.google.com/file/d/1qfB521P4S3CiAaiFUGxGniphxtERrgob/view?usp=drive_link",
                tasks: [
                    <div answer="(-1/2; √3/2; 1)">
                        Найдите координаты точки <TEX>C_1</TEX> в правильной шестиугольной
                        призме, у которой все рёбра равны 1.
                    </div>
                ],
                material: <Geogebra name={GEOGERBA.PRISM6} />   
            },
            2: {
                name: "Правильная шестиугольная пирамида",
                foo: "",
                video: "https://drive.google.com/file/d/1jR4qZYPRBlDjwv3VJRU-1C2TSKLxxieA/view?usp=drive_link",
                tasks: [
                    <div answer="(0; 0; √3)">
                        Найдите координаты вершины <TEX>P</TEX> в правильной шестиугольной
                        пирамиде, стороны основания которой равны 1, а боковые рёбра 2.
                    </div>
                ],
                material: <Geogebra name={GEOGERBA.PYRAMID6} />
            },
        },
        4: {
            name: "Округлые тела",
            1: {
                name: "Конус",
                foo: "",
                video: "https://drive.google.com/file/d/1nBtKTSQ8P6XMOxBEkURkxFtdsnlkgm85/view?usp=drive_link",
                tasks: [
                    <div answer="(√3/2; 1/2; 0)">
                            В конусе с радиусом основния 1 найдите координаты
                            точки <TEX>C</TEX>, где <TEX>{"C \\in \\overset{\\smile}{AB},~\\overset{\\smile}{AC} = 30^{\\circ}"}</TEX>
                        </div>
                ],
                material: <Geogebra name={GEOGERBA.CONE} />
            },
            2: {
                name: "Цилиндр",
                foo: "",
                video: "https://drive.google.com/file/d/1wm-JWhQMbjlxIhWmTLJu5mnxzDE4DzgV/view?usp=drive_link",
                tasks: [
                    <div answer="1/2">
                        <div>
                            На окружности основания цилиндра с радиусом основания 1 и высотой 1
                            отмечена точка <TEX>{"X\\left(\\frac{\\sqrt{3}}{2}; ?;1\\right)"}</TEX>.
                        </div>
                        <div>
                            Найдите <TEX>X_y</TEX>.
                        </div>
                    </div>
                ],
                material: <Geogebra name={GEOGERBA.CYLINDER} />
            },
            3: {
                name: "Шар",
                foo: "",
                video: "https://drive.google.com/file/d/1RtUUcVqcgNwRHwZWDDLQlnXu7sHL2Hb_/view?usp=drive_link",
                tasks: [
                    <div answer="1/2">
                        <div>
                            На единичной сфере отмечена точка <TEX>{"X\\left(?;\\frac{2}{3};\\frac{\\sqrt{11}}{6}\\right)"}</TEX>.
                        </div>
                        <div>Найдите <TEX>X_x</TEX>.</div>
                    </div>
                ],
                material: <Geogebra name={GEOGERBA.SPHERE} />
            },
        },
    },
    4: {
        name: "Задачи стереометрии",
        1: {
            name: "Задачи ЕГЭ",
            2: {
                name: "Точки",
                foo: "",
                video: "https://drive.google.com/file/d/1qXsngiONX8SJQGJefGitgI68k6QbxUvx/view?usp=drive_link",
                tasks: [
                    <div answer="4">
                         В правильной треугольной пирамиде боковое ребро равно 5,
                         а сторона основания равна <TEX>{"3\\sqrt{3}"}</TEX>.<br /> 
                         Найдите высоту пирамиды.       
                    </div>,
                    <div answer="√11">
                        Длина диагонали куба <TEX>ABCDA_1B_1C_1D_1</TEX> равна 3.
                        На луче <TEX>A_1C</TEX>отмечена точка <TEX>P</TEX> так, что <TEX>A_1P = 4</TEX>.
                        <br /> Найдите длину отрезка <TEX>AP</TEX>. 
                    </div>,
                    <div answer="2">
                        В кубе <TEX>ABCDA_1B_1C_1D_1</TEX> все рёбра равны 4.
                        На его ребре <TEX>BB_1</TEX> отмечена
                        точка <TEX>K</TEX> так, что <TEX>KB=3</TEX>. 
                        Через точки <TEX>K</TEX> и <TEX>C_1</TEX> проведена плоскость <TEX>\alpha</TEX>,
                        параллельная прямой <TEX>BD_1</TEX>.<br />
                        Найдите <TEX>A_1P:PB_1</TEX>, где <TEX>P</TEX> &ndash; точка пересечения
                        плоскости <TEX>\alpha</TEX> с ребром <TEX>A_1B_1</TEX>.
                    </div>,
                    <div answer="5">
                        В правильной треугольной пирамиде <TEX>SABC</TEX> сторона
                        основания <TEX>AB</TEX> равна 12, 
                        а боковое ребро <TEX>SA</TEX> равно 13.
                        Точки <TEX>M</TEX> и <TEX>N</TEX> &ndash; середины
                        рёбер <TEX>SA</TEX> и <TEX>SB</TEX> соответственно.
                        Плоскость <TEX>\alpha</TEX> содержит прямую <TEX>MN</TEX> и
                        перпендикулярна плоскости основания пирамиды. <br />
                        Найдите в каком отношении плоскость <TEX>\alpha</TEX> делит
                        медиану <TEX>CE</TEX> основания считая от точки <TEX>C</TEX>.
                    </div>,
                    <div answer="1">
                        В правильной треугольной призме <TEX>ABCA_1B_1C_1</TEX> сторона <TEX>AB</TEX> основания
                        равна 12, а высота призмы равна 2. На рёбрах <TEX>B_1C_1</TEX> и <TEX>AB</TEX> отмечены
                        точки <TEX>P</TEX> и <TEX>Q</TEX> соответственно,
                        причём <TEX>PC_1=3</TEX>, а <TEX>AQ=4</TEX>.
                        Плоскость <TEX>A_1PQ</TEX> пересекает ребро <TEX>BC</TEX> в точке <TEX>M</TEX>.
                        <br /> Найдите в каком отношении точка <TEX>M</TEX> делит 
                        ребро <TEX>BC</TEX>.
                    </div>,
                    <div answer="1">
                        Точка <TEX>E</TEX> лежит на высоте <TEX>SO</TEX>, а 
                        точка <TEX>F</TEX> &ndash; на боковом ребре <TEX>SC</TEX> правильной
                        четырёхугольной пирамиды <TEX>SABCD</TEX>, 
                        причём <TEX>SE:EO=SF:FC=2:1</TEX>. <br />
                        Найдите в каком отношении плоскость <TEX>BEF</TEX> делит 
                        ребро <TEX>SD</TEX>.
                    </div>,
                ]
            },
            1: {
                name: "Углы и расстояния",
                foo: "",
                video: "https://drive.google.com/file/d/198taxJbA9MvB4xfrcxh4B6xxSb7o9B9h/view?usp=drive_link",
                tasks: [
                    <div answer="5">
                                В правильной шестиугольной призме

                                <TEX>
                                    ~ABCDEFA_1B_1C_1D_1E_1F_1~
                                </TEX> 
                                все ребра равны <TEX>{`\\sqrt{5}`}</TEX>.<br/>
                                Найдите расстояние между точками <TEX>B</TEX> и <TEX>E_1</TEX>.
                    </div>,
                    <div answer="60">
                        В кубе <TEX>ABCDA_1B_1C_1D_1</TEX> точка <TEX>K</TEX> &ndash; 
                        середина ребра <TEX>AA_1</TEX>, точка <TEX>L</TEX> &ndash; середина
                        ребра <TEX>A_1D_1</TEX>,
                        точка <TEX>M</TEX> &ndash; середина ребра <TEX>A_1B_1</TEX>. 
                        <br/>Найдите угол <TEX>MLK</TEX>.
                    </div>,
                    <div answer="60">
                        В кубе <TEX>ABCDA_1B_1C_1D_1</TEX> найдите угол между
                        прямыми <TEX>AD_1</TEX> и <TEX>B_1D_1</TEX>. 
                    </div>,
                    <div answer="60">
                        В правильной шестиугольной призме <TEX>ABCDEFA_1B_1C_1D_1E_1F_1</TEX>, все
                        ребра которой равны 8, найдите угол между прямыми <TEX>FA</TEX> и <TEX>D_1E_1</TEX>. 
                    </div>,
                    <div answer="45">
                        В правильной треугольной призме <TEX>ABCA_1B_1C_1</TEX>, все ребра
                        которой равны 3, найдите угол между
                        прямыми <TEX>AA_1</TEX> и <TEX>BC_1</TEX>. 
                    </div>,
                    <div answer="3/√26">
                        В кубе <TEX>ABCDA_1B_1C_1D_1</TEX> все рёбра равны 4. На его
                        ребре <TEX>BB_1</TEX> отмечена
                        точка <TEX>K</TEX> так, что <TEX>KB=3</TEX>.
                        Через точки <TEX>K</TEX> и <TEX>C_1</TEX> проведена
                        плоскость <TEX>\alpha</TEX>,
                        параллельная прямой <TEX>BD_1</TEX>.<br/>
                        Найдите косинус угла между
                        плоскостями <TEX>\alpha</TEX> и <TEX>(BCC_1)</TEX>.
                    </div>,
                    <div answer="3√30 / 5">
                        В правильной треугольной призме <TEX>ABCA_1B_1C_1</TEX> сторона <TEX>AB</TEX> основания
                        равна 12, а высота призмы равна 2. На рёбрах <TEX>B_1C_1</TEX> и <TEX>AB</TEX> отмечены
                        точки <TEX>P</TEX> и <TEX>Q</TEX> соответственно, причём <TEX>PC_1=3</TEX>, а <TEX>AQ=4</TEX>.
                        <br/>Найдите расстояние от точки <TEX>B</TEX> до плоскости <TEX>A_1PQ</TEX>.
                    </div>,
                    <div answer="90">
                        В правильной четырехугольной пирамиде <TEX>SABCD</TEX> все ребра равны 5.
                        На ребрах <TEX>SA,~AB,~BC</TEX> взяты точки <TEX>P,~Q,~R</TEX> соответственно 
                        так, что <TEX>PA=AQ=RC=2</TEX>.
                        <br/>Найдите угол между плоскостью <TEX>(PQR)</TEX> и ребром <TEX>SD</TEX>.
                    </div>,
                    <div answer="60">
                        На окружности одного из оснований цилиндра выбраны
                        точки <TEX>A,~B</TEX> и <TEX>C</TEX>, а на окружности
                        другого основания &ndash; точка <TEX>C_1</TEX>,
                        причём <TEX>CC_1</TEX> &ndash; образующая цилиндра,
                        а <TEX>AC</TEX> &ndash; диаметр основания.
                        Известно, что <TEX>{`\\angle ACB = 45^{\\circ}`}</TEX>,
                        <TEX>{`AB = 2\\sqrt{2},~CC_1=4`}</TEX>.
                        <br/>Найдите угол между прямыми <TEX>AC_1</TEX> и <TEX>BC</TEX>.    
                    </div>,
                    <div answer="90">
                        В правильной шестиугольной пирамиде <TEX>SABCDEF</TEX> сторона
                        основания <TEX>AB = 7</TEX>, а боковое ребро <TEX>SA = 10</TEX> .
                        Точка <TEX>M</TEX>  лежит на ребре <TEX>BC</TEX> ,
                        причем <TEX>BM = 4</TEX> , точка <TEX>K</TEX>  лежит на 
                        ребре <TEX>SC</TEX> , причем <TEX>SK = 7</TEX>.<br/>
                        Найдите угол между плоскостью <TEX>(MKD)</TEX>  и плоскостью основания
                        пирамиды.
                    </div>,
                ]
            },
            3: {
                name: "Площадь сечения",
                foo: "",
                video: "https://drive.google.com/file/d/1liAlkKaa_vfFZtOju6jGcCN41VfsUEIg/view?usp=drive_link",
                tasks: [
                    <div answer="5">
                        В прямоугольном параллелепипеде <TEX>ABCDA_1B_1C_1D_1</TEX> ребро <TEX>AB=2</TEX>,
                        ребро <TEX>{"AD=\\sqrt{5}"}</TEX>, ребро <TEX>AA_1=2</TEX>.
                        Точка <TEX>K</TEX> &ndash; середина ребра <TEX>BB_1</TEX>.  
                        <br />Найдите площадь сечения, проходящего 
                        через точки <TEX>A_1,~D_1,~K</TEX>.     
                    </div>,
                    <div answer="2√30">
                        В правильной треугольной пирамиде <TEX>MABC</TEX> с
                        основанием <TEX>ABC</TEX> стороны
                        основания равны 6, а боковые рёбра 8. 
                        На ребре <TEX>AC</TEX> находится точка <TEX>D</TEX>,
                        на ребре <TEX>AB</TEX> находится точка <TEX>E</TEX>,
                        а на ребре <TEX>AM</TEX> &ndash; точка <TEX>L</TEX>.
                        Известно, что <TEX>CD=BE=LM=2</TEX>.
                        <br />Найдите площадь сечения пирамиды плоскостью,
                        проходящей через точки <TEX>E,~D,~L</TEX>.
                    </div>,
                    <div answer="3">
                        В правильном тетраэдре <TEX>ABCD</TEX> точки <TEX>K,~M</TEX> &ndash; середины 
                        рёбер <TEX>AB,~CD</TEX> соответственно. 
                        Плоскость <TEX>\alpha</TEX> содержит прямую <TEX>KM</TEX> и параллельна
                        прямой <TEX>AD</TEX>.
                        <br />Найдите площадь сечения тетраэдра <TEX>ABCD</TEX> плоскостью <TEX>\alpha</TEX>,
                        если <TEX>{"AB=2\\sqrt{3}"}</TEX>.
                    </div>,
                    <div answer="8√6">
                        Дана правильная четырехугольная призма <TEX>ABCDA_1B_1C_1D_1</TEX>.
                        На ребре <TEX>AA_1</TEX> отмечена точка <TEX>K</TEX> так,
                        что <TEX>AK=KA_1=1:2</TEX>.
                        Плоскость <TEX>\alpha</TEX> проходит через 
                        точки <TEX>B</TEX> и <TEX>K</TEX> параллельно прямой <TEX>AC</TEX>.
                        Эта плоскость пересекает ребро <TEX>DD_1</TEX> в точке <TEX>M</TEX>.
                        <br />Найдите площадь сечения, если <TEX>AB=4,~AA_1=6</TEX>.
                    </div>,
                    <div answer="44">
                        В правильной треугольной пирамиде <TEX>SABC</TEX> сторона
                        основания <TEX>AB</TEX> равна 12, 
                        а боковое ребро <TEX>SA</TEX> равно 13.
                        Точки <TEX>M</TEX> и <TEX>N</TEX> &ndash; середины
                        рёбер <TEX>SA</TEX> и <TEX>SB</TEX> соответственно.
                        Плоскость <TEX>\alpha</TEX> содержит прямую <TEX>MN</TEX> и
                        перпендикулярна плоскости основания пирамиды. <br />
                        Найдите площадь многоугольника, являющегося сечением 
                        пирамиды <TEX>SABC</TEX> плоскостью <TEX>\alpha</TEX>.
                    </div>,
                ]
            },
            4: {
                name: "Объём пирамиды",
                foo: "",
                video: "https://drive.google.com/file/d/17U9k219PM62a6NFKJzex2Js_mzIi-AMJ/view?usp=drive_link",
                tasks: [
                    <div answer="18">
                        Ребро куба <TEX>ABCDA_1B_1C_1D_1</TEX> равно 6.
                        Точки <TEX>K,~L,~M</TEX> &ndash; центры 
                        граней <TEX>ABCD,~AA_1D_1D</TEX> и <TEX>CC_1D_1D</TEX> соответственно.
                        <br />Найдите объём <TEX>B_1KLM</TEX>.
                    </div>,
                    <div answer="18√3">
                        В правильной треугольной призме <TEX>ABCA_1B_1C_1</TEX> все рёбра равны 6.
                        На рёбрах <TEX>AA_1</TEX> и <TEX>CC_1</TEX> отмечены
                        точки <TEX>M</TEX> и <TEX>N</TEX> соответственно, 
                        причём <TEX>AM=2,~CN=1</TEX>. <br />
                        Найдите объём тетраэдра <TEX>MNBB_1</TEX>.
                    </div>,
                    <div answer="9√11 / 7">
                        В правильной шестиугольной пирамиде <TEX>SABCDEF</TEX> сторона 
                        основания <TEX>AB=4</TEX>, а боковое ребро <TEX>SA=7</TEX>. 
                        Точка <TEX>M</TEX> лежит на ребре <TEX>BC</TEX>, 
                        причем <TEX>BM=1</TEX>, точка <TEX>K</TEX> лежит на 
                        ребре <TEX>SC</TEX>, причем <TEX>SK=4</TEX>.
                        <br />Найдите объем пирамиды <TEX>CDKM</TEX>.
                    </div>,
                    <div answer="80√3">
                        Дана правильная треугольная пирамида <TEX>SABC</TEX>, 
                        сторона основания <TEX>AB=16</TEX>, 
                        высота <TEX>SH=10</TEX>, точка <TEX>K</TEX> &ndash; середина <TEX>AS</TEX>. 
                        Плоскость, проходящая
                        через точку <TEX>K</TEX> и параллельная основанию пирамиды, 
                        пересекает ребра <TEX>SB</TEX> и <TEX>SC</TEX> в точках <TEX>Q</TEX> и <TEX>P</TEX> соответственно.
                        <br />Найдите объем пирамиды <TEX>KBQPC</TEX>.
                    </div>,
                    <div answer="20√14">
                        Основанием прямой треугольной призмы <TEX>ABCA_1B_1C_1</TEX> является 
                        прямоугольный треугольник <TEX>ABC</TEX> с прямым углом <TEX>C</TEX>. 
                        Диагонали боковых граней <TEX>AA_1B_1B</TEX> и <TEX>BB_1C_1C</TEX> равны 15 и 9 
                        соответственно, <TEX>AB=13</TEX>.
                        <br />Найдите объём пирамиды <TEX>AA_1C_1B</TEX>.
                    </div>,
                ]
            },
        },
    }
}