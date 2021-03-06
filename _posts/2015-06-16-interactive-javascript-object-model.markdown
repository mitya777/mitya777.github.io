---
layout: minimal/post
title: "Interactive Javascript Object Model"
description: ""
category: "dev"
tags: [javascript svg]
---
{% include JB/setup %}

<svg version="1.1" id="Layer_1" height="700px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1119 1109" enable-background="new 0 0 1119 1109" xml:space="preserve">

<filter id="dropShadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
    <feOffset dx="0" dy="0" />
    <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
    </feMerge>
</filter>
<line class="svg svg-monkey svg-proto svg-subclass svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="1120" y1="565" x2="1120" y2="544"/>

// Animal prototype.
<circle filter="url(#dropShadow)" id="animal_proto" class="svg svg-animal svg-monkey svg-proto svg-subclass svg-shape" fill="#EFE8E7" stroke="#7A545F" stroke-miterlimit="10" cx="491.3" cy="481.3" r="41.8"/>
<text id="animal_proto_label" class="svg svg-animal svg-monkey svg-proto svg-subclass svg-text" transform="matrix(1 0 0 1 471.2739 477.1768)"><tspan x="0" y="0" font-family="'MyriadPro-Regular'" font-size="13.5518">Animal</tspan><tspan x="-9.8" y="16.3" font-family="'MyriadPro-Regular'" font-size="13.5518">.prototype</tspan></text>

//Animal constructor
<line class="svg svg-animal svg-monkey svg-proto svg-subclass svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" x1="585.4" y1="575.4" x2="533.1" y2="523.1"/>
<polygon filter="url(#dropShadow)" id="animal_constr" class="start-view svg svg-animal svg-monkey svg-proto svg-subclass svg-shape" fill="#D8E1E5" stroke="#000000" stroke-miterlimit="10" points="589,638.2 564.5,613.7 564.5,579 589,554.5 623.6,554.5 
	648.1,579 648.1,613.7 623.6,638.2 "/>
<text id="animal_constr_label" class="svg svg-animal svg-monkey svg-proto svg-subclass svg-text" transform="matrix(1 0 0 1 582.4629 600.3252)" font-family="'MyriadPro-Regular'" font-size="13.5518">Animal()</text>

<circle class="svg svg-animal svg-monkey svg-proto svg-subclass svg-shape" fill="#090405" stroke="#000000" stroke-miterlimit="10" cx="533.1" cy="523.1" r="4.1"/>
<text id="animal_prototype_label" class="svg svg-animal svg-monkey svg-proto svg-subclass svg-text" transform="matrix(1 0 0 1 564.4531 533.5938)" fill="#6D6E71" font-family="'MyriadPro-Regular'" font-size="13.9371">prototype</text>


// Monkey instance.
<line class="svg svg-monkey svg-proto svg-subclass svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="459.9" y1="596.3" x2="491.3" y2="565"/>
<line class="svg svg-monkey svg-proto svg-subclass svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="344.9" y1="617.2" x2="365.8" y2="596.3"/>
<line class="svg svg-monkey svg-proto svg-subclass svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="365.8" y1="596.3" x2="459.9" y2="596.3"/>
<line class="svg svg-monkey svg-proto svg-subclass svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="491.3" y1="565" x2="491.3" y2="544"/>
<polygon class="svg svg-monkey svg-proto svg-subclass svg-line" fill="#0D0B0B" stroke="#000000" stroke-miterlimit="10" points="491.3,539.8 486.9,548.3 495.6,548.3 "/>

<circle filter="url(#dropShadow)" id="monkey_inst" class="svg svg-monkey svg-proto svg-subclass svg-shape" fill="#EFE8E7" stroke="#7A545F" stroke-miterlimit="10" cx="324" cy="648.6" r="41.8"/>
<text id="monkey_label" class="svg svg-monkey svg-proto svg-subclass svg-text" transform="matrix(1 0 0 1 301.1421 652.5527)" font-family="'MyriadPro-Regular'" font-size="13.5518">monkey</text>

