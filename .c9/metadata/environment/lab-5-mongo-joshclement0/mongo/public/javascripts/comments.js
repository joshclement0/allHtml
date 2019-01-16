{"filter":false,"title":"comments.js","tooltip":"/lab-5-mongo-joshclement0/mongo/public/javascripts/comments.js","ace":{"folds":[],"scrolltop":276.578125,"scrollleft":0,"selection":{"start":{"row":64,"column":32},"end":{"row":64,"column":32},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":3,"state":"start","mode":"ace/mode/javascript"}},"hash":"a2443237a74f7e62c6a28da3abe0804ea1b21a33","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":23,"column":11},"end":{"row":24,"column":0},"action":"insert","lines":["",""],"id":355},{"start":{"row":24,"column":0},"end":{"row":24,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":24,"column":8},"end":{"row":33,"column":11},"action":"insert","lines":["$.getJSON('comment', function(data) {","            console.log(data);","            var everything = \"<ul>\";","            for(var comment in data) {","                var com = data[comment];","                everything += \"<li>\" + com.Name + \":: \" + com.Comment + \"</li>\";","            }","            everything += \"</ul>\";","            $(\"#comments\").html(everything);","        });"],"id":356}],[{"start":{"row":2,"column":4},"end":{"row":9,"column":7},"action":"remove","lines":["$(\"#start\").click(function(){","        var buttons='<button id=\"postComment\">Post Comment</button>'+","            '<button id=\"getComments\">Get Comments</button>'+","            '<button id=\"deleteComments\">Delete All</button>'+","            '<button id=\"findUser\">Find this User</button>'+","            '<button id=\"deleteAll\">Delete All</button>';","        $(\"#menu\").html(buttons);","    });"],"id":357},{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"remove","lines":["    "]},{"start":{"row":1,"column":29},"end":{"row":2,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":1,"column":29},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":358},{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"insert","lines":["    "]},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["$"]}],[{"start":{"row":2,"column":5},"end":{"row":2,"column":7},"action":"insert","lines":["()"],"id":359}],[{"start":{"row":2,"column":6},"end":{"row":2,"column":8},"action":"insert","lines":["\"\""],"id":360}],[{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["#"],"id":361},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["n"]},{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["a"]},{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["m"]},{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["."],"id":362},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["k"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["e"]},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["y"]}],[{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["u"],"id":363},{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["p"]}],[{"start":{"row":2,"column":20},"end":{"row":2,"column":22},"action":"insert","lines":["()"],"id":364}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":["f"],"id":365},{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["u"]},{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["n"]},{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["c"]},{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["t"]},{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":["i"]},{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["o"]},{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"insert","lines":["n"]}],[{"start":{"row":2,"column":29},"end":{"row":2,"column":31},"action":"insert","lines":["()"],"id":366}],[{"start":{"row":2,"column":31},"end":{"row":2,"column":33},"action":"insert","lines":["{}"],"id":367}],[{"start":{"row":2,"column":32},"end":{"row":4,"column":4},"action":"insert","lines":["","        ","    "],"id":368}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["v"],"id":369},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["a"]},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":[" "],"id":370},{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["n"]},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["a"]},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["m"]},{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["e"]},{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["="]}],[{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["$"],"id":371}],[{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["\""],"id":372},{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["N"]}],[{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"remove","lines":["N"],"id":373}],[{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["#"],"id":374},{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"insert","lines":["n"]},{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"insert","lines":["a"]},{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"insert","lines":["m"]},{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"insert","lines":["e"]},{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["\""]}],[{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["("],"id":375}],[{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":[")"],"id":376},{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["."]},{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["v"]},{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["a"]},{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":["l"]}],[{"start":{"row":3,"column":31},"end":{"row":3,"column":33},"action":"insert","lines":["()"],"id":377}],[{"start":{"row":3,"column":33},"end":{"row":3,"column":34},"action":"insert","lines":[";"],"id":378}],[{"start":{"row":3,"column":34},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":379},{"start":{"row":4,"column":0},"end":{"row":4,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":5,"column":6},"end":{"row":5,"column":7},"action":"insert","lines":[";"],"id":380}],[{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["$"],"id":381}],[{"start":{"row":4,"column":8},"end":{"row":4,"column":10},"action":"insert","lines":["()"],"id":382}],[{"start":{"row":4,"column":9},"end":{"row":4,"column":11},"action":"insert","lines":["\"\""],"id":383}],[{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["#"],"id":384},{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["u"]},{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["s"]}],[{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":["e"],"id":385},{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":["r"]}],[{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["N"],"id":386}],[{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"remove","lines":["N"],"id":387},{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"remove","lines":["r"]},{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"remove","lines":["e"]},{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"remove","lines":["s"]},{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"remove","lines":["u"]}],[{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["U"],"id":388},{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["S"]}],[{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"remove","lines":["S"],"id":389}],[{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["s"],"id":390}],[{"start":{"row":4,"column":11},"end":{"row":4,"column":13},"action":"remove","lines":["Us"],"id":391},{"start":{"row":4,"column":11},"end":{"row":4,"column":19},"action":"insert","lines":["UserName"]}],[{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":["."],"id":392},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":["h"]},{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["t"]},{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":["m"]},{"start":{"row":4,"column":25},"end":{"row":4,"column":26},"action":"insert","lines":["l"]}],[{"start":{"row":4,"column":26},"end":{"row":4,"column":28},"action":"insert","lines":["()"],"id":393}],[{"start":{"row":4,"column":27},"end":{"row":4,"column":29},"action":"insert","lines":["\"\""],"id":394}],[{"start":{"row":4,"column":28},"end":{"row":4,"column":29},"action":"insert","lines":["C"],"id":395},{"start":{"row":4,"column":29},"end":{"row":4,"column":30},"action":"insert","lines":["o"]},{"start":{"row":4,"column":30},"end":{"row":4,"column":31},"action":"insert","lines":["m"]},{"start":{"row":4,"column":31},"end":{"row":4,"column":32},"action":"insert","lines":["m"]},{"start":{"row":4,"column":32},"end":{"row":4,"column":33},"action":"insert","lines":["e"]},{"start":{"row":4,"column":33},"end":{"row":4,"column":34},"action":"insert","lines":["n"]},{"start":{"row":4,"column":34},"end":{"row":4,"column":35},"action":"insert","lines":["t"]}],[{"start":{"row":4,"column":35},"end":{"row":4,"column":36},"action":"insert","lines":["i"],"id":396},{"start":{"row":4,"column":36},"end":{"row":4,"column":37},"action":"insert","lines":["n"]},{"start":{"row":4,"column":37},"end":{"row":4,"column":38},"action":"insert","lines":["g"]}],[{"start":{"row":4,"column":38},"end":{"row":4,"column":39},"action":"insert","lines":[" "],"id":397},{"start":{"row":4,"column":39},"end":{"row":4,"column":40},"action":"insert","lines":["a"]},{"start":{"row":4,"column":40},"end":{"row":4,"column":41},"action":"insert","lines":["s"]},{"start":{"row":4,"column":41},"end":{"row":4,"column":42},"action":"insert","lines":[":"]}],[{"start":{"row":4,"column":42},"end":{"row":4,"column":43},"action":"insert","lines":[" "],"id":398}],[{"start":{"row":4,"column":44},"end":{"row":4,"column":45},"action":"insert","lines":["+"],"id":399},{"start":{"row":4,"column":45},"end":{"row":4,"column":46},"action":"insert","lines":["n"]},{"start":{"row":4,"column":46},"end":{"row":4,"column":47},"action":"insert","lines":["a"]},{"start":{"row":4,"column":47},"end":{"row":4,"column":48},"action":"insert","lines":["m"]},{"start":{"row":4,"column":48},"end":{"row":4,"column":49},"action":"insert","lines":["e"]}],[{"start":{"row":4,"column":50},"end":{"row":4,"column":51},"action":"insert","lines":[";"],"id":400}],[{"start":{"row":29,"column":11},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":401},{"start":{"row":30,"column":0},"end":{"row":30,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":30,"column":8},"end":{"row":30,"column":9},"action":"insert","lines":["$"],"id":402}],[{"start":{"row":30,"column":9},"end":{"row":30,"column":10},"action":"insert","lines":["#"],"id":403}],[{"start":{"row":30,"column":9},"end":{"row":30,"column":10},"action":"remove","lines":["#"],"id":404}],[{"start":{"row":30,"column":9},"end":{"row":30,"column":11},"action":"insert","lines":["()"],"id":405}],[{"start":{"row":30,"column":10},"end":{"row":30,"column":11},"action":"insert","lines":["#"],"id":406}],[{"start":{"row":30,"column":10},"end":{"row":30,"column":11},"action":"remove","lines":["#"],"id":407}],[{"start":{"row":30,"column":10},"end":{"row":30,"column":12},"action":"insert","lines":["\"\""],"id":408}],[{"start":{"row":30,"column":11},"end":{"row":30,"column":12},"action":"insert","lines":["#"],"id":409},{"start":{"row":30,"column":12},"end":{"row":30,"column":13},"action":"insert","lines":["c"]},{"start":{"row":30,"column":13},"end":{"row":30,"column":14},"action":"insert","lines":["o"]},{"start":{"row":30,"column":14},"end":{"row":30,"column":15},"action":"insert","lines":["m"]}],[{"start":{"row":30,"column":15},"end":{"row":30,"column":16},"action":"insert","lines":["m"],"id":410}],[{"start":{"row":30,"column":12},"end":{"row":30,"column":16},"action":"remove","lines":["comm"],"id":411},{"start":{"row":30,"column":12},"end":{"row":30,"column":19},"action":"insert","lines":["comment"]}],[{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"insert","lines":["."],"id":412},{"start":{"row":30,"column":22},"end":{"row":30,"column":23},"action":"insert","lines":["h"]},{"start":{"row":30,"column":23},"end":{"row":30,"column":24},"action":"insert","lines":["t"]},{"start":{"row":30,"column":24},"end":{"row":30,"column":25},"action":"insert","lines":["m"]},{"start":{"row":30,"column":25},"end":{"row":30,"column":26},"action":"insert","lines":["l"]}],[{"start":{"row":30,"column":25},"end":{"row":30,"column":26},"action":"remove","lines":["l"],"id":413},{"start":{"row":30,"column":24},"end":{"row":30,"column":25},"action":"remove","lines":["m"]},{"start":{"row":30,"column":23},"end":{"row":30,"column":24},"action":"remove","lines":["t"]},{"start":{"row":30,"column":22},"end":{"row":30,"column":23},"action":"remove","lines":["h"]}],[{"start":{"row":30,"column":22},"end":{"row":30,"column":23},"action":"insert","lines":["v"],"id":414},{"start":{"row":30,"column":23},"end":{"row":30,"column":24},"action":"insert","lines":["a"]},{"start":{"row":30,"column":24},"end":{"row":30,"column":25},"action":"insert","lines":["l"]}],[{"start":{"row":30,"column":25},"end":{"row":30,"column":27},"action":"insert","lines":["()"],"id":415}],[{"start":{"row":30,"column":26},"end":{"row":30,"column":28},"action":"insert","lines":["\"\""],"id":416}],[{"start":{"row":30,"column":29},"end":{"row":30,"column":30},"action":"insert","lines":[";"],"id":417}],[{"start":{"row":25,"column":51},"end":{"row":25,"column":52},"action":"insert","lines":[" "],"id":418}],[{"start":{"row":46,"column":51},"end":{"row":46,"column":52},"action":"insert","lines":[" "],"id":419}],[{"start":{"row":59,"column":51},"end":{"row":59,"column":52},"action":"insert","lines":[" "],"id":420}],[{"start":{"row":74,"column":51},"end":{"row":74,"column":52},"action":"insert","lines":[" "],"id":421}],[{"start":{"row":6,"column":37},"end":{"row":6,"column":38},"action":"insert","lines":["e"],"id":422},{"start":{"row":6,"column":38},"end":{"row":6,"column":39},"action":"insert","lines":["v"]},{"start":{"row":6,"column":39},"end":{"row":6,"column":40},"action":"insert","lines":["n"]},{"start":{"row":6,"column":40},"end":{"row":6,"column":41},"action":"insert","lines":["e"]},{"start":{"row":6,"column":41},"end":{"row":6,"column":42},"action":"insert","lines":["t"]}],[{"start":{"row":6,"column":41},"end":{"row":6,"column":42},"action":"remove","lines":["t"],"id":423},{"start":{"row":6,"column":40},"end":{"row":6,"column":41},"action":"remove","lines":["e"]},{"start":{"row":6,"column":39},"end":{"row":6,"column":40},"action":"remove","lines":["n"]}],[{"start":{"row":6,"column":39},"end":{"row":6,"column":40},"action":"insert","lines":["e"],"id":424},{"start":{"row":6,"column":40},"end":{"row":6,"column":41},"action":"insert","lines":["n"]},{"start":{"row":6,"column":41},"end":{"row":6,"column":42},"action":"insert","lines":["t"]}],[{"start":{"row":6,"column":44},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":425},{"start":{"row":7,"column":0},"end":{"row":7,"column":8},"action":"insert","lines":["        "]},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["e"]},{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["v"]},{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["e"]},{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["n"]},{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["t"]},{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["."]},{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["p"]}],[{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"remove","lines":["p"],"id":426},{"start":{"row":7,"column":14},"end":{"row":7,"column":30},"action":"insert","lines":["preventDefault()"]}],[{"start":{"row":7,"column":30},"end":{"row":7,"column":31},"action":"insert","lines":[";"],"id":427}],[{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"insert","lines":["e"],"id":428},{"start":{"row":2,"column":31},"end":{"row":2,"column":32},"action":"insert","lines":["v"]},{"start":{"row":2,"column":32},"end":{"row":2,"column":33},"action":"insert","lines":["e"]},{"start":{"row":2,"column":33},"end":{"row":2,"column":34},"action":"insert","lines":["n"]},{"start":{"row":2,"column":34},"end":{"row":2,"column":35},"action":"insert","lines":["t"]}],[{"start":{"row":2,"column":37},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":429},{"start":{"row":3,"column":0},"end":{"row":3,"column":8},"action":"insert","lines":["        "]},{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["p"]}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"remove","lines":["p"],"id":430}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["e"],"id":431},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["v"]},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["e"]},{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["n"]},{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["t"]},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["."]},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["p"]}],[{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"remove","lines":["p"],"id":432},{"start":{"row":3,"column":14},"end":{"row":3,"column":30},"action":"insert","lines":["preventDefault()"]}],[{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":[";"],"id":433}],[{"start":{"row":34,"column":40},"end":{"row":34,"column":41},"action":"insert","lines":["e"],"id":434},{"start":{"row":34,"column":41},"end":{"row":34,"column":42},"action":"insert","lines":["v"]},{"start":{"row":34,"column":42},"end":{"row":34,"column":43},"action":"insert","lines":["e"]},{"start":{"row":34,"column":43},"end":{"row":34,"column":44},"action":"insert","lines":["n"]},{"start":{"row":34,"column":44},"end":{"row":34,"column":45},"action":"insert","lines":["t"]}],[{"start":{"row":34,"column":44},"end":{"row":34,"column":45},"action":"remove","lines":["t"],"id":435},{"start":{"row":34,"column":43},"end":{"row":34,"column":44},"action":"remove","lines":["n"]},{"start":{"row":34,"column":42},"end":{"row":34,"column":43},"action":"remove","lines":["e"]},{"start":{"row":34,"column":41},"end":{"row":34,"column":42},"action":"remove","lines":["v"]},{"start":{"row":34,"column":40},"end":{"row":34,"column":41},"action":"remove","lines":["e"]}],[{"start":{"row":43,"column":8},"end":{"row":50,"column":34},"action":"remove","lines":["$.getJSON('comment', function(data) {","            console.log(data);","            var everything = \"<ul>\";","            for(var comment in data) {","                var com = data[comment];","                everything += \"<li>\" + com.Name + \" :: \" + com.Comment + \"</li>\";","            }","            everything += \"</ul>\";"],"id":436}],[{"start":{"row":45,"column":10},"end":{"row":45,"column":11},"action":"remove","lines":[";"],"id":437},{"start":{"row":45,"column":9},"end":{"row":45,"column":10},"action":"remove","lines":[")"]},{"start":{"row":45,"column":8},"end":{"row":45,"column":9},"action":"remove","lines":["}"]}],[{"start":{"row":44,"column":8},"end":{"row":44,"column":12},"action":"remove","lines":["    "],"id":438}],[{"start":{"row":44,"column":28},"end":{"row":44,"column":38},"action":"remove","lines":["everything"],"id":439},{"start":{"row":44,"column":28},"end":{"row":44,"column":29},"action":"insert","lines":["\""]}],[{"start":{"row":44,"column":29},"end":{"row":44,"column":48},"action":"insert","lines":["No current Comments"],"id":440}],[{"start":{"row":44,"column":48},"end":{"row":44,"column":49},"action":"insert","lines":["\""],"id":441}],[{"start":{"row":43,"column":4},"end":{"row":43,"column":8},"action":"remove","lines":["    "],"id":442},{"start":{"row":43,"column":0},"end":{"row":43,"column":4},"action":"remove","lines":["    "]},{"start":{"row":42,"column":11},"end":{"row":43,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":46,"column":37},"end":{"row":46,"column":38},"action":"insert","lines":["e"],"id":443},{"start":{"row":46,"column":38},"end":{"row":46,"column":39},"action":"insert","lines":["v"]},{"start":{"row":46,"column":39},"end":{"row":46,"column":40},"action":"insert","lines":["e"]},{"start":{"row":46,"column":40},"end":{"row":46,"column":41},"action":"insert","lines":["n"]},{"start":{"row":46,"column":41},"end":{"row":46,"column":42},"action":"insert","lines":["t"]}],[{"start":{"row":46,"column":45},"end":{"row":47,"column":0},"action":"insert","lines":["",""],"id":444},{"start":{"row":47,"column":0},"end":{"row":47,"column":8},"action":"insert","lines":["        "]},{"start":{"row":47,"column":8},"end":{"row":47,"column":9},"action":"insert","lines":["e"]},{"start":{"row":47,"column":9},"end":{"row":47,"column":10},"action":"insert","lines":["v"]},{"start":{"row":47,"column":10},"end":{"row":47,"column":11},"action":"insert","lines":["e"]},{"start":{"row":47,"column":11},"end":{"row":47,"column":12},"action":"insert","lines":["n"]},{"start":{"row":47,"column":12},"end":{"row":47,"column":13},"action":"insert","lines":["t"]},{"start":{"row":47,"column":13},"end":{"row":47,"column":14},"action":"insert","lines":["."]}],[{"start":{"row":47,"column":14},"end":{"row":47,"column":15},"action":"insert","lines":["p"],"id":445},{"start":{"row":47,"column":15},"end":{"row":47,"column":16},"action":"insert","lines":["r"]},{"start":{"row":47,"column":16},"end":{"row":47,"column":17},"action":"insert","lines":["e"]}],[{"start":{"row":47,"column":14},"end":{"row":47,"column":17},"action":"remove","lines":["pre"],"id":446},{"start":{"row":47,"column":14},"end":{"row":47,"column":30},"action":"insert","lines":["preventDefault()"]}],[{"start":{"row":47,"column":30},"end":{"row":47,"column":31},"action":"insert","lines":[";"],"id":447}],[{"start":{"row":60,"column":34},"end":{"row":60,"column":35},"action":"insert","lines":["e"],"id":448},{"start":{"row":60,"column":35},"end":{"row":60,"column":36},"action":"insert","lines":["v"]},{"start":{"row":60,"column":36},"end":{"row":60,"column":37},"action":"insert","lines":["e"]},{"start":{"row":60,"column":37},"end":{"row":60,"column":38},"action":"insert","lines":["n"]},{"start":{"row":60,"column":38},"end":{"row":60,"column":39},"action":"insert","lines":["t"]}],[{"start":{"row":60,"column":41},"end":{"row":61,"column":0},"action":"insert","lines":["",""],"id":449},{"start":{"row":61,"column":0},"end":{"row":61,"column":8},"action":"insert","lines":["        "]},{"start":{"row":61,"column":8},"end":{"row":61,"column":9},"action":"insert","lines":["e"]},{"start":{"row":61,"column":9},"end":{"row":61,"column":10},"action":"insert","lines":["v"]},{"start":{"row":61,"column":10},"end":{"row":61,"column":11},"action":"insert","lines":["e"]},{"start":{"row":61,"column":11},"end":{"row":61,"column":12},"action":"insert","lines":["n"]},{"start":{"row":61,"column":12},"end":{"row":61,"column":13},"action":"insert","lines":["t"]},{"start":{"row":61,"column":13},"end":{"row":61,"column":14},"action":"insert","lines":["."]}],[{"start":{"row":61,"column":14},"end":{"row":61,"column":15},"action":"insert","lines":["p"],"id":450},{"start":{"row":61,"column":15},"end":{"row":61,"column":16},"action":"insert","lines":["r"]}],[{"start":{"row":61,"column":14},"end":{"row":61,"column":16},"action":"remove","lines":["pr"],"id":451},{"start":{"row":61,"column":14},"end":{"row":61,"column":28},"action":"insert","lines":["preventDefault"]}],[{"start":{"row":61,"column":28},"end":{"row":61,"column":30},"action":"insert","lines":["()"],"id":452}],[{"start":{"row":61,"column":30},"end":{"row":61,"column":31},"action":"insert","lines":[";"],"id":453}],[{"start":{"row":62,"column":32},"end":{"row":62,"column":33},"action":"insert","lines":["f"],"id":454},{"start":{"row":62,"column":33},"end":{"row":62,"column":34},"action":"insert","lines":["i"]},{"start":{"row":62,"column":34},"end":{"row":62,"column":35},"action":"insert","lines":["n"]},{"start":{"row":62,"column":35},"end":{"row":62,"column":36},"action":"insert","lines":["d"]}],[{"start":{"row":63,"column":33},"end":{"row":63,"column":34},"action":"insert","lines":["f"],"id":455},{"start":{"row":63,"column":34},"end":{"row":63,"column":35},"action":"insert","lines":["i"]},{"start":{"row":63,"column":35},"end":{"row":63,"column":36},"action":"insert","lines":["n"]},{"start":{"row":63,"column":36},"end":{"row":63,"column":37},"action":"insert","lines":["d"]}]]},"timestamp":1541826159702}