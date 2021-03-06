import {
  FETCH_MONTHLY,
  FETCH_MONTHLY_SUCCESS,
  CREATE_MONTHLY,
  UPDATE_MONTHLY,
  DELETE_MONTHLY,
  SELECT_MONTHLY,
  SAVE_MONTHLY,
  MONTHLY_ERROR,
} from "../actions/monthlyActions";

const initialState = {
  isLoading: false,
  error: "",
  selected: {},
  selectedDate: "",
  schedule: {},
  plans: [],
};

const monthlyReducer = (state = initialState, action) => {
  switch (action.type) {
    case MONTHLY_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    //* FETCH DATA ACTION *//
    case FETCH_MONTHLY: {
      const date = new Date().toString();
      const today = date.substring(0, 15);

      return { ...state, isLoading: true, selectedDate: today };
    }
    case FETCH_MONTHLY_SUCCESS: {
      if (action.payload === []) {
        return { ...state, isLoading: false };
      } else {
        // Change Content Time Format

        const plans = action.payload;
        let monthly = [];

        for (const plan of plans) {
          const contents = plan.contents;
          const formatChangedContents = [];

          for (const content of contents) {
            const data = {
              id: content.id,
              text: content.text,
              time: {
                hour: content.time.split(":")[0],
                min: content.time.split(":")[1],
              },
            };
            formatChangedContents.push(data);
          }
          const result = {
            id: plan.id,
            date: plan.date,
            contents: formatChangedContents,
          };
          monthly.push(result);
        }

        // DISPLAY TODAY'S PLAN AS DEFAULT && SET SCHEDULE FOR PREVIEW //
        const selected_plan = monthly.find(
          (plan) => plan.date === state.selectedDate
        );

        return {
          ...state,
          isLoading: false,
          selected: { ...selected_plan },
          scheduel: { ...selected_plan },
          plans: [...monthly],
        };
      }
    }

    //* ACTIVE WHEN DATE SELECTED *//
    case SELECT_MONTHLY: {
      const selected_plan = state.plans.find(
        (plan) => plan.date === action.payload
      );

      return {
        ...state,
        isLoading: false,
        selected: { ...selected_plan },
        selectedDate: action.payload,
      };
    }
    case SAVE_MONTHLY: {
      return { ...state, isLoading: true };
    }

    //* ACTIVE MONTHLY CREATED *//
    case CREATE_MONTHLY: {
      return { ...state, plans: [...state.plans, action.payload] };
    }

    //* ACTIVE WHEN MONTHLY UPDATED *//
    case UPDATE_MONTHLY: {
      return {
        ...state,
        isLoading: false,
        plans: [...state.plans, action.payload],
      };
    }

    //* ACTIVE WHEN MONTHLY DELETED *//
    case DELETE_MONTHLY: {
      const filteredPlans = state.plans.filter(
        (plan) => plan.id !== action.payload.id
      );
      return {
        ...state,
        plans: filteredPlans,
      };
    }

    default:
      return state;
  }
};

export default monthlyReducer;