<text class="svg svg-monkey svg-proto svg-subclass svg-text" transform="matrix(1 0 0 1 367.0688 617.2514)" fill="#6D6E71" font-family="'MyriadPro-Regular'" font-size="13.9371">__proto__</text>


// Object prototype
<circle filter="url(#dropShadow)" id="object_proto" class="svg svg-subclass svg-proto svg-shape" fill="#DCEED9" stroke="#000000" stroke-miterlimit="10" cx="658.5" cy="42.3" r="41.8"/>
<text id="object_proto_label" class="svg svg-subclass svg-proto svg-text" transform="matrix(1 0 0 1 639.6846 38.1577)"><tspan x="0" y="0" font-family="'MyriadPro-Regular'" font-size="13.5518">Object</tspan><tspan x="-11" y="16.3" font-family="'MyriadPro-Regular'" font-size="13.5518">.prototype</tspan></text>

<line class="svg svg-subclass svg-proto svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="658.5" y1="397.7" x2="658.5" y2="105"/>
<line class="svg svg-subclass svg-proto svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="522.6" y1="450" x2="543.5" y2="429.1"/>
<line class="svg svg-subclass svg-proto svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="627.2" y1="429.1" x2="658.5" y2="397.7"/>
<line class="svg svg-subclass svg-proto svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="543.5" y1="429.1" x2="627.2" y2="429.1"/>
<polygon class="svg svg-subclass svg-proto svg-shape" fill="#0D0B0B" stroke="#000000" stroke-miterlimit="10" points="658.5,100.7 654.1,109.3 662.8,109.3 "/>


//Human prototype
<line class="svg svg-proto svg-subclass svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="344.9" y1="742.7" x2="365.8" y2="721.7"/>
<line class="svg svg-proto svg-subclass svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="365.8" y1="721.7" x2="459.9" y2="721.7"/>
<line class="svg svg-proto svg-subclass svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="459.9" y1="721.7" x2="491.3" y2="690.4"/>
<line class="svg svg-proto svg-subclass svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="491.3" y1="690.4" x2="491.3" y2="569"/>
<text class="svg svg-proto svg-subclass svg-text" transform="matrix(1 0 0 1 367.0688 742.6514)" fill="#6D6E71" font-family="'MyriadPro-Regular'" font-size="13.9371">__proto__</text>

<circle filter="url(#dropShadow)" id="human_proto" class="svg svg-proto svg-subclass svg-shape" fill="#EFE8E7" stroke="#7A545F" stroke-miterlimit="10" cx="324" cy="774" r="41.8"/>
<text id="human_proto_label" class="svg svg-proto svg-subclass svg-text" transform="matrix(1 0 0 1 303.209 769.8555)"><tspan x="0" y="0" font-family="'MyriadPro-Regular'" font-size="13.5518">Human</tspan><tspan x="-9" y="16.3" font-family="'MyriadPro-Regular'" font-size="13.5518">.prototype</tspan></text>


<path class="svg svg-line" id="SVGID_x5F_1_x5F_" fill="none" d="M480.8,889l334.5,0.1"/>

// Subclass constr.
<line class="svg svg-subclass svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" x1="533.1" y1="648.6" x2="533.1" y2="565"/>
<line class="svg svg-subclass svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" x1="533.1" y1="648.6" x2="585.4" y2="700.8"/>
<line class="svg svg-subclass svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" x1="533.1" y1="565" x2="554" y2="544"/>
<polygon id="subclass_constr" class="svg svg-subclass svg-shape" fill="#D8E1E5" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" points="589,763.6 564.5,739 564.5,704.4 
	589,679.9 623.6,679.9 648.1,704.4 648.1,739 623.6,763.6 "/>
<text id="subclass_contr_label" class="svg svg-subclass svg-line" transform="matrix(1 0 0 1 577.2217 725.799)" font-family="'MyriadPro-Regular'" font-size="13.9371">Empty() { }</text>


