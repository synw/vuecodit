import { usePython } from "usepython";
import { reactive } from "vue";

const state = reactive({
  py: usePython()
})

function initPy() {
  // create a new runtime
  state.py = usePython()
}

export { state, initPy }