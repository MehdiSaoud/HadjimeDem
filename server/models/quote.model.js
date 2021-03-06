const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema(
  {
    customer: {
      lastName: {
        type: String,
        required: true,
      },
      firstName: {
        type: String,
        required: true,
      },
      mail: {
        type: String,
        required: true,
        match: [
          /^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/,
          "Please enter a valid email",
        ],
      },
      phone: {
        type: String,
        required: true,
      },
    },
    arrival: {
      homeType: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      floor: {
        type: Number,
        required: true,
      },
      elevator: {
        available: {
          type: Boolean,
          required: true,
          default: false
        },
        size: {
          type: String,
          required: false,
        },
      },
      additionalInfo: {
        type: String,
        required: false,
      },
    },

    leaving: {
      homeType: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      floor: {
        type: Number,
        required: true,
      },
      elevator: {
        available: {
          type: Boolean,
          required: true,
          default: false
        },
        size: {
          type: String,
          required: false,
        },
      },
      additionalInfo: {
        type: String,
        required: false,
      },
    },
    volume: {
      type: Number,
      required: true,
    },
    relocationDate: {
      start: {
        type: Date,
        required: true,
      },
      end: {
        type: Date,
        required: true,
      },
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    relocationDescription: {
      type: String,
      required: false,
    },
    prices: {
      low: {
        type: Number,
        required: true,
      },
      medium: {
        type: Number,
        required: true,
      },
      hight: {
        type: Number,
        required: true,
      },
    },
    recoveryCount: {
      type: Number,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Envoy??", "Relance", "Valid??", "Refus??","Non trait??"],
      default: "Non trait??"
    },
    lastRecoveryDateCall: {
      type: Date,
      required: false,
      default: Date.now(),
    },
    inventory: [
      {
        type: Object,
        required: false,

        room: {
          type: String,
          required: true,
        },

        customFurnitures: [
          {
            name: {
              type: String,
              required: true,
            },
            dismantle: {
              type: Boolean,
              required: true,
            },
            volume: {
              type: Number,
              required: true,
            },
            size: {
              width: {
                type: Number,
                required: true,
              },
              height: {
                type: Number,
                required: true,
              },
              depth: {
                type: Number,
                required: true,
              },
            },
          },
        ],
        furnitures: {
          type: Array,
          required: false,
        },
      },
    ],
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Quote", QuoteSchema);
