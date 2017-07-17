App.VisualizationRoute = Ember.Route.extend({
    model: function(){
        return {
            isInTimeline: false,
            neurons:[
                {
                    name: 'AVAL',
                    selected: true,
                    model: "hodgkin-huxley",
                    voltage: 15,
                    rate: 0,
                    cameraFrom: [521.7102009152522,  14.129749291145856, -284.18940735037495],
                    cameraTo: [-0.08789644066483719,  0.8469264296731509, 0.14797064277227165, 0.5030850142825832],
                    controlsTarget: [0,-200,0],
                    synapse:['AVAR','AVBL'],
                    voltages:[{"Expt": "1","Run": "0.2","Speed": "20"},
                            {"Expt": "1","Run": "0.6","Speed": "50"},
                            {"Expt": "1","Run": "1.1","Speed": "70"},
                            {"Expt": "1","Run": "1.2","Speed": "20"},
                            {"Expt": "1","Run": "1.6","Speed": "50"},
                            {"Expt": "1","Run": "2.1","Speed": "70"},
                            {"Expt": "1","Run": "2.2","Speed": "20"},
                            {"Expt": "1","Run": "2.6","Speed": "50"},
                            {"Expt": "1","Run": "3.1","Speed": "70"},
                            {"Expt": "1","Run": "3.2","Speed": "20"},
                            {"Expt": "1","Run": "3.6","Speed": "50"},
                            {"Expt": "1","Run": "4.1","Speed": "70"},
                            {"Expt": "1","Run": "5.2","Speed": "20"},
                            {"Expt": "1","Run": "5.6","Speed": "50"},
                            {"Expt": "1","Run": "6.1","Speed": "80"},
                            {"Expt": "1","Run": "6.2","Speed": "20"},
                            {"Expt": "1","Run": "6.6","Speed": "50"},
                            {"Expt": "1","Run": "7.1","Speed": "70"},
                            {"Expt": "1","Run": "7.2","Speed": "20"},
                            {"Expt": "1","Run": "7.6","Speed": "50"},
                            {"Expt": "1","Run": "8.1","Speed": "70"},
                            {"Expt": "1","Run": "8.2","Speed": "20"},
                            {"Expt": "1","Run": "9.6","Speed": "50"},
                            {"Expt": "1","Run": "10.1","Speed": "70"},
                            {"Expt": "1","Run": "10.2","Speed": "20"},
                            {"Expt": "1","Run": "10.6","Speed": "50"},
                            {"Expt": "1","Run": "11.1","Speed": "70"},
                            {"Expt": "1","Run": "11.2","Speed": "10"},
                            {"Expt": "1","Run": "11.6","Speed": "50"},
                            {"Expt": "1","Run": "12.1","Speed": "70"},
                            {"Expt": "1","Run": "12.2","Speed": "20"},
                            {"Expt": "1","Run": "12.6","Speed": "40"},
                            {"Expt": "1","Run": "13.1","Speed": "70"},
                            {"Expt": "1","Run": "13.2","Speed": "20"},
                            {"Expt": "1","Run": "13.6","Speed": "30"},
                            {"Expt": "1","Run": "14.1","Speed": "70"},
                            {"Expt": "1","Run": "15.2","Speed": "10"},
                            {"Expt": "1","Run": "15.6","Speed": "50"},
                            {"Expt": "1","Run": "16.1","Speed": "80"},
                            {"Expt": "1","Run": "16.2","Speed": "20"},
                            {"Expt": "1","Run": "16.6","Speed": "60"},
                            {"Expt": "1","Run": "17.1","Speed": "70"},
                            {"Expt": "1","Run": "17.2","Speed": "20"},
                            {"Expt": "1","Run": "17.6","Speed": "50"},
                            {"Expt": "1","Run": "18.1","Speed": "90"},
                            {"Expt": "1","Run": "18.2","Speed": "20"},
                            {"Expt": "1","Run": "19.6","Speed": "50"},],
                },
                {
                    name: 'AVAR',
                    selected: false,
                    model: "hodgkin-huxley",
                    voltage: 15,
                    rate: 0,
                    cameraFrom: [501.9992788171515,25.574023836901517, -296.79406020378036],
                    cameraTo: [-0.0909241528880451, 0.8538513745320482, 0.15938309844925613, 0.4871012907382462],
                    controlsTarget: [0,-200,0],
                    synapse:['AVAL','AVBR'],
                    voltages:[{"Expt": "1","Run": "0.2","Speed": "20"},
                            {"Expt": "1","Run": "0.6","Speed": "50"},
                            {"Expt": "1","Run": "1.0","Speed": "70"},
                            {"Expt": "1","Run": "1.2","Speed": "20"},
                            {"Expt": "1","Run": "1.6","Speed": "50"},
                            {"Expt": "1","Run": "2.1","Speed": "70"},
                            {"Expt": "1","Run": "2.2","Speed": "20"},
                            {"Expt": "1","Run": "2.8","Speed": "50"},
                            {"Expt": "1","Run": "3.1","Speed": "70"},
                            {"Expt": "1","Run": "3.2","Speed": "20"},
                            {"Expt": "1","Run": "3.6","Speed": "50"},
                            {"Expt": "1","Run": "4.1","Speed": "70"},
                            {"Expt": "1","Run": "5.2","Speed": "20"},
                            {"Expt": "1","Run": "5.8","Speed": "40"},
                            {"Expt": "1","Run": "6.1","Speed": "90"},
                            {"Expt": "1","Run": "6.2","Speed": "20"},
                            {"Expt": "1","Run": "6.6","Speed": "50"},
                            {"Expt": "1","Run": "7.1","Speed": "70"},
                            {"Expt": "1","Run": "7.2","Speed": "20"},
                            {"Expt": "1","Run": "7.6","Speed": "50"},
                            {"Expt": "1","Run": "8.1","Speed": "70"},
                            {"Expt": "1","Run": "8.2","Speed": "20"},
                            {"Expt": "1","Run": "9.6","Speed": "70"},
                            {"Expt": "1","Run": "10.0","Speed": "80"},
                            {"Expt": "1","Run": "10.2","Speed": "20"},
                            {"Expt": "1","Run": "10.6","Speed": "50"},
                            {"Expt": "1","Run": "11.1","Speed": "70"},
                            {"Expt": "1","Run": "11.2","Speed": "10"},
                            {"Expt": "1","Run": "11.6","Speed": "50"},
                            {"Expt": "1","Run": "12.1","Speed": "70"},
                            {"Expt": "1","Run": "12.2","Speed": "20"},
                            {"Expt": "1","Run": "12.6","Speed": "30"},
                            {"Expt": "1","Run": "13.1","Speed": "70"},
                            {"Expt": "1","Run": "13.2","Speed": "20"},
                            {"Expt": "1","Run": "13.6","Speed": "30"},
                            {"Expt": "1","Run": "14.1","Speed": "70"},
                            {"Expt": "1","Run": "15.2","Speed": "10"},
                            {"Expt": "1","Run": "15.6","Speed": "50"},
                            {"Expt": "1","Run": "16.1","Speed": "80"},
                            {"Expt": "1","Run": "16.2","Speed": "20"},
                            {"Expt": "1","Run": "16.6","Speed": "60"},
                            {"Expt": "1","Run": "17.1","Speed": "70"},
                            {"Expt": "1","Run": "17.2","Speed": "20"},
                            {"Expt": "1","Run": "17.8","Speed": "20"},
                            {"Expt": "1","Run": "18.1","Speed": "90"},
                            {"Expt": "1","Run": "18.2","Speed": "20"},
                            {"Expt": "1","Run": "19.6","Speed": "50"},],
                },
                {
                    name: 'AVBL',
                    selected: true,
                    model: "hodgkin-huxley",
                    voltage: 25,
                    rate: 0,
                    cameraFrom: [506.72291306798263,-7.43060809220939, -235.09636883766785],
                    cameraTo: [0.06125427000227153, 0.6270754586394507, -0.04956500991839652, 0.7749629703066084],
                    controlsTarget: [112.30094573304063, 56.72471509131366, -319.2401076552156],
                    synapse:['AVAL','AVBR','AVM'],
                    voltages:[{"Expt": "1","Run": "0.2","Speed": "20"},
                            {"Expt": "1","Run": "0.6","Speed": "50"},
                            {"Expt": "1","Run": "1.0","Speed": "70"},
                            {"Expt": "1","Run": "1.2","Speed": "20"},
                            {"Expt": "1","Run": "1.8","Speed": "40"},
                            {"Expt": "1","Run": "2.1","Speed": "70"},
                            {"Expt": "1","Run": "2.2","Speed": "20"},
                            {"Expt": "1","Run": "2.8","Speed": "80"},
                            {"Expt": "1","Run": "3.1","Speed": "90"},
                            {"Expt": "1","Run": "3.2","Speed": "10"},
                            {"Expt": "1","Run": "3.6","Speed": "50"},
                            {"Expt": "1","Run": "4.1","Speed": "70"},
                            {"Expt": "1","Run": "5.2","Speed": "20"},
                            {"Expt": "1","Run": "5.8","Speed": "40"},
                            {"Expt": "1","Run": "6.1","Speed": "90"},
                            {"Expt": "1","Run": "6.2","Speed": "20"},
                            {"Expt": "1","Run": "6.6","Speed": "50"},
                            {"Expt": "1","Run": "7.1","Speed": "70"},
                            {"Expt": "1","Run": "7.2","Speed": "5"},
                            {"Expt": "1","Run": "7.6","Speed": "50"},
                            {"Expt": "1","Run": "8.1","Speed": "70"},
                            {"Expt": "1","Run": "8.2","Speed": "20"},
                            {"Expt": "1","Run": "9.6","Speed": "70"},
                            {"Expt": "1","Run": "10.0","Speed": "80"},
                            {"Expt": "1","Run": "10.2","Speed": "20"},
                            {"Expt": "1","Run": "10.6","Speed": "50"},
                            {"Expt": "1","Run": "11.1","Speed": "70"},
                            {"Expt": "1","Run": "11.2","Speed": "10"},
                            {"Expt": "1","Run": "11.8","Speed": "55"},
                            {"Expt": "1","Run": "12.1","Speed": "70"},
                            {"Expt": "1","Run": "12.4","Speed": "20"},
                            {"Expt": "1","Run": "12.6","Speed": "40"},
                            {"Expt": "1","Run": "13.1","Speed": "70"},
                            {"Expt": "1","Run": "13.2","Speed": "20"},
                            {"Expt": "1","Run": "13.7","Speed": "30"},
                            {"Expt": "1","Run": "14.1","Speed": "70"},
                            {"Expt": "1","Run": "15.2","Speed": "10"},
                            {"Expt": "1","Run": "15.6","Speed": "50"},
                            {"Expt": "1","Run": "16.1","Speed": "80"},
                            {"Expt": "1","Run": "16.3","Speed": "20"},
                            {"Expt": "1","Run": "16.6","Speed": "60"},
                            {"Expt": "1","Run": "17.1","Speed": "70"},
                            {"Expt": "1","Run": "17.2","Speed": "20"},
                            {"Expt": "1","Run": "17.8","Speed": "20"},
                            {"Expt": "1","Run": "18.1","Speed": "90"},
                            {"Expt": "1","Run": "18.2","Speed": "20"},
                            {"Expt": "1","Run": "19.6","Speed": "50"},],
                },
                {
                    name: 'AVBR',
                    selected: true,
                    model: "hodgkin-huxley",
                    voltage: 15,
                    rate: 0,
                    cameraFrom: [485.7900666539883, 13.813774029969522, -281.361767372311],
                    cameraTo: [-0.09036711287128507, 0.8520670279891327, 0.15676907995080278, 0.49116089369417615],
                    controlsTarget: [0,-200,0],
                    synapse:['AVAR','AVBL','AVM'],
                    voltages:[{"Expt": "1","Run": "0.2","Speed": "20"},
                            {"Expt": "1","Run": "0.6","Speed": "50"},
                            {"Expt": "1","Run": "1.0","Speed": "70"},
                            {"Expt": "1","Run": "1.2","Speed": "20"},
                            {"Expt": "1","Run": "1.8","Speed": "40"},
                            {"Expt": "1","Run": "2.1","Speed": "70"},
                            {"Expt": "1","Run": "2.2","Speed": "20"},
                            {"Expt": "1","Run": "2.8","Speed": "80"},
                            {"Expt": "1","Run": "3.1","Speed": "90"},
                            {"Expt": "1","Run": "3.2","Speed": "10"},
                            {"Expt": "1","Run": "3.8","Speed": "50"},
                            {"Expt": "1","Run": "4.5","Speed": "60"},
                            {"Expt": "1","Run": "5.0","Speed": "20"},
                            {"Expt": "1","Run": "5.8","Speed": "40"},
                            {"Expt": "1","Run": "6.1","Speed": "90"},
                            {"Expt": "1","Run": "6.2","Speed": "20"},
                            {"Expt": "1","Run": "6.6","Speed": "50"},
                            {"Expt": "1","Run": "7.1","Speed": "70"},
                            {"Expt": "1","Run": "7.2","Speed": "5"},
                            {"Expt": "1","Run": "7.6","Speed": "50"},
                            {"Expt": "1","Run": "8.1","Speed": "70"},
                            {"Expt": "1","Run": "8.2","Speed": "20"},
                            {"Expt": "1","Run": "9.6","Speed": "80"},
                            {"Expt": "1","Run": "10.1","Speed": "80"},
                            {"Expt": "1","Run": "10.2","Speed": "20"},
                            {"Expt": "1","Run": "10.6","Speed": "50"},
                            {"Expt": "1","Run": "11.1","Speed": "70"},
                            {"Expt": "1","Run": "11.2","Speed": "10"},
                            {"Expt": "1","Run": "11.8","Speed": "55"},
                            {"Expt": "1","Run": "12.1","Speed": "70"},
                            {"Expt": "1","Run": "12.4","Speed": "20"},
                            {"Expt": "1","Run": "12.8","Speed": "60"},
                            {"Expt": "1","Run": "13.0","Speed": "70"},
                            {"Expt": "1","Run": "13.2","Speed": "20"},
                            {"Expt": "1","Run": "13.7","Speed": "30"},
                            {"Expt": "1","Run": "14.1","Speed": "70"},
                            {"Expt": "1","Run": "15.4","Speed": "5"},
                            {"Expt": "1","Run": "15.6","Speed": "50"},
                            {"Expt": "1","Run": "16.1","Speed": "80"},
                            {"Expt": "1","Run": "16.3","Speed": "20"},
                            {"Expt": "1","Run": "16.6","Speed": "60"},
                            {"Expt": "1","Run": "17.1","Speed": "70"},
                            {"Expt": "1","Run": "17.2","Speed": "20"},
                            {"Expt": "1","Run": "17.8","Speed": "20"},
                            {"Expt": "1","Run": "18.1","Speed": "90"},
                            {"Expt": "1","Run": "18.2","Speed": "10"},
                            {"Expt": "1","Run": "19.9","Speed": "90"},],
                },
                {
                    name: 'CANL',
                    selected: true,
                    model: "hodgkin-huxley",
                    voltage: 15,
                    rate: 0,
                    cameraFrom: [241.0565521538326, 43.33480766712837, -15.491975405826171],
                    cameraTo: [-0.08541704943390985, -0.7771728349184317, -0.10811384062222146, 0.6140176731229516],
                    controlsTarget: [279.0947571492519, 32.24183632769682, -6.445509225364905],
                    synapse:['CANR'],
                    voltages:[{"Expt": "1","Run": "0.2","Speed": "6"},
                            {"Expt": "1","Run": "0.6","Speed": "50"},
                            {"Expt": "1","Run": "1.1","Speed": "90"},
                            {"Expt": "1","Run": "1.2","Speed": "20"},
                            {"Expt": "1","Run": "1.8","Speed": "40"},
                            {"Expt": "1","Run": "2.1","Speed": "70"},
                            {"Expt": "1","Run": "2.2","Speed": "20"},
                            {"Expt": "1","Run": "2.8","Speed": "80"},
                            {"Expt": "1","Run": "3.1","Speed": "90"},
                            {"Expt": "1","Run": "3.2","Speed": "10"},
                            {"Expt": "1","Run": "3.9","Speed": "40"},
                            {"Expt": "1","Run": "4.5","Speed": "60"},
                            {"Expt": "1","Run": "5.2","Speed": "20"},
                            {"Expt": "1","Run": "5.8","Speed": "80"},
                            {"Expt": "1","Run": "6.1","Speed": "90"},
                            {"Expt": "1","Run": "6.2","Speed": "5"},
                            {"Expt": "1","Run": "6.6","Speed": "50"},
                            {"Expt": "1","Run": "7.1","Speed": "70"},
                            {"Expt": "1","Run": "7.4","Speed": "5"},
                            {"Expt": "1","Run": "7.6","Speed": "50"},
                            {"Expt": "1","Run": "8.1","Speed": "70"},
                            {"Expt": "1","Run": "8.4","Speed": "30"},
                            {"Expt": "1","Run": "9.6","Speed": "80"},
                            {"Expt": "1","Run": "10.1","Speed": "80"},
                            {"Expt": "1","Run": "10.2","Speed": "20"},
                            {"Expt": "1","Run": "10.8","Speed": "40"},
                            {"Expt": "1","Run": "11.1","Speed": "70"},
                            {"Expt": "1","Run": "11.2","Speed": "10"},
                            {"Expt": "1","Run": "11.8","Speed": "55"},
                            {"Expt": "1","Run": "12.1","Speed": "70"},
                            {"Expt": "1","Run": "12.4","Speed": "20"},
                            {"Expt": "1","Run": "12.8","Speed": "60"},
                            {"Expt": "1","Run": "13.0","Speed": "70"},
                            {"Expt": "1","Run": "13.2","Speed": "20"},
                            {"Expt": "1","Run": "13.7","Speed": "30"},
                            {"Expt": "1","Run": "14.1","Speed": "70"},
                            {"Expt": "1","Run": "15.4","Speed": "5"},
                            {"Expt": "1","Run": "15.6","Speed": "50"},
                            {"Expt": "1","Run": "16.1","Speed": "80"},
                            {"Expt": "1","Run": "16.3","Speed": "10"},
                            {"Expt": "1","Run": "16.6","Speed": "60"},
                            {"Expt": "1","Run": "17.1","Speed": "70"},
                            {"Expt": "1","Run": "17.2","Speed": "20"},
                            {"Expt": "1","Run": "17.8","Speed": "20"},
                            {"Expt": "1","Run": "18.1","Speed": "90"},
                            {"Expt": "1","Run": "18.8","Speed": "70"},
                            {"Expt": "1","Run": "19.9","Speed": "90"},],
                },
                {
                    name: 'CANR',
                    selected: false,
                    model: "integrate & fire",
                    voltage: 30,
                    rate: 0,
                    cameraFrom: [656.0554475014126, 102.17108526345083, 114.21478923567805],
                    cameraTo: [-0.16178110052175368, 0.6290737957425521, 0.13604947944927648, 0.7480532020918793],
                    controlsTarget: [0,-200,0],
                    synapse:['CANL'],
                    voltages:[{"Expt": "1","Run": "0.2","Speed": "6"},
                            {"Expt": "1","Run": "0.6","Speed": "50"},
                            {"Expt": "1","Run": "1.1","Speed": "90"},
                            {"Expt": "1","Run": "1.2","Speed": "20"},
                            {"Expt": "1","Run": "1.8","Speed": "40"},
                            {"Expt": "1","Run": "2.1","Speed": "70"},
                            {"Expt": "1","Run": "2.2","Speed": "20"},
                            {"Expt": "1","Run": "2.8","Speed": "80"},
                            {"Expt": "1","Run": "3.1","Speed": "90"},
                            {"Expt": "1","Run": "3.2","Speed": "10"},
                            {"Expt": "1","Run": "3.9","Speed": "40"},
                            {"Expt": "1","Run": "4.5","Speed": "60"},
                            {"Expt": "1","Run": "5.2","Speed": "20"},
                            {"Expt": "1","Run": "5.8","Speed": "80"},
                            {"Expt": "1","Run": "6.1","Speed": "90"},
                            {"Expt": "1","Run": "6.2","Speed": "5"},
                            {"Expt": "1","Run": "6.6","Speed": "50"},
                            {"Expt": "1","Run": "7.1","Speed": "70"},
                            {"Expt": "1","Run": "7.4","Speed": "5"},
                            {"Expt": "1","Run": "7.6","Speed": "50"},
                            {"Expt": "1","Run": "8.1","Speed": "70"},
                            {"Expt": "1","Run": "8.4","Speed": "30"},
                            {"Expt": "1","Run": "9.6","Speed": "80"},
                            {"Expt": "1","Run": "10.1","Speed": "80"},
                            {"Expt": "1","Run": "10.2","Speed": "20"},
                            {"Expt": "1","Run": "10.8","Speed": "40"},
                            {"Expt": "1","Run": "11.1","Speed": "70"},
                            {"Expt": "1","Run": "11.2","Speed": "10"},
                            {"Expt": "1","Run": "11.8","Speed": "55"},
                            {"Expt": "1","Run": "12.1","Speed": "70"},
                            {"Expt": "1","Run": "12.4","Speed": "20"},
                            {"Expt": "1","Run": "12.8","Speed": "60"},
                            {"Expt": "1","Run": "13.0","Speed": "70"},
                            {"Expt": "1","Run": "13.2","Speed": "20"},
                            {"Expt": "1","Run": "13.7","Speed": "30"},
                            {"Expt": "1","Run": "14.1","Speed": "70"},
                            {"Expt": "1","Run": "15.4","Speed": "5"},
                            {"Expt": "1","Run": "15.6","Speed": "50"},
                            {"Expt": "1","Run": "16.1","Speed": "80"},
                            {"Expt": "1","Run": "16.3","Speed": "10"},
                            {"Expt": "1","Run": "16.6","Speed": "60"},
                            {"Expt": "1","Run": "17.1","Speed": "70"},
                            {"Expt": "1","Run": "17.2","Speed": "20"},
                            {"Expt": "1","Run": "17.8","Speed": "20"},
                            {"Expt": "1","Run": "18.1","Speed": "90"},
                            {"Expt": "1","Run": "18.8","Speed": "70"},
                            {"Expt": "1","Run": "19.9","Speed": "90"},],
                },
                {
                    name: 'AVM',
                    selected: true,
                    model: "hodgkin-huxley",
                    voltage: 45,
                    rate: 0,
                    cameraFrom: [561.2708201758455, 22.36639018342369, -41.17990243007178],
                    cameraTo: [-0.06714474571048441, 0.6722539257962171, 0.06143732009541504, 0.7347051925690933],
                    controlsTarget: [-100,-100,-100],
                    synapse:['AVAR','AVBL','AVAL','AVBR'],
                    voltages:[{"Expt": "1","Run": "0.2","Speed": "20"},
                            {"Expt": "1","Run": "0.6","Speed": "50"},
                            {"Expt": "1","Run": "1.0","Speed": "70"},
                            {"Expt": "1","Run": "1.2","Speed": "20"},
                            {"Expt": "1","Run": "1.8","Speed": "40"},
                            {"Expt": "1","Run": "2.1","Speed": "70"},
                            {"Expt": "1","Run": "2.2","Speed": "20"},
                            {"Expt": "1","Run": "2.8","Speed": "80"},
                            {"Expt": "1","Run": "3.1","Speed": "90"},
                            {"Expt": "1","Run": "3.2","Speed": "10"},
                            {"Expt": "1","Run": "3.6","Speed": "50"},
                            {"Expt": "1","Run": "4.1","Speed": "70"},
                            {"Expt": "1","Run": "5.2","Speed": "20"},
                            {"Expt": "1","Run": "5.8","Speed": "40"},
                            {"Expt": "1","Run": "6.1","Speed": "90"},
                            {"Expt": "1","Run": "6.2","Speed": "20"},
                            {"Expt": "1","Run": "6.6","Speed": "50"},
                            {"Expt": "1","Run": "7.1","Speed": "70"},
                            {"Expt": "1","Run": "7.2","Speed": "5"},
                            {"Expt": "1","Run": "7.6","Speed": "50"},
                            {"Expt": "1","Run": "8.1","Speed": "70"},
                            {"Expt": "1","Run": "8.2","Speed": "20"},
                            {"Expt": "1","Run": "9.6","Speed": "70"},
                            {"Expt": "1","Run": "10.0","Speed": "80"},
                            {"Expt": "1","Run": "10.2","Speed": "20"},
                            {"Expt": "1","Run": "10.6","Speed": "50"},
                            {"Expt": "1","Run": "11.1","Speed": "70"},
                            {"Expt": "1","Run": "11.2","Speed": "10"},
                            {"Expt": "1","Run": "11.8","Speed": "55"},
                            {"Expt": "1","Run": "12.1","Speed": "70"},
                            {"Expt": "1","Run": "12.4","Speed": "20"},
                            {"Expt": "1","Run": "12.6","Speed": "40"},
                            {"Expt": "1","Run": "13.1","Speed": "70"},
                            {"Expt": "1","Run": "13.2","Speed": "20"},
                            {"Expt": "1","Run": "13.7","Speed": "30"},
                            {"Expt": "1","Run": "14.1","Speed": "70"},
                            {"Expt": "1","Run": "15.2","Speed": "10"},
                            {"Expt": "1","Run": "15.6","Speed": "50"},
                            {"Expt": "1","Run": "16.1","Speed": "80"},
                            {"Expt": "1","Run": "16.3","Speed": "20"},
                            {"Expt": "1","Run": "16.6","Speed": "60"},
                            {"Expt": "1","Run": "17.1","Speed": "70"},
                            {"Expt": "1","Run": "17.2","Speed": "20"},
                            {"Expt": "1","Run": "17.8","Speed": "20"},
                            {"Expt": "1","Run": "18.1","Speed": "90"},
                            {"Expt": "1","Run": "18.2","Speed": "20"},
                            {"Expt": "1","Run": "19.6","Speed": "50"},],
                },
                {
                    name: 'ALML',
                    selected: true,
                    model: "integrate & fire",
                    voltage: 15,
                    rate: 0, 
                    cameraFrom: [255.9707878509312,92.93346591989709,-31.238937290687893],
                    cameraTo: [-0.19595853271550415, -0.5329983521401999, -0.12846539472536195, 0.8130249931592335],
                    controlsTarget: [267.7788048862411,86.34361480319055,-36.37427678832304],
                    synapse:['ALMR'],
                    voltages:[{"Expt": "1","Run": "0.2","Speed": "20"},
                            {"Expt": "1","Run": "0.6","Speed": "50"},
                            {"Expt": "1","Run": "1.0","Speed": "70"},
                            {"Expt": "1","Run": "1.2","Speed": "20"},
                            {"Expt": "1","Run": "1.6","Speed": "50"},
                            {"Expt": "1","Run": "2.1","Speed": "70"},
                            {"Expt": "1","Run": "2.2","Speed": "20"},
                            {"Expt": "1","Run": "2.8","Speed": "50"},
                            {"Expt": "1","Run": "3.1","Speed": "70"},
                            {"Expt": "1","Run": "3.2","Speed": "20"},
                            {"Expt": "1","Run": "3.6","Speed": "50"},
                            {"Expt": "1","Run": "4.1","Speed": "70"},
                            {"Expt": "1","Run": "5.2","Speed": "20"},
                            {"Expt": "1","Run": "5.8","Speed": "40"},
                            {"Expt": "1","Run": "6.1","Speed": "90"},
                            {"Expt": "1","Run": "6.2","Speed": "20"},
                            {"Expt": "1","Run": "6.6","Speed": "50"},
                            {"Expt": "1","Run": "7.1","Speed": "70"},
                            {"Expt": "1","Run": "7.2","Speed": "20"},
                            {"Expt": "1","Run": "7.6","Speed": "50"},
                            {"Expt": "1","Run": "8.1","Speed": "70"},
                            {"Expt": "1","Run": "8.2","Speed": "20"},
                            {"Expt": "1","Run": "9.6","Speed": "70"},
                            {"Expt": "1","Run": "10.0","Speed": "80"},
                            {"Expt": "1","Run": "10.2","Speed": "20"},
                            {"Expt": "1","Run": "10.6","Speed": "50"},
                            {"Expt": "1","Run": "11.1","Speed": "70"},
                            {"Expt": "1","Run": "11.2","Speed": "10"},
                            {"Expt": "1","Run": "11.6","Speed": "50"},
                            {"Expt": "1","Run": "12.1","Speed": "70"},
                            {"Expt": "1","Run": "12.2","Speed": "20"},
                            {"Expt": "1","Run": "12.6","Speed": "30"},
                            {"Expt": "1","Run": "13.1","Speed": "70"},
                            {"Expt": "1","Run": "13.2","Speed": "20"},
                            {"Expt": "1","Run": "13.6","Speed": "30"},
                            {"Expt": "1","Run": "14.1","Speed": "70"},
                            {"Expt": "1","Run": "15.2","Speed": "10"},
                            {"Expt": "1","Run": "15.6","Speed": "50"},
                            {"Expt": "1","Run": "16.1","Speed": "80"},
                            {"Expt": "1","Run": "16.2","Speed": "20"},
                            {"Expt": "1","Run": "16.6","Speed": "60"},
                            {"Expt": "1","Run": "17.1","Speed": "70"},
                            {"Expt": "1","Run": "17.2","Speed": "20"},
                            {"Expt": "1","Run": "17.8","Speed": "20"},
                            {"Expt": "1","Run": "18.1","Speed": "90"},
                            {"Expt": "1","Run": "18.2","Speed": "20"},
                            {"Expt": "1","Run": "19.6","Speed": "50"},],
                },
                {
                    name: 'ALMR',
                    selected: true,
                    model: "hodgkin-huxley",
                    voltage: 15,
                    rate: 0,
                    cameraFrom: [627.9858975492932, 47.742901118068716, -90.3490994282734],
                    cameraTo: [-0.10025015097181744, 0.646649340050789, 0.08629395786443003, 0.7512309235183477],
                    controlsTarget: [-100,-100,-100],
                    synapse:['ALML'],
                    voltages:[{"Expt": "1","Run": "0.2","Speed": "20"},
                            {"Expt": "1","Run": "0.6","Speed": "50"},
                            {"Expt": "1","Run": "1.1","Speed": "70"},
                            {"Expt": "1","Run": "1.2","Speed": "20"},
                            {"Expt": "1","Run": "1.6","Speed": "50"},
                            {"Expt": "1","Run": "2.1","Speed": "70"},
                            {"Expt": "1","Run": "2.2","Speed": "20"},
                            {"Expt": "1","Run": "2.6","Speed": "50"},
                            {"Expt": "1","Run": "3.1","Speed": "70"},
                            {"Expt": "1","Run": "3.2","Speed": "20"},
                            {"Expt": "1","Run": "3.6","Speed": "50"},
                            {"Expt": "1","Run": "4.1","Speed": "70"},
                            {"Expt": "1","Run": "5.2","Speed": "20"},
                            {"Expt": "1","Run": "5.6","Speed": "50"},
                            {"Expt": "1","Run": "6.1","Speed": "80"},
                            {"Expt": "1","Run": "6.2","Speed": "20"},
                            {"Expt": "1","Run": "6.6","Speed": "50"},
                            {"Expt": "1","Run": "7.1","Speed": "70"},
                            {"Expt": "1","Run": "7.2","Speed": "20"},
                            {"Expt": "1","Run": "7.6","Speed": "50"},
                            {"Expt": "1","Run": "8.1","Speed": "70"},
                            {"Expt": "1","Run": "8.2","Speed": "20"},
                            {"Expt": "1","Run": "9.6","Speed": "50"},
                            {"Expt": "1","Run": "10.1","Speed": "70"},
                            {"Expt": "1","Run": "10.2","Speed": "20"},
                            {"Expt": "1","Run": "10.6","Speed": "50"},
                            {"Expt": "1","Run": "11.1","Speed": "70"},
                            {"Expt": "1","Run": "11.2","Speed": "10"},
                            {"Expt": "1","Run": "11.6","Speed": "50"},
                            {"Expt": "1","Run": "12.1","Speed": "70"},
                            {"Expt": "1","Run": "12.2","Speed": "20"},
                            {"Expt": "1","Run": "12.6","Speed": "40"},
                            {"Expt": "1","Run": "13.1","Speed": "70"},
                            {"Expt": "1","Run": "13.2","Speed": "20"},
                            {"Expt": "1","Run": "13.6","Speed": "30"},
                            {"Expt": "1","Run": "14.1","Speed": "70"},
                            {"Expt": "1","Run": "15.2","Speed": "10"},
                            {"Expt": "1","Run": "15.6","Speed": "50"},
                            {"Expt": "1","Run": "16.1","Speed": "80"},
                            {"Expt": "1","Run": "16.2","Speed": "20"},
                            {"Expt": "1","Run": "16.6","Speed": "60"},
                            {"Expt": "1","Run": "17.1","Speed": "70"},
                            {"Expt": "1","Run": "17.2","Speed": "20"},
                            {"Expt": "1","Run": "17.6","Speed": "50"},
                            {"Expt": "1","Run": "18.1","Speed": "90"},
                            {"Expt": "1","Run": "18.2","Speed": "20"},
                            {"Expt": "1","Run": "19.6","Speed": "50"},],
                }]
        }
    },
  renderTemplate: function() {
    this.render( 'visualizationDown', {into: 'experiment', outlet: 'timeline'});
    this.render( 'visualizationNeurons', {into: 'experiment', outlet: 'properties'});
  }
});