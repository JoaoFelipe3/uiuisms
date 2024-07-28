export let uiuisms = [
  {
    "name": "Reverse each row of an array",
    "code": "≡⇌ [1_2_3 4_5_6]"
  },
  {
    "name": "Get the sum of an array",
    "code": "/+ [1 2 3 4 5]"
  },
  {
    "name": "Get the product of an array",
    "code": "/× [1 2 3 4 5]"
  },
  {
    "name": "Get the maximum value in an array",
    "code": "/↥ [1 4 5 3 2]"
  },
  {
    "name": "Get the minimum value in an array",
    "code": "/↧ [1 4 5 3 2]"
  },
  {
    "name": "Sort an array",
    "code": "⊏⍏. [1 4 5 3 2]"
  },
  {
    "name": "Get n numbers between 0 and 1 exclusive",
    "code": "÷⟜⇡ 10"
  },
  {
    "name": "Get n numbers between 0 and 1 inclusive",
    "code": "÷-1⟜⇡ 11"
  },
  {
    "name": "Create a zero matrix",
    "code": "↯⟜⊚ 5"
  },
  {
    "name": "Create an identity matrix",
    "code": "⊞=.⇡ 5"
  },
  {
    "name": "Create an X matrix",
    "code": "↥⇌.⊞=.⇡ 5"
  },
  {
    "name": "Create a zero matrix of the same shape as another",
    "code": "≠. [1_1 2_2]"
  },
  {
    "name": "Create a 0xN matrix",
    "code": "↯0⊚ 2"
  },
  {
    "name": "Replace all NaNs in an array with a value",
    "code": "↧⊸↥ 0 [1 2 NaN 4 NaN]"
  },
  {
    "name": "Interleave two arrays",
    "code": "♭⍉⊟ [1 2 3 4] [5 6 7 8]"
  },
  {
    "name": "Intersperse an item between the rows of an array",
    "code": "↘1♭≡⊂ π [1 2 3 4]"
  },
  {
    "name": "Get the cycling windows of an array",
    "code": "◫⊙⊂⊃⊙∘(↙-1) 3 ⇡7"
  },
  {
    "name": "Get all permutations of size N",
    "code": "◴≡⍏☇1⇡▽. 3"
  },
  {
    "name": "Split an array at an index",
    "code": "⊃↙↘ 3 [1 2 3 4 5]"
  },
  {
    "name": "Insert a value into an array at an index",
    "code": "⍜⊙↻⊂ π 3 [1 2 3 4 5]"
  },
  {
    "name": "Split an array into groups of contiguous equal elements",
    "code": "⊜□. [1 1 1 2 2 1 1 4]"
  },
  {
    "name": "Find the nth fibonacci number",
    "code": "⊢⍥(⇌\\+):1_0 10"
  },
  {
    "name": "Find the GCD of two numbers",
    "code": "◌⍢⊃◿∘± 35 360"
  },
  {
    "name": "Remove all instances of an element from a list",
    "code": "▽≠, 4 [1 4 2 0 5 4 3]"
  },
  {
    "name": "Remove first instance of an element from an array",
    "code": "⍜↻(↘1)⊸⊗ 4 [1 4 2 0 5 4 3]"
  },
  {
    "name": "Remove the nth element from an array",
    "code": "⍜↻(↘1) 4 [1 4 2 0 5 4 3]"
  },
  {
    "name": "Remove all instances of a row from an array",
    "code": "▽¬≡≍,¤ 2_0 [1_4 2_0 5_3 2_0]"
  },
  {
    "name": "Filter by a fixed predicate",
    "code": "▽ =0◿3 . ⇡10"
  },
  {
    "name": "Upscale a 2d matrix or colored image",
    "code": "30 [0_1 3/4_1/4]\n▽⟜≡▽\n30 [[0_0_1 0_1_0] [1_0_0 0_0_0]]\n▽⟜≡▽"
  },
  {
    "name": "Linearly interpolate between two values",
    "code": "⍜-× 10 0 0.2\n⍜⊙-× 0.2 10 0"
  },
  {
    "name": "Set the value of an array at an index",
    "code": "⍜⊡◌ 2 1_2_3_4 10"
  },
  {
    "name": "Create a matrix of random 0s or 1s",
    "code": "⁅⊞⋅⋅⚂.⊚ 5"
  },
  {
    "name": "Create a matrix of random numbers",
    "code": "⌊×⊞⋅⋅⚂.⊚ 5 10"
  },
  {
    "name": "Arithmetic mean",
    "code": "÷⧻⟜/+ [85 105 117 97]"
  },
  {
    "name": "Geometric mean",
    "code": "ⁿ÷:1⧻⟜/× [85 105 117 97]"
  },
  {
    "name": "Harmonic mean",
    "code": "÷/+⟜⧻÷:1 [85 105 117 97]"
  },
  {
    "name": "Quadratic mean",
    "code": "√÷⧻⟜/+×. [85 105 117 97]"
  },
  {
    "name": "Median",
    "code": "÷2/+⊏⊟⊃⌊⌈÷2-1⧻.⊏⍏. [85 105 117 97]"
  },
  {
    "name": "Dot product",
    "code": "/+× [1 2 3] [4 ¯5 6]"
  },
  {
    "name": "Cross product",
    "code": "1_2_3 4_5_6\n↻2-∩(×↻2):,,"
  },
  {
    "name": "Matrix product",
    "code": "[7_8_9 10_11_12] [1_2 3_4 5_6]\n⍜⍉⊞(/+×)"
  },
  {
    "name": "Matrix power (Also works with scalars)",
    "code": "4 [1_2 3_4]\n⊙◌⍥(⊞(/+×),⍉):⊞=.⇡⧻,"
  },
  {
    "name": "Repeat a function and collect intermediate results into an array",
    "code": "[⍥(×2.)] 10 1"
  },
  {
    "name": "Pad an array with 0s",
    "code": "[1_2_3 4_5_6]\n↻¯±⟜⬚0↙+2△."
  },
  {
    "name": "Complex conjugate",
    "code": "⍜°ℂ¯ +i1"
  },
  {
    "name": "Cosine",
    "code": "∿+η 1"
  },
  {
    "name": "Tangent",
    "code": "÷:°∠ 1"
  },
  {
    "name": "Factorial",
    "code": "/×+1⇡ 5"
  },
  {
    "name": "Rank of an array",
    "code": "⧻△ [1_2_3_4 5_6_7_8 9_10_11_12]"
  },
  {
    "name": "Main diagonal of an array",
    "code": "⊡≡↯:⇡/↧⟜⧻△. [1_2_3_4 5_6_7_8 9_10_11_12]"
  },
  {
    "name": "Convert from base, input in little endian",
    "code": "/+×ⁿ⇡⧻, 3 0_2_1_1"
  },
  {
    "name": "Corner element of an array",
    "code": "⊢♭ [1_2_3_4 5_6_7_8 9_10_11_12]"
  },
  {
    "name": "Test if positive integers are prime",
    "code": "=⊢⇌°/×. [2 3 4 5 6 7 8 9 10]"
  },
  {
    "name": "Inverse modulo m, returns m if it does not exist",
    "code": "⊗1◿:×⇡, 3 7"
  },
  {
    "name": "Multiplicative order modulo m",
    "code": "⊡1⊚=1◿:ⁿ⇡, 2 7"
  },
  {
    "name": "Continued fraction to decimal",
    "code": "/(+÷:1)⇌ 2_1_2_1_1_4_1_1_6"
  },
  {
    "name": "Complex argument",
    "code": "∠°ℂ i"
  },
  {
    "name": "Successive differences",
    "code": "≡/-◫2 2_3_5_9_4"
  },
  {
    "name": "Binomial coefficient",
    "code": "/×÷¬⟜+¯⇡ 3 5"
  },
  {
    "name": "Replace all of one element in a list with another",
    "code": "⍜▽≡⋅∘=, 5 [1 5 8 5 2] 3"
  },
  {
    "name": "Boxed powerset",
    "code": "⍚▽⋯⇡ⁿ:2⧻⟜¤ [1 5 8 2]"
  },
  {
    "name": "Irrational number to n terms of continued fraction",
    "code": "⇌◌⍥(⊙⊂÷:1◿1⟜⌊)⊙⊙[] 10 e"
  },
  {
    "name": "Bitwise XOR",
    "code": "⍜∩⋯⬚0≠ 42 65"
  },
  {
    "name": "Boxed chunks of array",
    "code": "⊕□⌊÷:⇡⧻, 3 1_4_9_16_25_36_49"
  }
];