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
                    <div answer1="15" answer="1">
                        <div>Даны точки:  <TEX>{"A(1;~2;~3),~B(4;~5;~6),~C(7;~8;~9)"}</TEX>.</div>
                        <div>Найдите <TEX>{"A_x + B_y + C_z"}</TEX>.</div>
                    </div>
                ]
            },
            2: {
                name: "Точка на отрезке",
                tasks: [
                    <div answer1="-2-2-5" answer="1">
                        <div>Найдите координаты середины отрезка <TEX>{"AB"}</TEX>,</div>
                        <div>если <TEX>{"A(3;-10;-3),~B(-7;6;-7)"}</TEX>.</div>
                    </div>,
                    <div answer1="-3-2-1" answer="1">
                        <div>
                            Дана точка <TEX>{"A(1;2;3)"}</TEX>. Точка <TEX>{"B(-1;0;1)~"}</TEX> 
                            является серединой отрезка <TEX>{"AC"}</TEX>.
                        </div>
                        <div>
                            Найдите координаты точки <TEX>{"C"}</TEX>.
                        </div>
                    </div>,
                    <div answer1="4-31" answer="1">
                        <div>Дан отрезок <TEX>{"AB"}</TEX> с концами <TEX>{"A(4;0;4),~B(4;-5;-1)"}</TEX>.</div>
                        <div>На отрезке выбрана точка <TEX>{"C"}</TEX> так, что <TEX>{"AC:CB=3:2"}</TEX>.</div>
                        <div>Найдите координаты точки <TEX>{"C"}</TEX>.</div>
                    </div>,
                    <div answer1="-132" answer="1">
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
                name: "Координаты вектора",
                tasks: [
                    <div answer1="-6-24" answer="1">
                        <div>
                            Даны точки <TEX>{"A(4;2;-1)"}</TEX> и <TEX>{"B(-2; 0; 3)"}</TEX>.                            
                        </div>
                        <div>
                            Найдите координаты вектора <TEX>{"\\vector{AB}"}</TEX>.
                        </div>
                    </div>,
                    <div answer1="16-1" answer="1">
                        <div>
                            Дан вектор <TEX>{"\\vector{AB}\\{-4;5;-1\\}~"}</TEX>
                            с началом в точке <TEX>{"A(5;1;0)"}</TEX>.
                        </div>
                        <div>
                            Найдите координаты конца вектора.
                        </div>
                    </div>
                ]
            },
            2: {
                name: "Действия с векторами",
                tasks: [
                    <div answer="1">
                        <div>
                            Даны векторы <TEX>{"\\vector{a}\\{ 0;-3;4 \\},~\\vector{b}\\{-2;0;1\\}"}</TEX>.
                        </div>
                        <div>
                            Найдите координаты вектора <TEX>{"\\vector{a} + \\vector{b}"}</TEX>.
                        </div>
                    </div>,
                    <div answer="1">
                        <div>
                            Даны те же векторы, что и в задании 1.
                        </div>
                        <div>
                            Найдите координаты вектора <TEX>{"\\vector{a} - \\vector{b}"}</TEX>.
                        </div>
                    </div>,
                    <div answer="1">
                        <div>
                            Даны те же векторы, что и в задании 1.
                        </div>
                        <div>
                            Найдите координаты вектора <TEX>{"2 \\cdot \\vector{a} - 3 \\cdot \\vector{b}"}</TEX>.
                        </div>
                    </div>,
                ]
            },
            3: {
                name: "Параллельность векторов",
                tasks: [
                    <div answer="1">
                        <div>Даны векторы <TEX>{"\\vector{a}\\{-3;6;15\\}~"}</TEX>и 
                        <TEX>{"~\\vector{b}\\{1;-2;-5\\}"}</TEX> .</div>
                        <div>Выберите верное утверждение:</div>
                        <div>1. <TEX>{"\\vector{a} \\parallel \\vector{b}"}</TEX></div>
                        <div>2. <TEX>{"\\vector{a} \\not\\parallel \\vector{b}"}</TEX>.</div>
                    </div>,
                    <div answer="1">
                        <div>
                            Дан вектор <TEX>{"\\vector{a}\\{21;0;-7\\}"}</TEX>.
                            Найдите координаты вектора, параллельного данному,
                            с взаимнопростыми координатами.
                        </div>
                    </div>
                ]
            },
            4: {
                name: "Скалярное произведение",
                tasks: [
                    <div answer="1">
                        <div>Дано <TEX>{"\\vector{a}\\{3;-4;-2\\},~\\vector{b}\\{-2;-1;4\\}"}</TEX>.</div>
                        <div>Найдите <TEX>{"\\vector{a}\\cdot \\vector{b}"}</TEX>.</div>
                    </div>,
                    <div answer="1">
                        <div>Дано <TEX>{"\\vector{a}\\{-1;1;-2\\},~\\vector{b}\\{4;-2;-3\\}"}</TEX>.</div>
                        <div>Найдите <TEX>{"\\vector{a}\\cdot \\vector{b}"}</TEX>.</div>
                    </div>
                ]
            },
            5: {
                name: "Длина вектора",
                tasks: [
                    <div answer="1">
                        <div>Дано <TEX>{"\\vector{a}\\{-4;-2;4\\}"}</TEX>.
                        Найдите <TEX>{"\\left|\\vector{a}\\right|"}</TEX>.</div>
                    </div>,
                    <div answer="1">
                        <div>Дано <TEX>{"\\vector{a}\\{3;-4;0\\}"}</TEX>.
                        Найдите <TEX>{"\\left|\\vector{a}\\right|"}</TEX>.</div>
                    </div>
                ]
            },
            6: {
                name: "Угол между векторами",
                tasks: [
                    <div answer="1">
                        <div>Дано <TEX>{"\\vector{a}\\{-5;-2;-3\\},~\\vector{b}\\{-1;-2;-3\\}"}</TEX>.</div>
                        <div>Найдите в градусах <TEX>{"\\angle\\left(\\vector{a}, \\vector{b}\\right)"}</TEX>.</div>
                    </div>,
                    <div answer="1">
                        <div>Дано <TEX>{"\\vector{a}\\{-3;1;-2\\},~\\vector{b}\\{1;2;3\\}"}</TEX>.</div>
                        <div>Найдите в градусах <TEX>{"\\angle\\left(\\vector{a}, \\vector{b}\\right)"}</TEX>.</div>
                    </div>
                ]
            },
        },
        3: {
            name: "Прямая",
            
            1: {
                name: "Направляющий вектор",
                tasks: [
                    <div answer="1">
                        <div>
                            Вектор <TEX>{"\\vector{a}\\{1;2;0\\}~"}</TEX>
                            является направляющим для прямой <TEX>{"a"}</TEX>.
                        </div>
                        <div>
                            Вектор <TEX>{"\\vector{b}\\{2;4;1\\}~"}</TEX>
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
                tasks: [
                    <div answer="1">
                        <div>
                            Прямая <TEX>{"a"}</TEX> задана точкой <TEX>{"A(0;3;-4)~"}</TEX>
                            и направляющим вектором <TEX>{"\\vector{a}\\{1;-2;3\\}"}</TEX>.
                        </div>
                        <div>Точка <TEX>{"B \\in a,~B_x = 2"}</TEX>. Найдите координаты точки <TEX>{"B"}</TEX>.</div>
                        <div className="i">Примечание: нужно составить уравнения прямой, затем
                        подставить <TEX>{"x = 2"}</TEX>.</div>
                    </div>,
                    <div answer="1">
                        <div>
                            Прямая <TEX>{"a"}</TEX> задана точкой <TEX>{"A(0;3;-4)~"}</TEX>
                            и направляющим вектором <TEX>{"\\vector{a}\\{1;0;3\\}"}</TEX>.
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
                tasks: [
                    <div answer="1">
                        <div>Даны векторы: <TEX>{"\\vector{a}\\left\\{-\\frac{5}{3};\\frac{1}{3};\\frac{4}{3}\\right\\},~\\vector{b}\\{-8;1;7\\}"}</TEX>.</div>
                        <div>Найдите нормальный вектор плоскости <TEX>{"\\alpha:~\\alpha \\parallel \\vector{a},\\vector{b}"}</TEX>.</div>
                        <div className="i">Примечание: используйте <TEX>{"3\\vector{a}"}</TEX> вместо <TEX>{"\\vector{a}"}</TEX>.</div>
                    </div>,
                    <div answer="1">
                        <div>Плоскость <TEX>{"(ABC)"}</TEX> содержит точки:</div>
                        <div><TEX>{"A(5;2;3),~B(-2;-5;-4),~C(0;-3;0)"}</TEX>.</div>
                        <div>Найдите нормальный вектор <TEX>{"(ABC)~"}</TEX> с взаимно простыми координатами.</div>
                        <div className="i">Примечание: вектор, концы которого принадлежат плоскости, ей параллелен.</div>
                    </div>
                ]
            },
            2: {
                name: "Уравнение плоскости",
                tasks: [
                    <div answer="1">
                        <div>
                            Плоскость <TEX>{"\\alpha"}</TEX> содержит точку <TEX>{"A(10;6;5)~"}</TEX>
                            и перпендикулярна вектору <TEX>{"\\vector{n}\\{2;1;-5\\}"}</TEX>.
                        </div>
                        <div>
                            Запишите уравнение уравнение плоскости <TEX>{"\\alpha"}</TEX> в виде
                            <TEX>{"ax+by+cz+d=0"}</TEX>.
                        </div>
                    </div>,
                    <div answer="1">
                        <div>Даны точки: <TEX>{"A(2;4;-7),~B(8;-5;-4),~C(3;-2;-2),"}</TEX></div>
                        <div><TEX>{"D(-1;0;6),~E(1;1;6)"}</TEX>.</div>
                        <div>Составьте уравнения прямой <TEX>{"DE"}</TEX> и плоскости <TEX>{"(ABC)"}</TEX>.</div>
                        <div>Решив систему уравнений, найдите точку пересечения <TEX>{"DE~"}</TEX> и <TEX>{"(ABC)"}</TEX>.</div>
                    </div>
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
                tasks: [
                        <div answer="1">
                            <div>
                                Даны точки: <TEX>{"A(3;1;1),~B(3;0;2),~C(2;-3;-3),~D(-4;-4;-4)"}</TEX>.
                            </div>
                            <div>Найдите в градусах <TEX>{"\\angle\\left(AB,CD\\right)"}</TEX>.</div>
                        </div>,
                        <div answer="1">
                            <div>
                                Даны точки: <TEX>{"A(-4;-2;0),~B(-3;-1;4),~C(-1;4;-5),~D(-3;4;-3)"}</TEX>.
                            </div>
                            <div>Найдите в градусах <TEX>{"\\angle\\left(AB,CD\\right)"}</TEX>.</div>
                        </div>,
                ]
            },
            2: {
                name: "Угол между прямой и плоскостью",
                tasks: [
                    <div answer="1">
                        <div>
                            Даны точки: <TEX>{"A(3;2;-4),~B(4;2;-2),~C(3;4;-5),~D(0;4;-3)"}</TEX>
                            <TEX>{"E(4;4;3)"}</TEX>.
                        </div>
                        <div>Найдите в градусах <TEX>{"\\angle\\left(AB,(CDE)\\right)"}</TEX>.</div>
                    </div>,
                    <div answer="1">
                        <div>
                            Даны точки: <TEX>{"A(-3;2;-3),~B(0;0;-4),~C(-1;-1;1),~D(3;0;4)"}</TEX>
                            <TEX>{"E(1;4;4)"}</TEX>.
                        </div>
                        <div>Найдите в градусах <TEX>{"\\angle\\left(AB,(CDE)\\right)"}</TEX>.</div>
                    </div>
                ]
            },
            3: {
                name: "Угол между плоскостями",
                tasks: [
                    <div answer="1">
                        <div>
                            Даны точки: <TEX>{"A(-3;0;3),~B(-2;4;-1),~C(2;3;0),~D(0;-4;-3)"}</TEX>
                            <TEX>{"E(-2;3;3),~F(-4;-4;-5)"}</TEX>.
                        </div>
                        <div>Найдите в градусах <TEX>{"\\angle\\left((ABC),(DEF)\\right)"}</TEX>.</div>
                    </div>,
                    <div answer="1">
                        <div>
                            Даны точки: <TEX>{"A(1;2;0),~B(3;2;1),~C(-3;4;0),~D(1;-1;0)"}</TEX>
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
                tasks: [
                    <div answer="1">
                        <div>Даны точки <TEX>{"A(2;1;4),~B(4;1;4)"}</TEX>.
                        Найдите <TEX>{"\\rho(A,B)"}</TEX>.
                        </div>
                    </div>
                ]
            },
            2: {
                name: "Расстояние от точки до прямой",
                tasks: [
                    <div answer="1">
                        Даны точки <TEX>{"A(-1;-3;-3),~B(-5;0;4),~C(1;-2;-1)"}</TEX>.
                        Найдите <TEX>{"\\rho(A,BC)"}</TEX>.
                    </div>,
                    <div answer="1">
                        Даны точки <TEX>{"A(2;-4;4),~B(0;0;-3),~C(0;3;3)"}</TEX>.
                        Найдите <TEX>{"\\rho(A,BC)"}</TEX>.
                    </div>
                ]
            },
            3: {
                name: "Расстояние от точки до плоскости",
                tasks: [
                    <div answer="1">
                        <div>Даны точки <TEX>{"A(3;-4;-2),~B(3;0;-1),~C(-4;-4;-5),~D(-4;4;-3)"}</TEX>.</div>
                        <div>Найдите <TEX>{"\\rho(A,(BCD))"}</TEX>.</div>
                        <div>Подумайте, в чём смысл полученного ответа?</div>
                    </div>,
                    <div answer="1">
                        <div>Даны точки <TEX>{"A(1;-1;4),~B(2;-2;2),~C(-3;2;2),~D(3;-3;2)"}</TEX>.</div>
                        <div>Найдите <TEX>{"\\rho(A,(BCD))"}</TEX>.</div>
                    </div>
                ]
            },
            4: {
                name: "Расстояние от прямой до плоскости",
                tasks: [
                    <div answer="1">
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
                tasks: [
                    <div answer="1">
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
                tasks: [
                    <div answer="1">
                        <div>Прямая <TEX>{"a"}</TEX> проходит через точки <TEX>{"A(-3;-5;1)~"}</TEX>
                            и <TEX>{"B(-3;3;-1)"}</TEX>. Прямая <TEX>{"b"}</TEX> проходит через точки
                            <TEX>{"C(0;-1;0)~"}</TEX> и <TEX>{"D(0;-9;2)"}</TEX>.
                        </div>
                        <div>Найдите <TEX>{"\\rho(a,b)"}</TEX>.</div>
                    </div>,
                    <div answer="1">
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
                tasks: [
                    <div answer="1">
                        Ответ 1.
                    </div>
                ],
                material: <Geogebra name={GEOGERBA.PRISM4} />
            },
            2: {
                name: "Правильная четырёхугольная пирамида",
                tasks: [
                    <div answer="1">
                        Ответ 1.
                    </div>
                ],
                material: <Geogebra name={GEOGERBA.PYRAMID4} />
            },
        },
        2: {
            name: "Треугольные тела",
            1: {
                name: "Правильная треугольная призма",
                tasks: [
                    <div answer="1">
                        Ответ 1.
                    </div>
                ],
                material: <Geogebra name={GEOGERBA.PRISM3} />   
            },
            2: {
                name: "Правильная треугольная пирамида",
                tasks: [
                    <div answer="1">
                        Ответ 1.
                    </div>
                ],
                material: <Geogebra name={GEOGERBA.PYRAMID3} />
            },
        },
        3: {
            name: "Шестиугольные тела",
            1: {
                name: "Правильная шестиугольная призма",
                tasks: [
                    <div answer="1">
                        Ответ 1.
                    </div>
                ],
                material: <Geogebra name={GEOGERBA.PRISM6} />   
            },
            2: {
                name: "Правильная шестиугольная пирамида",
                tasks: [
                    <div answer="1">
                        Ответ 1.
                    </div>
                ],
                material: <Geogebra name={GEOGERBA.PYRAMID6} />
            },
        },
        4: {
            name: "Округлые тела",
            1: {
                name: "Конус",
                tasks: [
                    <div answer="1">
                            Ответ 1.
                        </div>
                ],
                material: <Geogebra name={GEOGERBA.CONE} />
            },
            2: {
                name: "Цилиндр",
                tasks: [
                    <div answer="1">
                            Ответ 1.
                        </div>
                ],
                material: <Geogebra name={GEOGERBA.CYLINDER} />
            },
            3: {
                name: "Шар",
                tasks: [
                    <div answer="1">
                            Ответ 1.
                        </div>
                ],
                material: <Geogebra name={GEOGERBA.SPHERE} />
            },
        },
    },
    4: {
        name: "Задачи стереометрии",
        1: {
            name: "???????",
            1: {
                name: "?????????",
                tasks: [
                    <div answer="1">
                                Ответ 1.
                            </div>
                ]
            }
        }
    }
}