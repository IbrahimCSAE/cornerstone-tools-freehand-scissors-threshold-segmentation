import cornerstoneTools from "cornerstone-tools";
import { paint } from './paint';

const BaseTool = cornerstoneTools.import("base/BaseTool");
const { freehandFillInsideCursor } = cornerstoneTools.import("tools/cursors");

/**
 * @public
 * @class FreehandScissorsThresholdSegmentation
 * @memberof Tools
 * @classdesc Tool for manipulating labelmap data by drawing a freehand polygon within the threshold range.
 * @extends Tools.Base.BaseTool
 */
export default class FreehandScissorsThresholdSegmentation extends BaseTool {
  /** @inheritdoc */
  constructor(props = {}) {
    const defaultProps = {
      name: "FreehandScissorsThresholdSegmentation",
      strategies: {
        PAINT: paint,
      },
      cursors: {
        PAINT: freehandFillInsideCursor,
      },
      configuration : {
        thresholdLow: 200,
        thresholdHigh: 1000,
        numberOfSlices: 200,
        inside: true,
      },
      defaultStrategy: "PAINT",
      supportedInteractionTypes: ["Mouse", "Touch"],
      svgCursor: freehandFillInsideCursor,
      mixins: ["freehandSegmentationMixin"],
    };

    super(props, defaultProps);
  }

      /**
   * Apply the currently set/active strategy.
   *
   * @public
   * @instance
   * @method applyActiveStrategy
   * @memberof Tools.Base.BaseTool
   *
   * @param {Object} evt The event that triggered the strategies application
   * @param {Object} operationData - An object containing extra data not present in the `evt`,
   *                                 required to apply the strategy.
   * @returns {*} strategies vary widely; check each specific strategy to find expected return value
   */
      applyActiveStrategy(evt, operationData) {
        operationData.configuration = this.configuration;
        return this.strategies[this.activeStrategy].call(this, evt, operationData);
      }
}