// Human constr.
<line class="svg svg-proto svg-subclass svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" x1="365.8" y1="815.8" x2="418.1" y2="868.2"/>
<circle class="svg svg-proto svg-subclass svg-line" fill="#090405" stroke="#000000" stroke-miterlimit="10" cx="365.8" cy="815.8" r="4.1"/>
<polygon filter="url(#dropShadow)" id="human_constr" class="svg svg-proto svg-subclass svg-shape" fill="#D8E1E5" stroke="#000000" stroke-miterlimit="10" points="423.6,930.9 399.1,906.4 399.1,871.7 423.6,847.2 
	458.3,847.2 482.8,871.7 482.8,906.4 458.3,930.9 "/>
<text class="svg svg-proto svg-subclass svg-line" transform="matrix(1 0 0 1 416.2822 893.0039)" font-family="'MyriadPro-Regular'" font-size="13.5518">Human()</text>

// Buddha instance.
<line class="svg svg-line svg-subclass" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="209.1" y1="889" x2="292.7" y2="889"/>
<line class="svg svg-line svg-subclass" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="324" y1="857.6" x2="324" y2="836.7"/>
<line class="svg svg-subclass svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="292.7" y1="889" x2="324" y2="857.6"/>
<line class="svg svg-subclass svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="209.1" y1="889" x2="188.2" y2="909.9"/>
<polygon class="svg svg-subclass svg-line" fill="#0D0B0B" stroke="#000000" stroke-miterlimit="10" points="324,832.4 319.7,841 328.4,841 "/>
<circle filter="url(#dropShadow)" id="buddha_inst" class="svg svg-subclass svg-shape" fill="#EFE8E7" stroke="#000000" stroke-miterlimit="10" cx="156.8" cy="941.3" r="41.8"/>
<text id="buddha_inst_label" class="svg svg-text svg-subclass" transform="matrix(1 0 0 1 134.3555 945.2324)" font-family="'MyriadPro-Regular'" font-size="13.5518">buddha</text>



<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" x1="763.1" y1="460.4" x2="731.7" y2="429.1"/>
<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="909.4" y1="679.9" x2="909.4" y2="355.9"/>
<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" x1="951.2" y1="335" x2="1066.2" y2="460.4"/>
<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="1013.9" y1="429.1" x2="1045.3" y2="460.4"/>
<polygon filter="url(#dropShadow)" class="svg svg-shape" fill="#DCEED9" stroke="#000000" stroke-miterlimit="10" points="1059.3,523.1 1034.8,498.6 1034.8,464 1059.3,439.4 
	1094,439.4 1118.5,464 1118.5,498.6 1094,523.1 "/>

<!--<circle filter="url(#dropShadow)" id="snowden" class="svg svg-shape" fill="#EFE8E7" stroke="#000000" stroke-miterlimit="10" cx="156.8" cy="1066.7" r="41.8"/>
<text class="svg svg-text" transform="matrix(1 0 0 1 130.7798 1070.666)" font-family="'MyriadPro-Regular'" font-size="13.5518">snowden</text>
<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="209.1" y1="1014.4" x2="292.7" y2="1014.4"/>
<path class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" d="M324,941.3"/>
-->
<polygon filter="url(#dropShadow)" class="svg svg-shape" fill="#DCEED9" stroke="#000000" stroke-miterlimit="10" points="766.6,523.1 742.1,498.6 742.1,464 766.6,439.4 
	801.3,439.4 825.8,464 825.8,498.6 801.3,523.1 "/>
<text class="svg svg-line" transform="matrix(1 0 0 1 761.1455 485.2715)" font-family="'MyriadPro-Regular'" font-size="13.5518">Object()</text>



<polygon class="svg svg-line" fill="#DCEED9" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" points="892.1,335 867.6,310.5 867.6,275.8 
	892.1,251.3 926.8,251.3 951.3,275.8 951.3,310.5 926.8,335 "/>
