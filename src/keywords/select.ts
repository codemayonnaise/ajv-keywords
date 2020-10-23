import {Plugin} from "ajv"
import getDefs from "../definitions/select"
import {DefinitionOptions} from "../definitions/_types"

const select: Plugin<DefinitionOptions> = (ajv, opts?: DefinitionOptions) => {
  getDefs(opts).forEach((d) => ajv.addKeyword(d))
  return ajv
}

export default select
module.exports = select
