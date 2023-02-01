# cornerstone-tools-freehand-scissors-threshold-segmentation

This tool allows you to segment pixels within an a shape drawn with freehand by specifying a minimum and maximum threshold value. Additionally, it can segment multiple slices at once by specifying the depth, such as 10 slices.<br>

![demogif2](https://user-images.githubusercontent.com/93064150/216049411-5ba0f0c8-a19c-46d2-8b72-5bdf2f124aeb.gif)
![demogif3](https://user-images.githubusercontent.com/93064150/216049423-e4a2714a-625a-4663-b5f1-ac7072983147.gif)


The above gifs demonstrates the threshold range being set to [200, 1000], [-29, 150] and the depth set to 10 slices, showcasing the tool's ability to segment multiple slices while respecting the threshold range.


## Dependencies 

* [cornerstone-core](https://github.com/cornerstonejs/cornerstone)
* [cornerstone-tools](https://github.com/cornerstonejs/cornerstoneTools)


A live demo of the threshold brush tool is available for trying out.

[LIVE DEMONSTRATION](https://ibrahimcsae.github.io/cornerstone-tools-freehand-scissors-threshold-segmentation/)

While it is possible to segment over 300 slices at once, it is recommended to stay within the range of 50-150 slices, depending on your computer's specs.

## Installation

```sh
$ npm i "cornerstone-tools-freehand-scissors-threshold-segmentation"
```

## Usage


```js
import FreehandScissorsThresholdSegmentation from "cornerstone-tools-freehand-scissors-threshold-segmentation";

cornerstoneTools.addToolForElement(element, FreehandScissorsThresholdSegmentation, {configuration: {thresholdLow: 200 , thresholdHigh: 1000, numberOfSlices: 10, inside: true}});
cornerstoneTools.setToolActive("FreehandScissorsThresholdSegmentation", { mouseButtonMask: 1 });

```

The threshold values, number of slices, and whether the segmentation is filled inside or outside the ROI rectangle can be modified on the fly.

```js

let config = cornerstoneTools.store.state.tools.filter(tool => tool.name == 'FreehandScissorsThresholdSegmentation')[0].configuration
config.thresholdLow = -29
config.thresholdHigh = 150
config.numberOfSlices = 10
config.inside = true

```

## Common thresholds

Left Psoas : [-29, 150]<br>
Right Psoas : [-29, 150]<br>
Muscle : [-29, 150]<br>
Sub Fat : [-190, -30]<br>
Vis Fat : [-190, -30]<br>
Bone : [200, 1000]<br>


## LICENSE

MIT