<text class="svg svg-line" transform="matrix(1 0 0 1 884.2939 288.9893)"><tspan x="0" y="0" font-family="'MyriadPro-Regular'" font-size="13.5518">Function</tspan><tspan x="-13.8" y="16.3" font-family="'MyriadPro-Regular'" font-size="13.5518">.prototype(){ }</tspan></text>
<text class="svg svg-line" transform="matrix(1 0 0 1 1047.8398 485.2715)" font-family="'MyriadPro-Regular'" font-size="13.5518">Function()</text>
<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" x1="397.2" y1="889" x2="397.2" y2="889"/>
<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="867.6" y1="596.3" x2="648.1" y2="596.3"/>
<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="867.6" y1="596.3" x2="909.4" y2="554.5"/>
<text class="svg svg-line"><textPath  xlink:href="#SVGID_x5F_1_x5F_" startOffset="7.300000e-02%">
</textPath>
</text>
<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="700.3" y1="889" x2="888.5" y2="700.8"/>
<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="1013.9" y1="429.1" x2="940.8" y2="429.1"/>
<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="940.8" y1="429.1" x2="909.3" y2="397.7"/>
<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="857.1" y1="240.9" x2="689.9" y2="240.9"/>
<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="689.9" y1="240.9" x2="658.5" y2="209.6"/>


<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="867.4" y1="721.7" x2="648.1" y2="721.7"/>
<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="867.6" y1="721.7" x2="909.3" y2="679.9"/>
<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="815.3" y1="449.9" x2="836.2" y2="429.1"/>




<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="878" y1="261.8" x2="857.1" y2="240.9"/>
<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" x1="700.3" y1="84.1" x2="731.7" y2="115.5"/>
<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" x1="731.7" y1="115.5" x2="731.7" y2="429.1"/>
<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="836.2" y1="429.1" x2="867.6" y2="429.1"/>
<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="874.9" y1="429.1" x2="909.3" y2="397.7"/>
<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" x1="376.3" y1="774" x2="376.3" y2="774"/>
<circle class="svg svg-line" fill="#090405" stroke="#000000" stroke-miterlimit="10" cx="700.3" cy="84.1" r="4.1"/>
<circle class="svg svg-line" fill="#090405" stroke="#000000" stroke-miterlimit="10" cx="951.2" cy="335" r="4.1"/>

<polygon class="svg svg-line" fill="#0D0B0B" stroke="#000000" stroke-miterlimit="10" points="909.4,351.6 905,360.2 913.8,360.2 "/>


<text class="svg svg-legend svg-text" transform="matrix(1 0 0 1 0 78.3154)"><tspan x="0" y="0" fill="#515251" font-family="'MyriadPro-Regular'" font-size="13.9371">this</tspan><tspan x="22.9" y="0" font-family="'MyriadPro-Regular'" font-size="13.9371">.</tspan><tspan x="26.2" y="0" font-family="'MyriadPro-Regular'" font-size="15.0985">__proto__</tspan></text>
<line class="svg svg-legend svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" x1="210.8" y1="110.2" x2="125.4" y2="110.2"/>
<circle class="svg svg-legend svg-shape" fill="#090405" stroke="#000000" stroke-miterlimit="10" cx="215.4" cy="110.2" r="4.1"/>
<text class="svg svg-legend svg-text" transform="matrix(1 0 0 1 0 109.6733)"><tspan x="0" y="0" fill="#515251" font-family="'MyriadPro-Regular'" font-size="13.9371">this</tspan><tspan x="22.9" y="0" font-family="'MyriadPro-Regular'" font-size="13.9371">.</tspan><tspan x="26.2" y="0" font-family="'MyriadPro-Regular'" font-size="15.0985">prototype</tspan></text>
<polygon filter="url(#dropShadow)" class="svg svg-legend svg-shape" fill="#DCEED9" stroke="#000000" stroke-miterlimit="10" points="124.7,201.5 115.5,192.3 115.5,179.3 124.7,170.1 
	137.7,170.1 146.9,179.3 146.9,192.3 137.7,201.5 "/>
<polygon class="svg svg-legend svg-shape" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" points="124.7,308.3 115.5,299.1 
	115.5,286.1 124.7,276.8 137.7,276.8 146.9,286.1 146.9,299.1 137.7,308.3 "/>
<circle filter="url(#dropShadow)" class="svg svg-legend svg-shape" fill="#DCEED9" stroke="#000000" stroke-miterlimit="10" cx="130.7" cy="376.2" r="15.7"/>
<path class="svg svg-legend svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" d="M133.9,78.9V34.6V78.9z"/>


