```
その干支になる西暦を、1つ答えよ。
```
## 入力
* 2文字の文字列が10個、改行区切りで与えられる。
* 各行の1文字目は`0`-`9`のいずれかであり、甲・乙・丙・丁・戊・己・庚・辛・壬・癸にこの順で対応する。
* 各行の2文字目は`a`-`l`のいずれかであり、子・丑・寅・卯・辰・巳・午・未・申・酉・戌・亥にこの順で対応する。
* 入力の最後には改行が付与される。
## 出力
* 各行それぞれについて、入力の干支になる正の西暦をどれか1つ求めよ。
* 各出力は空白で区切って出力すること。ただし、区切りを構成する空白文字（改行含む）の数や種類は問わない。（たとえば、スペースと改行、あるいは改行2つなどで区切ってもよい）
## 制約
* 入力の干支に対応する西暦が少なくとも1つ存在することが保証される。
## 入出力例
### 入力
```
3l
4e
4c
5j
3h
9j
0a
2a
5l
1f
```
### 出力
```
2007
2048
1998
2029
2027
1993
2044
1996
2019
2025
```
