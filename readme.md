# Perceptron 

## p0: A single perceptron 

TODO: 
[ ] Describe a simple perceptron 
[ ] What is an input and output 
[ ] What are weights and weighted input 
[ ] Activation function 
[ ] Learning rate 
[ ] Feed forward, backpropagation, adjusting weights 

### Limitations of a single perceptron: 
- Can only solve problems that are linearly separable
- Like AND & OR 
- Cant solve XOR (exclusive OR)

## p1: Multilayered perceptron 

### Layers of XOR multilayer p-tron
       Input 1 ----o       o---- Hidden Neuron 1 ----o        o--- Output
                   |       |                         |        |
       Input 2 ----o       o---- Hidden Neuron 2 ----o  XOR   |
                           |                         |  Logic |
       Input 1 ----o       o---- Hidden Neuron 3 ----o        |
                   |       |                         |        |
       Input 2 ----o       o---- Hidden Neuron 4 ----o        |

Diagram for XOR NN 

### Matrix multiplication 

[ w11, w21   * [ x1,   =  [h1,
  w12, w22 ]     x2 ]      h2]

x1 * w11 + x2 * w21 = h1 
x1 * w12 + x2 * w21 = h2 