<polygon class="svg svg-legend svg-line" fill="#0D0B0B" stroke="#000000" stroke-miterlimit="10" points="133.9,26.1 129.5,34.6 138.2,34.6 "/>
<text class="svg svg-legend svg-text" transform="matrix(1 0 0 1 31.3584 245.561)" font-family="'MyriadPro-Regular'" font-size="15.0985">functions</text>
<text class="svg svg-legend svg-text" transform="matrix(1 0 0 1 167.8247 190.9741)" font-family="'MyriadPro-Regular'" font-size="15.0985">initially available constructor</text>
<text class="svg svg-legend svg-text" transform="matrix(1 0 0 1 167.2456 429.0664)" font-family="'MyriadPro-Regular'" font-size="15.0985">object</text>
// Empty legend.
<text class="svg svg-legend svg-text" transform="matrix(1 0 0 1 167.2451 300.0752)" font-family="'MyriadPro-Regular'" font-size="15.0985">empty definition</text>
<polygon filter="url(#dropShadow)" class="svg svg-legend svg-shape" fill="#D8E1E5" stroke="#000000" stroke-miterlimit="10" points="124.2,256.1 115,246.9 115,233.9 124.2,224.7 137.2,224.7 
	146.4,233.9 146.4,246.9 137.2,256.1 "/>
<text class="svg svg-legend svg-text" transform="matrix(1 0 0 1 167.2451 245.5615)" font-family="'MyriadPro-Regular'" font-size="15.0985">constructor</text>
<circle filter="url(#dropShadow)" class="svg svg-legend svg-shape" fill="#EFE8E7" stroke="#7A545F" stroke-miterlimit="10" cx="131.2" cy="423.8" r="15.7"/>
<text class="svg svg-legend svg-text" transform="matrix(1 0 0 1 167.2456 376.8022)" font-family="'MyriadPro-Regular'" font-size="15.0985">initially available object</text>


<line class="svg svg-line" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="6" x1="700.3" y1="889" x2="481" y2="889.1"/>



<text class="svg svg-text" transform="matrix(1 0 0 1 659.748 742.5791)" fill="#6D6E71" font-family="'MyriadPro-Regular'" font-size="13.9371">__proto__</text>
<text class="svg svg-text" transform="matrix(1 0 0 1 962.8799 449.9722)" fill="#6D6E71" font-family="'MyriadPro-Regular'" font-size="13.9371">__proto__</text>
<text class="svg svg-text" transform="matrix(1 0 0 1 1034.8301 408.1602)" fill="#6D6E71" font-family="'MyriadPro-Regular'" font-size="13.9371">prototype</text>

// Start.
<text id="start_btn" class="svg svg-text" transform="matrix(1 0 0 1 659.748 585.2514)" fill="red" font-family="'MyriadPro-Regular'" font-size="15.9371">START</text>
</svg>

<br>


<div id="context">
</div>

<script type="text/template" id="animal_constr_template">
    In javascript almost everything is an object, including functions.
    <br>
    <br>
    <div id="animal_constr_code">
<pre>
function Animal(sound) {
    this.multicellular = true;
    this.sound = sound;
}
Animal.prototype instanceof Object; //true
</pre>
    </div>
    Every <em class="hover-animal-constr action">function</em> has a prototype property pointing to its <em class="hover-animal-proto action">prototype object</em>.
    <br>
    <br>
    When <em class="hover-animal-constr action">Animal</em> is executed with the <em>new</em> operator it becomes a constructor capable of creating new objects:
    <br>
    <br>
<pre>
var monkey = new Animal("Banana. Now!");
</pre>
    <em class="hover-animal-constr action">Animal</em> creates a new object named <em class="hover-monkey-inst action">monkey</em>, binds <em class="hover-monkey-inst action">this</em> to the newly created object, and executes <em class="hover-animal-constr action">itself</em>.
    <em class="hover-animal-constr action">Animal</em> then sets <em class='hover-monkey-inst action'>monkey</em>'s __proto__ property to <em class="hover-animal-proto action">Animal.prototype</em>:
    <br>
    <br>
