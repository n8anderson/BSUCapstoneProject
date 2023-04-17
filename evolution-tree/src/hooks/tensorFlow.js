import * as tf from '@tensorflow/tfjs';
import { OPTIMIZERS } from './optimizers';

export function generateData() {
  const input = [];
  const label = [];
  for (let i = 0; i < 100; i++) {
    let value = Math.random() * 99 + 1;
    value *= Math.round(Math.random()) ? 1 : -1;
    input.push(parseFloat(value) / 100.0);
    
    if (input[i] > 0.5) {
      label.push(1);
    } else if (input[i] >= -0.5 && input[i] <= 0.5) {
      label.push(0);
    } else {
      label.push(-1);
    }
  }

  const tfInput = tf.tensor(input, [100, 1]);
  const tfLabel = tf.tensor(label, [100, 1]);

  return [tfInput, tfLabel];
}

export function createModel({
  units=1,
  learningRate=0.01,
  optimizer="adam"
}) {
  const selectOptimizer = (optimizer) => {
    return OPTIMIZERS[optimizer].fn(learningRate);
  };

  const model = tf.sequential();
  model.add(tf.layers.dense({units, inputShape: [1] }));
  model.compile({
    optimizer: selectOptimizer(optimizer),
    loss: "meanSquaredError"
  })
  return model;
}

export async function trainModel(model, input, label, epochs = 150) {
  await model.fit(input, label, { epochs });
}