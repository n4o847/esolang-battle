```
近くの区画に地雷がいくつあるか判定せよ。
```
## 入力
* 各文字が `.` あるいは `M` のどちらかであるような、長さ $30$ の文字列が一行で与えられる。
* 先頭の文字と末尾の文字は `.` で、先頭の直後の文字と末尾の直前の文字は `M` であることが保証される。
* 文字列は $30$ 個の区画が左から右へ並んだ列を表している。
 * $i$ 番目 ($1\leqq i\leqq30$) の文字が `M` であるとき左から $i$ 個目の区画には地雷があり、$i$ 番目の文字が `.` であるとき左から $i$ 個目の区画には地雷がない。
* 入力の最後には改行が付与される。
## 出力
* 各区画それぞれについて、その区画、その区画の左隣の区画、その区画の右隣の区画（それぞれ、存在すれば）のうちいくつの区画に地雷があるか求めよ。
* より正確には、$i$ 番目 ($1\leqq i\leqq30$) に出力すべき数字は与えられた文字列の $i-1$ 番目の文字、$i$ 番目の文字、$i+1$ 番目の文字のうち `M` であるものの個数である。ただし、$-1$ 番目の文字 や $31$ 番目の文字は `M` ではないとする。
* 出力に含まれる空白文字（改行含む）は無視される。
## 制約
* 入力は `.` もしくは `M` を $30$ 回繰り返したのち改行した文字列である。
* 入力の先頭は `.M` であり、末尾は `M.\n` である。
## 入出力例
### 入力
```
.M..M.MMMM....M.MM..M.MMM...M.
```
### 出力
```
111112233210011222111223210111
```