<pre>
Object.getPrototypeOf(monkey) === Animal.prototype; //true
monkey instanceof Animal; //true
</pre> 
    <em class='hover-animal-proto action'>monkey.__proto__</em> is a hidden property but can be accessed via <code>Object.getPrototype(monkey)</code>.
    <br>
    <br>
    All <em class="hover-monkey-inst action">objects</em> inherit properties from their <em class='hover-animal-proto action'>prototypes</em>.
</script>


<script type="text/template" id="animal_proto_template">
    If <em class="hover-monkey-inst action">monkey</em> doesn't have some property, eg. favoriteBooks... 
    <br>
    <br>
<pre>
monkey.hasOwnProperty('favoriteBooks'); //false
</pre>    
    ...the javasacript engine checks if <em class='hover-animal-proto action'>Animal.prototype</em> has a favoriteBooks property. 
    <br>
    <br>
    If <code>Animal.prototype.favoriteBooks</code> is not found either the engine continues up the prototype chain via <code>Animal.prototype.__proto__</code> to check <em class='hover-object-proto action'>Object.prototype</em>.
    <br>
    <br>
<pre>
Object.getPrototypeOf(Animal.prototype) === Object.prototype; //true
</pre>
    When <em class="hover-animal-constr action">Animal</em> was defined <em class='hover-animal-proto action'>Animal.prototype's</em> __proto__ property was pointed at <em class='hover-object-proto action'>Object.prototype</em> setting up the <code>Animal.prototype -> Object.prototype</code> chain.
    <br>
    <br>
    If favoriteBooks is not found on <em class='hover-object-proto action'>Object.prototype</em> <code>undefined</code> is returned. 
    <br>
    <br>
<pre>
monkey.favoriteBooks; //undefined
</pre>
    We can further extend the prototype chain by setting <em class="hover-human-proto action">Human.prototype's</em> __proto__ property to reference <em class='hover-animal-proto action'>Animal.prototype</em>. 
</script>

<script type="text/template" id="human_proto_template">
    When the <em class="hover-human-constr action">Human constructor</em> is first created <em class="hover-human-proto action">Human.prototype</em> points to a new object giving the prototype chain:<br>
    <code>Human.prototype (empty object) -> Object.prototype.</code>
    <br>
    <br>
    Instead we want <em class="hover-buddha-inst action">instances</em> of <em class="hover-human-constr action">Human</em> to also inherit from <em class='hover-animal-proto action'>Animal.prototype</em>:<br>
    <code>buddha -> Human.prototype -> Animal.protype -> Object.prototype.</code>
    <br>
    <br>
    To achieve this we could set <em class="hover-human-proto action">Human.prototype</em> to <em class="hover-monkey-inst action">monkey</em> so that objects created by <em class="hover-human-constr action">Human</em> would have the following prototype chain:<br>
    <code>buddha -> (monkey === Human.prototype) -> Animal.prototype -> Object.prototype.</code>
    <br>
    <br>
    This works but has the downside that <em class="hover-monkey-inst action">monkey</em> was instantiated with monkey-specific properties by the <em class="hover-animal-constr action">Animal constructor</em>...
    <br>
    <br>
<pre>
monkey.sound === "Banana. Now!"; //true
</pre>

    ...which we don't want every <em class="hover-buddha-inst action">instance</em> of <em class="hover-human-constr action">Human</em> to inherit:
    <br>
    <br>
<pre>
if (Object.getPrototype(buddha) === monkey)
    buddha.sound === "Banana. Now!"; //don't want!
</pre>
    Instead we can introduce an <em class="hover-subclass-constr action">empty constructor function</em> to create an <em class="hover-human-proto action">object with no properties</em> but with __proto__ set to Animal.prototype.
    <br>
    <br>
<pre>
function Empty() {}
Empty.prototype = Animal.prototype;
Human.prototype = new Empty();
</pre>
    This correctly sets up the prototype chain so <em class="hover-buddha-inst action">buddha</em> has a <em class="hover-human-proto action">"clean" prototype object</em> which inherits properties from <em class="hover-animal-proto action">Animal.prototype</em> but doesn't inherit specific instance properties set by <em class="hover-animal-constr action">Animal</em>.
</script>
