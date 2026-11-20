---
title: C++ 语法与算法竞赛笔记
published: 2026-11-20
description: C++ 语法要点与算法竞赛基础知识（含 18 张配图）
tags: [C++, 算法, 笔记, 竞赛]
downloadable: true
---

**模板**

```c++
#include <bits/stdc++.h>
using namespace std;
#define endl '\n'
#define int long long
typedef long long ll;
typedef unsigned long long ull;
using i128 = __int128_t;
const int N = 0x7fffffff;
const int mod = 998244353;
constexpr ll INF = 0x3f3f3f3f3f3f3f3f;
const int X4[4] = {1, 0, -1, 0}, Y4[4] = {0, 1, 0, -1};
const int X8[8] = {0, 1, 1, 1, 0, -1, -1, -1}, Y8[8] = {1, 1, 0, -1, -1, -1, 0, 1};
const int Xh[8] = {1, 2, 2, 1, -1, -2, -2, -1}, Yh[8] = {2, 1, -1, -2, -2, -1, 1, 2};
mt19937_64 rng(time(nullptr));

void solve() {
    
}

signed main(){
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);
    int _T = 1;
    // cin >> _T;
    while (_T--){
        solve();
    }
    return 0;
}
/*
      @@@                                    @ @            @ @@ @            @@
    @@@                                      @ @      @ @   @  @@@ @@          @@
   @@   @            @@@                     @  @     @ @    @ @  @ @       @   @@
  @@   @@  @@ @      @ @                      @ @     @ @    @  @ @@ @     @ @   @@
 @@    @ @   @@@     @ @    @@@               @ @     @ @     @ @  @ @     @ @@   @@
@@    @   @ @        @ @    @ @               @ @        @    @ @  @ @@     @ @    @@
@     @ @ @ @        @ @    @ @               @ @      @ @    @@@   @ @     @ @     @@
      @ @ @ @        @ @    @  @    @ @       @ @@@@@@@@ @ @@    @  @ @     @ @      @
@     @ @  @         @ @   @@  @    @ @       @ @      @ @   @@@@@  @ @     @         @
  @  @ @ @ @         @ @   @   @    @ @       @@  @@@@@@@@  @  @ @  @ @      @ @      @@
 @ @ @ @ @ @         @ @ @@@@   @   @@ @       @             @@@    @ @      @ @       @@
   @ @ @ @ @         @ @   @    @@   @ @       @                @ @ @ @      @ @        @
@ @@ @ @ @ @       @@  @ @@@     @   @ @         @@     @  @    @ @ @ @      @ @     @
@ @  @ @ @ @     @@ @ @@@        @   @ @        @  @@@@@@@@@@@  @ @ @ @      @ @      @
@ @  @ @ @ @   @@   @ @   @ @ @  @   @  @       @@@   @        @@ @ @ @      @ @    @  @
  @  @ @ @ @        @ @     @ @       @ @     @       @    @@@    @ @ @      @ @     @ @
@@@  @ @ @ @        @     @@@@@@@@@   @ @    @  @@    @    @  @ @ @  @       @ @     @  @
@    @ @ @ @        @    @@       @   @ @    @ @ @   @   @@ @ @@  @  @       @ @      @ @
 @   @ @ @ @          @@  @   @  @@@  @ @   @ @@  @  @  @@  @  @@    @       @ @      @ @
 @   @ @ @ @            @ @ @ @@  @ @ @ @  @  @   @@  @@    @   @    @       @ @       @ @
 @   @ @ @@ @      @@ @@  @    @      @ @ @  @@    @ @    @@   @@    @  @    @ @       @ @
  @  @ @  @ @      @  @ @ @@  @@@@@ @ @ @   @@    @@@@   @@    @  @@ @  @    @ @       @ @
 @     @@ @ @      @@ @ @   @@@    @  @    @@      @         @@ @@ @ @  @    @ @       @ @
@@    @ @ @@ @    @  @ @ @@      @ @  @    @                    @  @ @  @    @ @       @ @
@     @ @  @ @@   @ @ @@        @     @@@@@                   @@   @    @    @ @       @ @
@     @ @  @  @  @  @        @@@                                   @   @     @ @       @ @
@ @@  @ @      @@@  @ @                                           @@   @     @ @      @ @
   @  @ @    @ @    @ @@                                          @    @     @ @     @@ @
    @ @ @    @ @  @ @  @@@                                       @@ @  @     @ @     @ @@
    @@@ @    @ @@ @ @                                          @@@    @     @ @     @  @
   @    @    @ @  @ @   @@@@                                 @@    @  @     @ @     @ @
   @         @ @  @  @@@@  @@                              @@       @@@     @ @        @
   @         @ @  @         @@                          @ @@         @      @  @       @
   @ @ @ @   @ @  @  @        @@@@@@@@               @@@  @          @      @  @    @ @ @@
   @ @ @ @   @ @  @  @@               @@@@@@@@     @@@    @          @      @   @  @@  @@
   @ @ @     @    @ @ @ @@                    @@@@@@    @ @       @  @      @   @@ @ @
   @  @ @ @   @   @ @@@  @              @              @@  @   @ @@  @     @     @ @ @  @@
    @  @@ @       @       @             @ @          @@    @  @@     @     @  @ @      @@
    @@  @@@        @ @@@@@ @            @@ @@@@  @@@@      @@  @     @    @@  @ @  @@
     @@ @ @@       @ @     @           @@      @@           @@       @    @   @@@     @@@@
        @@         @ @      @  @@     @@                     @@@     @    @ @@      @@
      @@ @@ @      @ @ @@@@ @ @  @@@@@                          @@   @   @ @       @  @@@@
     @@   @  @     @ @      @@  @                                  @@@@  @ @     @  @@
    @     @@       @ @      @  @@@                             @@  @   @@  @   @ @  @
    @  @ @ @ @@       @     @ @ @                              @  @@   @  @   @@ @ @@@
*/
```

经典题目合集：

[蓝桥杯考前复习冲刺 - 洛谷](https://www.luogu.com.cn/contest/319883#description)

# 1.时空复杂度

## 1. 时间复杂度

**怎么衡量一个程序运行得快不快？**

我们当然可以看运行时间，但不同电脑、不同测试数据下，运行秒数会不一样。算法学习中更常用的方法是：观察**输入规模变大时，程序需要执行的基本操作次数如何增长**。这就是分析时间复杂度的出发点。

例如，下面一段代码循环了 $n$ 次：

```cpp
int cnt = 0;
for(int i = 1; i <= n; i++) 
    cnt++;
```

它的运行次数与 $n$ 成正比，因此通常记为 $O(n)$。分析时先抓增长最快的部分，不必纠结于精确地数出了 $2n+1$ 次还是 $3n+2$ 次操作。

再看双重循环：

```cpp
int cnt = 0;
for(int i = 1; i <= n; i++) 
{
    for(int j = 1; j <= n; j++) 
        cnt++;
}
```

外层执行 $n$ 次，每一次外层循环中，内层又执行 $n$ 次，因此是 $O(n^2)$。

再看一个：

```cpp
int cnt = 0;
for(int i = 1; i <= n; i++) 
{
    for(int j = 1; j <= i; j++) 
		cnt++;
}
```

执行次数也是 $1+2+\cdots+n=n(n+1)/2$，仍为 $O(n^2)$。

下面的循环则不一样：

```cpp
int cnt = 0;
for(int i = 1; i <= n; i *= 2) 
    cnt++;
```

$i$ 的取值是 $1,2,4,8,\ldots$，每次翻倍，只需大约 $\log_2 n$ 次就超过 $n$，所以是 $O(\log n)$。时间复杂度的对数底数通常省略，因为换底只会带来常数倍差异。

再补充两个特别常见的情况：

- 连续写两段各执行 $n$ 次和 $m$ 次的循环，总复杂度是 $O(n+m)$，不是 $O(nm)$。
- 如果循环条件是 $i * i <= n$，且 $i$ 每次加 1，循环大约执行 $\sqrt n$ 次，复杂度是 $O(\sqrt n)$。

**进阶补充（听懂直觉后再看即可）：** 在严格的大 $O$ 定义中，若存在与 $n$ 无关的正常数 $C,n_0$，使得对所有 $n\ge n_0$ 都有 $f(n)\le Cg(n)$，则可以写 $f(n)=O(g(n))$。严格说来 $O(n)$ 也是 $O(n^2)$ 的上界；但实际讲算法时，我们通常选尽量紧的增长量级来描述。

（看不懂不需要懂，我也记不住搞不清具体定义）

（fun fact：我真的很不会分析时间复杂度，经常乱搞，让我来讲其实很搞笑）

## 2. 空间复杂度

空间复杂度看的是程序需要的存储量怎样随数据规模增长，可以类比时间复杂度。

例如：

- 只使用固定数量的普通变量：额外空间 $O(1)$。
- xxxxxxxxxx18 1`#include<iostream>`2`#include<cstdio>`3`#include<cstdarg>` 4`using namespace std;`5`int mulSum(int n,...){`6    `va_list argptr;`7    `va_start(argptr,n);`8    `int sum=0;`9    `for(int i=0;i<n;i++){`10        `sum+=va_arg(argptr,int);`//变量和参数类型11    `}`12    `va_end(arrgptr);`13    `return sum;`14`}`15`int main(){`16`int total=mulSum(3,1,2,9);`//3个数，1，2，9 17`cout<<total<<endl;`    18`}`cpp
- 开一个 $n\times n$ 的二维数组：额外空间 $O(n^2)$。

一般情况下，$int$ 占 4 字节，$long\;\;long$ 占 8 字节。例如 $10^6$ 个 $long\;\;long$ 约占 8 MB；$4\times10^7$ 个 $long\;\;long$ 约占 320 MB，很多题目的内存限制无法容纳。一般来说，题目不会卡你空间，但是看到题目给的空间限制较小时，也要警觉，是不是要用某种办法做空间优化，例如动态规划时用滚动数组优化。

## 3. 补充的点

1. 算法竞赛中经常分析**最坏情况下**的时间复杂度。一组恰好很容易的数据运行得快，不代表所有测试数据都能通过。
2. 看到数据范围，先大致估算操作量。例如 $n=10^5$ 时，$O(n)$ 通常很轻松，而 $O(n^2)$ 已经是 $10^{10}$ 级操作，通常不可行。
3. “一秒能跑多少次运算”没有统一可靠的固定值，评测环境、常数、输入输出和操作类型都会影响结果。不要把某个具体数字当作公式。我个人一般认为评测机一秒能跑 $10^8$ 的数量，但实际和比赛的机器，和你代码被忽略的系数（我们一般称常数）有关，可能有时候 $10^9$ 也能跑过（比如只有最简单的加法），大常数 $5 \times 10^7$ 都过不了（比如某些重工业数据结构）
4. 下表只是方便形成直觉的参考，不保证任何题都能按表通过：

| 典型数据规模                   | 可以优先考虑的复杂度（仅供参考）                |
| ------------------------------ | ----------------------------------------------- |
| $n \leq 10$                    | $O(n!)$                                         |
| $n\le 25$                      | $O(2^n)$                                        |
| $n\le 500$                     | $O(n^3)$                                        |
| $n\le 5000$                    | $O(n^2)$                                        |
| $10^5 \le n\le 10^6$           | $O(n)$、$O(n\log n)$                            |
| $10^7 \le n\le 10^8$           | $O(n)$，也要考虑常数与时限                      |
| $n$ 极大（如 $n \le 10^{18}$） | 往往不能逐个遍历，考虑 $O(\log n)、O(1)$ 等做法 |


**时空复杂度的例题**

#### 第一题：[P1075 质因数分解](https://www.luogu.com.cn/problem/P1075)

题目保证正整数 $n$ 是**两个不同质数的乘积**，要求输出其中较大的那个质数。例如 $21=3\times7$，应输出 7。

注意：这道题**不是一般的“判断一个数是否为质数”**，而是利用题目给定的特殊条件寻找质因数。

首先要知道唯一分解定理:一个数能且只能分解为一组质数的乘积。可知，若输入的数满足题目条件，他就只能分解为两个质数的乘积。所以在比他小且大于1的自然数中，只有那两个数能整除它，之间不可能再有任何合数或质数能整除它了，因为最小的能整除它的合数已经是他本身了。

**1. 朴素做法：$O(n)$ 时间，$O(1)$ 额外空间**

因为两个质因数都能整除 $n$，可以从 $n-1$ 开始倒着检查，找到的第一个大于 1 的因数，就是较大的质因数。

```cpp
void Aiden() 
{
    ll n;
    cin >> n;
    for(ll i = n - 1; i >= 2; i--) 
    {
        if(n % i == 0) 
        {
            cout << i << '\n';
            break;
        }
    }
}
```

**2. 优化做法：$O(\sqrt n)$ 时间，$O(1)$ 额外空间**

设 $n=pq$ 且 $p<q$，一定有 $p<\sqrt n$。所以不必从 $n$ 往下找较大的质因数，转而从 2 开始往上找较小的质因数 $p$；一旦找到，答案就是 $n/p$。

```cpp
void LiangBaiKai() 
{
    ll n;
    cin >> n;
    for(ll i = 2; i * i <= n; i++) 
    {
        if(n % i == 0) 
        {
            cout << n / i << '\n';
            break;
        }
    }
}
```

---

# *2*`STL`

题单：

## 万能头文件`<bits/stdc++.h>`

小序：学到这里好颓废，进度推不动了——3/10.

## **向量，构造数组`vector`**；

数组定义的话，比题目要求的加个10，避免溢出；

补充：`3e8`：3*10^8;

```c++
#include<bits/stdc++.h>
//数组类似于栈，先进后出；
using namespace std;
int main(){
    vector<int> arr(100,1);//设置一个数组，长度为100，初始为1；
    //设置一个 长度为5，有6列的数组，初始化为10； 
    vector<vector<int>> dp(5,vector<int>(6,10));
    //尾接，尾删；
    arr.push_back(1);//尾接，加入
	arr.push_back(2);
     //长度判断；
    cout<<arr.size()<<endl;
    //清空命令
    arr.clear();
    //bool判断是否为空；
    arr,empty();//真为0，否为1（空）；
    //用处e.g:if(arr.empty()){
    //即如果是空的，执行一些东西；
    //}
    //补长为5个，多的部分，初始化为6；
    arr.resize(5,6);
    //减短为1个元素，直接砍掉到第1个；
    arr.resize(1);
	arr.pop_back();//尾删，删掉最后一个，（）内无数字，比如此处把2删了；
	for(auto& ele:arr){
	 	cout<<ele<<endl; 
	 }
	return 0; 
}
```

如果不卡常的话，就可以直接用它而不需要手写栈了。
另外，vector 也可以当栈用，vector 的 .back() 取尾部元素，就相当于取栈顶，.push_back() 相当于进栈，.pop_back() 相当于出栈。



```c++
vector<int> arr = {1, 2, 3};
for (auto& ele : arr)  // ✅ 完整格式：for (变量 : 容器)
{    
    cout << ele << " "; 
}
```

二维动态数组

```c++
vector<vector<int>> ans(n);
//创建一个名为 ans 的二维数组，它里面包含了 n 个空的一维数组。
//假设 n = 3，内存中 ans 的初始状态就像这样：
ans[0] -> []  (空数组)
ans[1] -> []  (空数组)
ans[2] -> []  (空数组)
```



### 示例，一维数组的反转

```c++
#include<bits/stdc++.h>
using namespace std;
int main(){    
vector<int> arr; //arr无（），直接写arr
  int n;
  while(cin>>n){//一直输入，一直循环；
  	if(n==0){
  		break;
	  }
	  arr.push_back(n);//在循环中，把输入的n，压到数组中；
  }
  reverse(arr.begin(),arr.end());//begin后面有（），此处为翻转操作
  for(auto& ele:arr){//中间是：（冒号）不是；！！！
  	cout<<ele<<" ";
  }
   return 0;
}
```

### 二维数组，`B2106` 矩阵转置

```c++
#include<bits/stdc++.h>

using namespace std;

int main(){
	int n,m;
	cin>>n>>m;
	vector<vector<int>> arr(n+1,vector<int>(m+1));
    for(int i=1;i<=n;i++){
    	for(int j=1;j<=m;j++){
    		cin>>arr[i][j];
		}
	}
	for(int j=1;j<=m;j++){
    	for(int i=1;i<=n;i++){
    		cout<<arr[i][j]<<" ";
		}
        cout<<endl;
	}
	return 0;
}
```

注意第二段输出的循环，下面这样写

```c++
for(int i=1;i<=n;i++){
    	for(int j=1;j<=m;j++){
    	    cout<<arr[j][i]<<" ";
		}
		cout<<endl;
	}
```

是错误的，这样行列的输出遍历的顺序错了，达不到需要的格式；

###  输入形式

```c++
1
int main() {
    int n;
    cin >> n;
    
    // 关键修复：创建大小为n的vector，初始值默认0
    vector<int> pf(n); 
    
    for(int i = 0; i < n; i++) {
        cin >> pf[i]; // 现在下标合法
    }
    // ... 后续代码 ...
}
2
    int main() {
    int n;
    cin >> n;
    
    vector<int> pf; // 空vector
    
    for(int i = 0; i < n; i++) {
        int temp;
        cin >> temp;
        pf.push_back(temp); // 关键修复：动态添加元素
    }
    // ... 后续代码 ...
}
```

### `vector.resize(k)`

：**把 vector 实际元素个数改成 k 个，开好下标 0~k-1 的位置，可以直接 `v[j]` 读写**

[AT_abc457_b [ABC457B\] Arrays - 洛谷](https://www.luogu.com.cn/problem/AT_abc457_b)

```c++
#include<iostream>
#include<vector>
using namespace std;

int main() {
	int n;
	cin >> n;
	vector<vector<int>> a(n);
	for (int i = 0; i < n; i++) {
		int l;
		cin >> l;
		a[i].resize(l);
		for (int j = 0; j < l; j++) {
			cin >> a[i][j];
		}
	}
	int x, y;
	cin >> x >> y;
	cout << a[x - 1][y - 1] << endl;
	return 0;
}
```

[C - Long Sequence](https://atcoder.jp/contests/abc457/tasks/abc457_c)

加强版：

> [!WARNING]
>
> 十年`oi`一场空，不开long long见祖宗

```c++
#include<iostream>
#include<vector>
#include<string>
#include <numeric>
#include<algorithm>
using namespace std;
int main() {
	long long n,k;
	cin >> n>>k;
	vector<vector<long long>> arr(n);
	vector<long long> lk(n, 0);
	for (long long i = 0; i < n; i++) {
		int l;
		cin >> l;
		lk[i] = l;
		arr[i].resize(l);
		for (long long j = 0; j < l; j++) {
			cin >> arr[i][j];
		}
	}
	vector<long long> c(n, 0);
	for (long long i = 0; i < n; i++) {
		cin >> c[i];
	}
	for (long long i = 0; i < n; i++) {
		long long k1 = lk[i] * c[i];
		if (k > k1) {
			k -= k1;
		}
		else {
			long long st = (k - 1) % lk[i];
			cout << arr[i][st] << endl;
			return 0;
		}
	}
	return 0;
}
```

### 删元素

```c++
// 删除所有等于 5 的元素
    v.erase(remove(v.begin(), v.end(), 5), v.end());
// 删除所有 大于 10 的元素
v.erase(
    remove_if(v.begin(), v.end(), [](int x) {
        return x > 10;
    }),
    v.end()
)
```

```c++
//到开动态删除元素
for(int i=st.size()-1;i>=0;i++){
					st[i]--;
					if(st[i]==0){
						st.erase(st.begin()+i);
					}
				} 
```

### 删除指定的行或列

#### 行

```c++
//行：vec.erase(vec.begin() + 行下标)
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<vector<int>> mat = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    int delRow = 1; // 删除第2行（下标1）
    mat.erase(mat.begin() + delRow);

    // 打印结果
    cout << "删除第" << delRow << "行后：\n";
    for (auto &row : mat) {
        for (int x : row) cout << x << " ";
        cout << endl;
    }
    return 0;
}
```

#### 列

```c++
2. 删除指定列
遍历每一行，对单行 vector 执行 row.erase(row.begin() + 列下标)
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<vector<int>> mat = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    int delCol = 1; // 删除第2列（下标1）
    for (auto &row : mat) {
        row.erase(row.begin() + delCol);
    }

    // 打印
    cout << "删除第" << delCol << "列后：\n";
    for (auto &row : mat) {
        for (int x : row) cout << x << " ";
        cout << endl;
    }
    return 0;
}
```



## 队列queue

先进先出；

```c++
构造
queue<类型> que
queue<int> que;
进队
.push(元素)
que.push(1);
出队
.pop()
que.pop();
取队首
.front()
int a = que.front();
取队尾
.back()
int a = que.back();
```

### 注意事项：

```c++
不可访问内部元素！下面都是错误用法
for (int i = 0; i < que.size
(); i++)
    cout << que[i] << endl;
for (auto ele : que)
    cout << ele << endl;
//可以去取队首，队尾
取队首	.front()	
    int a = que.front();
取队尾	.back()	
    int a = que.back();
```

### 代码及注释

```c++
`#include<bits/stdc++.h>`

`using namespace std;`

`int main(){`
	`queue<int> que;`
	`que.push(1);`
	`que.push(2);`
	`que.push(3);`
	`cout<<que.front()<<endl;//队首为1` 
	`cout<<que.back()<<endl;//队尾为3` 
	`que.pop();//删掉1个` 
	`cout<<que.front()<<endl;//队首为2`
	`cout<<que.back()<<endl;//队尾为3`
	`que.pop();`
	`cout<<que.size()<<endl;//此时剩下1个` 
	`cout<<que.empty()<<endl;//不为空，判断为0；` 
	`return 0;`
``	
`}`
```

## 堆/快速排序：priority_queue

不是线性结构，不可以用下标访问

堆 是一种能快速取出最大值或最小值的数据结构。
在 C++ 里通常用 priority_queue 表示。

### 代码及注释

#### 大顶堆

```c++
#include<bits/stdc++.h>

using namespace std;

int main(){
	priority_queue<int> pque;//储存int的大顶堆，从大往下排 ； 
	pque.push(1);
	cout<<pque.top()<<endl;//输出堆顶：1 ； 
	pque.push(9);
	cout<<pque.top()<<endl;//输出堆顶：9 ； 
	pque.push(6);
	cout<<pque.top()<<endl;//输出堆顶：9 ； 
	pque.push(12);
	cout<<pque.top()<<endl;//输出堆顶：12 ；
	pque.pop();//删掉12 ； 
	cout<<pque.top()<<endl;//输出：9 ； 
	pque.pop();//删掉9； 
	cout<<pque.top()<<endl;//输出：6 ； 
	return 0;
}
```

#### 小顶堆

```c++
#include<bits/stdc++.h>

using namespace std;

int main(){
	priority_queue<int,vector<int>,greater<int>> pque;//储存int的小顶堆，从小往大排 ； 
	pque.push(12);
	cout<<pque.top()<<endl;//输出堆顶：12 ； 
	pque.push(26);
	cout<<pque.top()<<endl;//输出堆顶：12 ； 
	pque.push(5);
	cout<<pque.top()<<endl;//输出堆顶：5 ； 
	pque.push(7);
	cout<<pque.top()<<endl;//输出堆顶：5 ；
	pque.pop();//删掉 5； 
	cout<<pque.top()<<endl;//输出：7 ； 
	pque.pop();//删掉；7 
	cout<<pque.top()<<endl;//输出：12 ； 
	return 0;
}
```

### 例子：

https://www.luogu.com.cn/problem/P1090

```c++
#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    priority_queue<int,vector<int>,greater<int>> q;
    for(int i=0,x;i<n;i++){
        cin>>x;
        q.push(x);
    }
    int sum=0;
    while(q.size()>1){
        int m1=q.top();
        q.pop();
        int m2=q.top();
        q.pop();
        sum+=m1+m2;
        q.push(m1+m2);
    }
    cout<<sum<<endl;
    return 0;
}
```

[C - Variety](https://atcoder.jp/contests/abc461/tasks/abc461_c)

贪心 + 排序 + 堆（这个我不会写，看不懂，1200的时候再来挑战）；

```c++
#include<iostream>
#include<vector>
#include<algorithm>
#include<map>
#include<queue>
using namespace std;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr);

	int n, k, m;
	cin >> n >> k >> m;

	// clr[i]：第 i 个宝石的颜色
	// val[i]：第 i 个宝石的价值
	vector<int> clr(n);
	vector<long long> val(n);

	for (int i = 0; i < n; i++) {
		cin >> clr[i] >> val[i];
	}

	// grp[color]：这个颜色下所有宝石的价值
	map<int, vector<long long>> grp;
	for (int i = 0; i < n; i++) {
		grp[clr[i]].push_back(val[i]);
	}

	// 每种颜色内部按价值从大到小排序
	for (auto &p : grp) {
		sort(p.second.rbegin(), p.second.rend());
	}

	// all：所有宝石，存成 (价值, 颜色)
	vector<pair<long long, int>> all;
	for (auto &p : grp) {
		int color = p.first;
		for (long long x : p.second) {
			all.push_back({x, color});
		}
	}

	// 按价值从大到小排序
	sort(all.rbegin(), all.rend());

	// sum：当前选中 k 个宝石的总价值
	long long sum = 0;

	// cnt[color]：当前选中集合里，这种颜色出现了多少次
	map<int, int> cnt;

	// dup：小根堆，存“可删除的重复宝石价值”
	// 作用：每次要删掉最小的重复宝石，损失最小
	priority_queue<long long, vector<long long>, greater<long long>> dup;

	// colorCnt：当前选中的宝石里，有多少种不同颜色
	int colorCnt = 0;

	// 第一步：先选价值最大的 k 个宝石
	for (int i = 0; i < k; i++) {
		long long x = all[i].first;
		int color = all[i].second;

		sum += x;

		// 如果这种颜色第一次出现，颜色种类数 +1
		if (cnt[color] == 0) {
			colorCnt++;
		} else {
			// 否则这是重复颜色，放进堆里，后面可能要删掉
			dup.push(x);
		}

		cnt[color]++;
	}

	// add：还没出现过的颜色中，每种颜色最大的那个宝石价值
	vector<long long> add;
	for (auto &p : grp) {
		int color = p.first;

		// 如果这种颜色没被选到，就把它的最大值放进 add
		if (cnt[color] == 0) {
			add.push_back(p.second[0]);
		}
	}

	// 从大到小排序，优先加入更大的“新颜色宝石”
	sort(add.rbegin(), add.rend());

	// 第二步：如果颜色种类还不够 m，就用“新颜色最大值”替换“重复颜色最小值”
	int id = 0;
	while (colorCnt < m) {
		long long in = add[id++]; // 要加入的新颜色宝石
		long long out = dup.top(); // 要删掉的重复宝石
		dup.pop();

		sum += in - out;
		colorCnt++;
	}

	cout << sum << endl;
	return 0;
}
```

等一下，ai一败涂地，还是题解好用，思路nb注意struct的用法；

[题解：AT_abc461_c [ABC461C\] Variety - 洛谷专栏](https://www.luogu.com.cn/article/3ibrqv8z)

```c++
#include <iostream>
#include <algorithm>
#include <map>
#define debug(a) cerr << (#a) << " = " << (a) << endl;
#define int long long
#define maxn 200010
#define endl '\n'
using namespace std;

// n：宝石总数
// k：最终要选的宝石数
// m：至少要有的不同颜色数
int n, k, m;

// use[i]：排序后第 i 个宝石是否已经被选中
bool use[maxn];

// mp[color]：这种颜色是否已经出现过
//可以写成bool数组的形式；甚至更快；
map<int, bool> mp;

// 每个宝石：c 是颜色，v 是价值
//结构体：•	定义了一个叫 node 的类型
//•	这个类型里有两个成员：
//•	c：颜色
//•	v：价值
//•	同时顺手定义了一个 a[maxn] 数组，里面每个元素都是 node
//但用 struct 后，一个对象就能把这两个信息绑在一起，更方便排序和传递。
struct node {
    int c, v;
} a[maxn];

// 按价值从大到小排序
bool cmp(node x, node y) {
    return x.v > y.v;
}

void solve() {
    cin >> n >> k >> m;

    // 读入所有宝石
    for (int i = 1; i <= n; i++) cin >> a[i].c >> a[i].v;

    // 按价值从大到小排序
    sort(a + 1, a + n + 1, cmp);

    int cnt = 0;   // 已经选了多少种不同颜色
    int ans = 0;   // 当前总价值

    // 第一步：先选出 m 种不同颜色的宝石
    // 从大到小扫，第一次遇到某种颜色，就选它
    for (int i = 1; i <= n && cnt < m; i++) {
        if (mp[a[i].c]) continue; // 这种颜色已经选过了，跳过

        cnt++;               // 新颜色数 +1
        use[i] = true;       // 这个宝石已经被选中
        mp[a[i].c] = true;   // 记录这种颜色已经出现
        ans += a[i].v;       // 累加价值
    }

    // 第二步：颜色数已经够了，再补到 k 个
    int cntk = m; // 当前已经选了 m 个宝石
    for (int i = 1; i <= n && cntk < k; i++) {
        if (use[i]) continue; // 已经选过的宝石不能重复选

        cntk++;        // 选了一个新宝石
        ans += a[i].v; // 加上它的价值
    }

    cout << ans << endl;
}

signed main() {
    ios::sync_with_stdio(false);
    cin.tie(0), cout.tie(0);

    int t = 1;
    // cin >> t;
    while (t--) solve();

    return 0;
}
```

[D - Automat](https://atcoder.jp/contests/abc476/tasks/abc476_d)



## 双端队列deque

遇到的时候去搂一眼视频；

https://ac.nowcoder.com/acm/contest/130222/E

![image-20260329160141859](/assets/images/posts/cpp-algo/img-01.png)

代码：

```c++
#include<bits/stdc++.h>
using namespace std;

int main() {
	int T;
	cin >> T;
	while (T--) {
		int n, k;
		cin >> n >> k;
		deque<int> q;

		// 读入数据
		for (int i = 0; i < n; i++) {
			int x;
			cin >> x;
			q.push_back(x);
		}

		// 模拟 k 次
		for (int i = 0; i < k; i++) {
			int a = q[0];
			int b = q[1];

			if (a > b) {
				// a 赢，b 输
				q.pop_front();
				q.pop_front();
				q.push_front(a);
				q.push_back(b);
			} else {
				// b 赢，a 输
				q.pop_front();
				q.pop_front();
				q.push_front(b);
				q.push_back(a);
			}
		}

		// 输出 【不用auto，最稳妥】
		for (int i = 0; i < q.size(); i++) {
			cout << q[i] << " ";
		}
		cout << endl;
	}
	return 0;
}
```



## 集合set

### 代码及注释

```c++
set<int> st1;               // 储存int的集合（从小到大） 
set<int, greater<int>> st2; // 储存int的集合（从大到小）
```

#### 从小到大

```c++
#include<bits/stdc++.h>

using namespace std;

int main(){
	set<int> jh;
	jh.insert(1);
	jh.insert(2);
	jh.insert(2);
	jh.insert(4);
	jh.insert(1);
	cout<<jh.size()<<endl; 
	jh.erase(1);//把1删掉了 
	cout<<jh.size()<<endl; 
    jh.erase(2);//俩个2都删掉；
	cout<<jh.size()<<endl; 
	if(jh.count(4)){
		cout<<"yes"<<endl;//判断4在不在集合中 
	} 
	for(auto &ele:jh){
		cout<<ele<<endl;
	} 
	 return 0;
}
```



#### 从大到小

```c++
#include<bits/stdc++.h>

using namespace std;

int main(){
	set<int,greater<int>> jh;
	jh.insert(1);
	jh.insert(3);
	jh.insert(2);
	jh.insert(4);
	jh.insert(1);
	cout<<jh.size()<<endl; 
	jh.erase(1);//把1删掉了 
	//cout<<jh.size()<<endl; 
    jh.erase(3);//删掉3；
	//cout<<jh.size()<<endl;  
	if(jh.count(4)){
		cout<<"yes"<<endl;//判断4在不在集合中 
	} 
	for(auto &ele:jh){
		cout<<ele<<" ";
	} 
	 
}
```

## 多重集合

### 代码及注释

```c++
#include<bits/stdc++.h>

using namespace std;

int main(){
    multiset<int> q;
	q.insert(1);
	q.insert(3);
	q.insert(1);
	q.insert(3);
	q.insert(1);
	q.insert(5);
	cout<<q.count(1)<<endl;//输出3，有3个1；
	q.erase(1);//把3个1都删掉了； 
	cout<<q.count(1)<<endl;//统计1的个数 
	//删了一个3 
	auto it=q.find(3);
	if(it!=q.end()){
		q.erase(it);
	}
	cout<<q.count(3)<<endl;
	return 0;
} 
```

## 无序集合unordered_set

![image-20260612163859565](/assets/images/posts/cpp-algo/img-02.png)

```c++
unordered_set<int> s;
s.insert(5);//插入5
if (s.count(5)) //判断在不在
```

•	去重：重复插入同一元素只保留一个。
•	平均 O(1) 查找/插入/删除（极端情况可能退化）。
•	无序：遍历顺序不可预测。

```c++
•	insert(x)：插入元素
•	erase(x)：删除元素
•	count(x)：判断是否存在（返回 0/1）
•	find(x)：返回迭代器（不存在则 end()）
```

[B - Happy Number](https://atcoder.jp/contests/abc439/tasks/abc439_b)

```c++
#include<iostream>
#include<vector>
#include<cmath>
#include<unordered_set>
using namespace std;
int st(int n) {
	long long sum=0;
	while (n > 0) {
		int d = n % 10;
		sum += d * d;
		n /=10;
	}
	return sum;
}
int main() {
	int n;
	cin >> n;
	unordered_set<int> skt;
	while (n != 1 && !skt.count(n)) {
		skt.insert(n);
		n = st(n);
	}
	if (n == 1) {
		cout << "Yes" << endl;
	}else{
		cout << "No" << endl;
	}
	return 0;
}
```

### 把unordered_set内的元素转到vector中

```c++
#include <iostream>
#include <unordered_set>
#include <vector>
using namespace std;

int main() {
    unordered_set<int> st = {3, 1, 4, 2};
    // 从 begin 到 end 全部转入 vector
    vector<int> vec(st.begin(), st.end());

    for (int x : vec) cout << x << " ";
    return 0;
}
```

```c++
//传统写法，适合需要额外处理元素的场景：
unordered_set<int> st = {3, 1, 4, 2};
vector<int> vec;

for (int x : st) {
    vec.push_back(x);
}
```

`ector<int> vec(st.begin(), st.end())`：**一键全拷贝**，代码短，但没法中途改元素、筛元素。

循环 +`push_back`：自由度高，**遍历中可加判断、计算、过滤**，适合有业务逻辑的场景。

```c++
for (int x : st) {
    int tmp = x + 10;  // 加工元素
    vec.push_back(tmp);
}

for (int x : st) {
    if (x > 2) {       // 筛选条件
        vec.push_back(x);
    }
}

for (int x : st) {
    if (x % 2 == 0) { // 只取偶数
        vec.push_back(x * 2); // 再翻倍
    }
}
```



## 排序`sort`

默认的 `sort` 是**升序排序**（从小到大）

### 代码及注释

好好看学习使用`cmp`函数的作用；

#### 基础版（默认升序）

```c++
#include<bits/stdc++.h>
using namespace std;
int main(){
vector<int> st={0,3,4,2,8,6,9};
int l=2,r=5;
//对下标为【2，5】的元素进行排序，即4，2，8，6；
sort(st.begin()+l,st.begin()+r+1); 
for(int i=l;i<r;i++){//遍历输出3个 
	cout<<st[i]<<" ";//结果为2，4，6 
}
return 0;
}
```
#### 降序版


```c++
#include<bits/stdc++.h>
using namespace std;
bool cmp(int x,int y){
	return x>y;
}
int main(){
vector<int> st={0,3,4,2,8,6,9};
int l=2,r=5;
//对下标为【2，5】的元素进行排序，即4，2，8，6；
sort(st.begin()+l,st.begin()+r+1,cmp); //挂个cmp自定义函数；
for(int i=l;i<r;i++){//遍历从大到小输出3个 
	cout<<st[i]<<" ";//结果为8,6,4;
}
return 0;
}
```
#### 改编版


```c++
#include<bits/stdc++.h>
using namespace std;
bool cmp(int x,int y){
	return abs(x-3)>abs(y-3);//离3的绝对值大的；
}
int main(){
vector<int> st={0,3,4,-7,8,6,9};
int l=2,r=5;
//对下标为【2，5】的元素进行排序，即4，2，8，6；
sort(st.begin()+l,st.begin()+r+1,cmp); 
for(int i=l;i<r;i++){//遍历从大到小输出3个 
	cout<<st[i]<<" ";//结果为8,6,4;
}
return 0;
}
```

## 字符串 `string`

易错点：`[P1055 [NOIP 2008` 普及组\] ISBN 号码 - 洛谷](https://www.luogu.com.cn/problem/P1055#ide)

```c++
string s;

getline(cin,s);

getchar();//吃换行符
string s7_str = to_string(s7)//string和int的强转；stoi(s)->int;
    //string s = "123";
//////int num = stoi(s); // C++11
// 老版本：atoi(s.c_str())

    s6 += (s5[j] - '0') * j;
s5[j] - '0'：用字符减去 '0'，就可以得到对应的数字（比如 '6' - '0' = 6）
    #include <iostream>
#include <string>
using namespace std;

int main() {
    string str = "010111";
    int arr[100];  // 数字数组

    // 逐个转成数字存入数组
    for (int i = 0; i < str.size(); i++) {
        arr[i] = str[i] - '0';  // 字符转数字的小技巧
    }

    // 输出数字数组
    for (int i = 0; i < str.size(); i++) {
        cout << arr[i] << " ";
    }
    // 输出：0 1 0 1 1 1
    return 0;
}
```

### 代码及注释

```c++
#include<bits/stdc++.h>

using namespace std;

int main(){
	string s1;
	string s2;
	cin>>s1;
    s2="abclkj";
	cout<<s1.size()<<endl;
	cout<<s1+s2<<endl;
	s2+='f';//末尾加上f 
	reverse(s2.begin(),s2.end());//反转s2； 
	cout<<s2<<endl;
	string s3=s2.substr(2,4);//从下标为2，往后取4个； 
	cout<<s3<<endl;
	return 0;
} 
```

具体刷到再说；

#### string(数量, 字符)。 

作用是生成一个由指定数量的相同字符组成的字符串；[C-其实我是小苯_牛客周赛 Round 144](https://ac.nowcoder.com/acm/contest/134957/C)

```c++
#include<bits/stdc++.h>
using namespace std;
int n,m;
int main(){
	cin>>n>>m;
	if(n>m){
        if(n-m==1){cout<<"1";}
		else cout<<string((n-m-1),'9')<<string((m-1),'0')<<"1";
		cout<<" ";
		cout<<string((n-m),'9')<<"8"<<string((m-1),'9'); 
	}else if(n<m){
        if(m-n==1){cout<<"1";}
		else cout<<string((m-n-1),'9')<<string((n-1),'0')<<"1";
		cout<<" ";
		cout<<string((m-n),'9')<<"8"<<string((n-1),'9');
	}else{
		cout<<"0";
		cout<<" ";
		cout<<string((n-m),'9')<<"8"<<string((m-1),'9');
	}
	return 0;
} 
```



### 例子：

https://www.luogu.com.cn/problem/B2117

```c++
#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    string s;
    for(int i=0;i<n;i++){
        
        cin>>s;
        for(int j=1;j<s.size();j++){
            if(s[j]>='A'&&s[j]<='Z'){//stl写法：if(isupper(s[j])){}
                s[j]+=32;
            }
        }
        if(s[0]>='a'&&s[0]<='z'){//stl写法：if(islower(s[0])){}
            s[0]-=32;
        }
        cout<<s<<endl;
    }
    return 0;
}
```

### 判断子串find

```c++
string s, t;
cin >> s >> t;
// s.find(t)：查找t在s中第一次出现的位置
if (s.find(t) != string::npos) {
    cout << "t是s的子串";
} else {
    cout << "不是";
}
```



### 遍历预处理字串

骗你的，遇到这种情况，想优化思路；

•	t：所有子串数量 n*(n+1)/2

`见ABC458,nk149B`;

[C - C Stands for Center](https://atcoder.jp/contests/abc458/tasks/abc458_c)

```c++
#include<bits/stdc++.h>
using namespace std;
int main(){
	string s;
	cin>>s;
    //十年oi一场空，不开long long见祖宗；
	long long cnt=0;
	long long n=s.size();
	for(long long i=0;i<n;i++){
		if(s[i]=='C'){
			cnt+=min(i+1,n-i);
		} 
	}
	cout<<cnt<<endl;
	return 0;
}
```

[B-小红的好串计数_牛客周赛 Round 145](https://ac.nowcoder.com/acm/contest/134981/B)

```c++
for (int i = 0; i < n; i++) {
	for (int j = i; j < n; j++) {
		string s1 = s.substr(i, j - i + 1);
		}
	}
}
```

```c++
#include<iostream>
#include<string>
using namespace std;
//补集思想
int main() {
	ios::sync_with_stdio(0); cin.tie(0);
	long long n;
	cin>>n;
	string s;
	cin >> s;
    //所有的子串
	long long total = n*(n+1)/2;
    //重复部分e.g1111的长度
	long long len = 1;
    //不符合条件的字串的数量
	long long sum = 0;
	for (int i = 1; i < n; i++) {
		if (s[i] == s[i - 1]) {
			len++;
		}
		else {
            //在遇到字符变化时，当前连续段已经结束，必须：
            //1.	先把这一段长度 len 的贡献加到 same；
            //2.	重置 len = 1，表示新段从当前位置开始，长度为 1。
			sum += len * (len + 1) / 2;
			len = 1;//从新一轮开始
		}
	}
    //最后一组有可能没加上，如1111011000000111111；
	sum += len * (len + 1) / 2;
	cout << total - sum << endl;
	return 0;
}
```

[B - Spiral Galaxy](https://atcoder.jp/contests/abc455/tasks/abc455_b)

```c++
#include<iostream>
#include<vector>
#include<string>
using namespace std;

int main() {
	int h, w;
	cin >> h >> w;

	//比如这题每一行只有.和 #，没有空格，所以一行可以直接当成一个字符串读入：

	vector<string> s(h);
	for (int i = 0; i < h; i++) cin >> s[i];

	long long ans = 0;

	for (int h1 = 0; h1 < h; h1++) {
		for (int h2 = h1; h2 < h; h2++) {
			for (int w1 = 0; w1 < w; w1++) {
				for (int w2 = w1; w2 < w; w2++) {
					bool ok = true;

					for (int i = h1; i <= h2 && ok; i++) {
						for (int j = w1; j <= w2; j++) {
							int ii = h1 + h2 - i;
							int jj = w1 + w2 - j;
							if (s[i][j] != s[ii][jj]) {
								ok = false;
								break;
							}
						}
					}

					if (ok) ans++;
				}
			}
		}
	}

	cout << ans << endl;
	return 0;
}
```



## 字典map

### 代码及注释

```c++
#include<bits/stdc++.h>

using namespace std;

int main(){
	map<int,string> mp;//双变量，字典； 
	mp.insert({2026,"码到成功"});//增加2026 
	mp[2025]="天翻地覆";
	mp[2024]="恬静美好";
	mp.erase(2025);//删掉2025 
	cout<<mp[2026]<<endl;
	cout<<mp[2024]<<endl;
	return 0;
}
```

### 求数组中出现最多的元素的个数

```c++
#include <iostream>
#include <vector>
#include <map>
using namespace std;

int getMaxCount(vector<int>& nums) {
    map<int, int> mp;
    // 统计每个数字出现次数
    for (int x : nums) {
        mp[x]++;
    }
    int max_cnt = 0;
    // 遍历map找最大次数
    for (auto& p : mp) {
        if (p.second > max_cnt) {
            max_cnt = p.second;
        }
    }
    return max_cnt;
}

int main() {
    vector<int> a = {1,2,2,3,3,3};
    cout << getMaxCount(a); //输出 3
    return 0;
}

```

[B-小红的冷门副本_牛客周赛 Round 143](https://ac.nowcoder.com/acm/contest/134529/B)

![image-20260612161806809](/assets/images/posts/cpp-algo/img-03.png)

```c++
//map 是什么
//map<K,V> 是“键 → 值”的表。
//在本题里：
//•	键：副本编号
//•	值：这个编号出现的次数
#include<iostream>
#include<map>
using namespace std;
const int N = 2e5 + 5;
int a[N];
int main() {
	long long n, m, x;
	cin >> n >> m >> x;
	map<long long, long long> cnt;
	for (int i = 0; i < n; i++) {
		int a;
		cin >> a;
		cnt[a]++;
	}
	long long bad = 0;
	for (auto& p : cnt) {
		if (p.second > x) {
			bad++;
		}
	}
	cout << m - bad << endl;
	return 0;
}
```

[C - Vanish](https://atcoder.jp/contests/abc455/tasks/abc455_c)

 map 允许通过键访问值：

```c++
mp[7]
```

表示“取出键 7 对应的值”。

如果这个键还不存在，map 会自动创建它，值初始化为 0。

```c++
mp[a[i]]++;
```

就是：
•	找到 a[i] 这个数字
•	对应次数加 1；

1.	先拿 a[i] 当作键
2.	去 mp 里找这个键对应的值
3.	如果这个键不存在，就先插入，值默认是 0
4.	然后把这个值 +1

```c++
#include<iostream>
#include<vector>
#include<string>
#include<algorithm>
#include<map>
using namespace std;
int main() {
	int n, k;
	cin >> n >> k;
	vector<long long> st(n, 0);
	for (int i = 0; i < n; i++) {
		cin >> st[i];
	}
	map<long long,long long> mp;
	long long sum = 0;

	for (int i = 0; i < n; i++) {
		mp[st[i]]++;
		sum += st[i];
	}

	vector<long long> b;
	for (auto& x : mp) {
		b.push_back(x.first * x.second);
	}

	long long total = 0;
	sort(b.rbegin(), b.rend());
	for (int i = 0; i < k&&i<b.size(); i++) {
		total += b[i];
	}
	cout << sum - total << endl;
	return 0;
}
```



### 计数哈希

#### 小例子

```c++
//f[y] = “块数 >= y 的格子数”
//比如 a = [0, 1, 3, 3]：
•	f[0] = 4//（全部 ≥0）
•	f[1] = 3//（1,3,3）
•	f[2] = 2//（3,3）
•	f[3] = 2//（3,3）
•	f[4] = 0
```

[C - Drop Blocks](https://atcoder.jp/contests/abc459/tasks/abc459_c)

[^非常牛逼的思路]: O（1）,把减去等效加上的原数据统计；见下图

```c++
#include <iostream>
#include <vector>

using namespace std;

int main() {
	ios::sync_with_stdio(0), cin.tie(0);

	int n, q;
	cin >> n >> q;
	vector<int> a(n, 0);
	int m = q + 2;
	vector<int> f(m + 1, 0);
	f[0] = n;
	int lim = 0;
	while (q--) {
		int op, x;
		cin >> op >> x;
		if (op == 1) {
			int i = x - 1;
			int v = a[i];
			a[i] = v + 1;
			f[v + 1]++;
			if (f[lim + 1] == n) {
				lim++;
			}
		}
		else {
			int y = lim + x;
			if (y < 0) {
				cout << n << endl;
			}
			else if (y > m) {
				cout << "0" << endl;
			}
			else {
				cout << f[y] << endl;
			}

		}

	}
	return 0;
}
```

### 用map存入两个交替输入的数组：

```c++
#include <iostream>
#include <vector>
#include <map>
#include <utility>

using namespace std;

int main() {
    vector<double> C = {1.1, 2.2, 3.3};
    vector<double> V = {10.0, 20.0, 30.0};
    map<int, pair<double, double>> cv_map;

    size_t N = C.size();
    for (size_t i = 0; i < N; ++i) {
        cv_map[i] = {C[i], V[i]}; // 简化版初始化
    }

    for (auto& entry : cv_map) {
        cout << "index " << entry.first 
             << ": C = " << entry.second.first 
             << ", V = " << entry.second.second << endl;
    }

    return 0;
}
```

按 `C1, V1, C2, V2...` 交替存入 map

```c++
#include <iostream>
#include <vector>
#include <map>

using namespace std;

int main() {
    vector<double> C = {1.1, 2.2, 3.3};
    vector<double> V = {10.0, 20.0, 30.0};
    map<int, double> alt_map;

    size_t N = C.size();
    int idx = 0;
    for (size_t i = 0; i < N; ++i) {
        alt_map[idx++] = C[i];
        alt_map[idx++] = V[i];
    }

    for (auto& entry : alt_map) {
        cout << entry.first << ": " << entry.second << endl;
    }

    return 0;
}
```



## 数学函数

#### 1. 向上取整：`ceil(x)`

- **数学符号**：`⌈x⌉`（图中 `[x]` 是向上取整的一种写法）
- **定义**：取**大于或等于** `x` 的最小整数
- **示例**：`ceil(2.1) = 3`
- **含义**：无论小数部分是多少，都向**正无穷**方向进一位

------

#### 2. 向下取整：`floor(x)`

- **数学符号**：`⌊x⌋`（图中 `⌊x⌋` 是标准写法）
- **定义**：取**小于或等于** `x` 的最大整数
- **示例**：`floor(2.1) = 2`
- **含义**：无论小数部分是多少，都向**负无穷**方向舍位（也叫 “地板函数”）

------

#### 3. 四舍五入：`round(x)`

- **数学符号**：`⟨x⟩`（部分教材用此符号）
- **定义**：将 `x` 舍入到**最接近**的整数，若小数部分为 `0.5` 则向偶数舍入
- **示例**：`round(2.1) = 2`，`round(2.5) = 2`，`round(3.5) = 4`
- **含义**：按 “四舍五入” 规则取最近整数

# 3.哈希相关







# *4*数论

关于数论的题目，先找数学规律，再去用代码实现；

## 1.素（质）数

```c++
bool isprime(int n){
    if(n<=1){
        return false;
    }
    else if(n==2){
        return true;
    }
    else if(n%2==0){
        return false;
    }
    else{
        for(int  i=3;i<=sqrt(n);i+=2){
            if(n%i==0)return false;
            
        }
    }
    return true;
}
/*边界处理：n ≤ 1 直接返回 false（包含 0、负数和 1），比 check 更严谨。
特殊质数：单独判断 n == 2，返回 true（2 是唯一的偶质数）。
偶数排除：n % 2 == 0 直接返回 false，所有大于 2 的偶数都不是质数，提前结束判断。
循环优化：从 i = 3 开始，只检查奇数=（i += 2），且范围到 sqrt(n)，减少一半的循环次数。
整除判断：和 check 一样，找到因子返回 false，否则返回 true。*/
```

## 2,取模

 

模运算的性质：

(a + b) % MOD = [(a % MOD) + (b % MOD)] % MOD，

(a × b) % MOD = [(a % MOD) × (b % MOD)] % MOD。

简单说：加法 / 乘法过程中随时取模，**和最后一次性取模的结果完全一样**

### 快速幂板子

```c++
// 取模的数字（题目固定给的，防止答案太大溢出）
const int MOD = 998244353;

// 快速幂函数：计算 (base 的 exp 次方) % MOD
// base = 底数   exp = 指数
long long qpow(long long base, long long exp) {
    // res = 最终答案，初始值是 1（任何数的 0 次方都是 1）
    long long res = 1;

    // 先把底数取模，防止数字太大溢出
    base = base % MOD;

    // 循环：只要指数还没变成 0，就一直算
    while (exp > 0) {
        // --------------------------
        // 如果当前指数是奇数（二进制最后一位是 1）
        // --------------------------
        // exp & 1 等价于 exp % 2 == 1，只是写法更快
        if (exp & 1) {
            // 把当前的底数乘到答案里
            // 乘完立刻取模，防止溢出
            res = res * base % MOD;
        }

        // --------------------------
        // 核心操作：底数平方
        // --------------------------
        // 2^1 → 2^2 → 2^4 → 2^8 → 2^16……
        base = base * base % MOD;

        // --------------------------
        // 核心操作：指数除以 2（右移一位）
        // --------------------------
        // exp = exp / 2
        exp = exp >> 1;
    }

    // 循环结束，返回最终答案
    return res;
}
```

[C-小红的因子幂和_牛客周赛 Round 143](https://ac.nowcoder.com/acm/contest/134529/C)



## 最大公约数

欧几里得算法

```c++
#include<iostream>
#include<vector>
using namespace std;
int gcd(int a, int b) {
	return b == 0 ? a : gcd(b, a % b);
}
int main() {
	int x, y;
	cin >> x >> y;
	cout << gcd(x, y) << endl;
	return 0;
}
```

C++17 标准库函数

```c++
#include <iostream>
#include <numeric> // 包含gcd
using namespace std;

int main() {
    int x, y;
    cin >> x >> y;
    cout << "最大公约数：" << gcd(x, y) << endl;
    return 0;
}
```

## 组合数和排列数

\(C_n^k\)，读作：从 n 个元素里面选出 k 个，**不考虑顺序**（无序）。

英文 combination，记作 \(\boldsymbol{C(n,k)}\)。

对应题目场景：选方案、选对子，不关心先后。

\(\boldsymbol{C_n^k=\dfrac{n!}{k!\cdot(n-k)!}}\)

**对称性**：\(\boldsymbol{C_n^k=C_n^{n-k}}\)



- **排列 \(A_n^k\)：讲究顺序**，选出来之后还要排先后。

\(A_n^k=\frac{n!}{(n-k)!}\)

例：\(A_3^2=3\times2=6\)，(1,2) 和 (2,1) 算两种。

- **组合 \(C_n^k\)：不讲究顺序**。

  

  \(C_3^2=3\)，(1,2) 与 (2,1) 算同一种。

> 竞赛绝大多数计数题求的是**组合**，无序。

## 计算阶乘中某质因子的个数

## 1. Legendre 公式（算阶乘里质因子的个数）

\(n!\) 里面质数 p 的指数：

\(cnt_p(n!)=\left\lfloor\frac{n}{p}\right\rfloor+\left\lfloor\frac{n}{p^2}\right\rfloor+\left\lfloor\frac{n}{p^3}\right\rfloor+\dots\)

### 计算 \(10!\)

- 因子 5 的数量：\(\lfloor 10/5 \rfloor = 2\) →只有**2 个 5**

  质因子：既是这个数的因子，本身又是质数

  只要 \(k! \bmod 10000=0\)，把它加到总和里面，**对最后四位不会产生任何影响**，后面更大的 k 就不用算了

  

# *5*前缀和和差分

**核心**

```c++
`sum[i]=sum[i-1]+a[i];`
`a[l]~a[r]=sum[r]-sum[l-1];`
```

https://www.luogu.com.cn/problem/P12889#ide

板子题

```c++
#include<bits/stdc++.h>
using namespace std;
int main(){
	ios::sync_with_stdio(0);cin.tie(0);
	int n,k;
	cin>>n>>k;
	vector<long long> a(n+5);
	vector<long long> b(n+5);
	for(int i=1;i<=n;i++){
		cin>>a[i];
		b[i]=b[i-1]+a[i];
	}
	long long ans=b[n];
	long long m_ax=-1e18;
	for(int i=1;i<=n;i++){
		for(int j=i;j<=n;j++){
			long long sum=ans+(k-1)*(b[j]-b[i-1]);//注意一定是i-1；
			if(m_ax<sum){
				m_ax=sum;
			}
		}
	}
	cout<<m_ax<<endl;
	return 0;
}
```

## 一维前缀和

终于学到第一个算法了（不算排序的话）！

前缀和的核心思想是：**先花一些时间把前面的和算好，避免以后反复计算同一段区间。**

对前缀和而言，最好的理解方式就是参考高中的数列及其前 $n$ 项和 $S_n$，我们提前得到数组的 $S_n$，就可以在 $O(1)$ 的时间计算区间和

对数组 $a$，我们新建一个数组 $pre$ ，定义：$pre[i]=a[1]+a[2]+\cdots+a[i],\;\; pre[0]=0$

例如 $a=[3,1,4,1,5]$：

| 下标 $i$ |    0 |    1 |    2 |    3 |    4 |    5 |
| -------- | ---: | ---: | ---: | ---: | ---: | ---: |
| $a[i]$   |    — |    3 |    1 |    4 |    1 |    5 |
| $pre[i]$ |    0 |    3 |    4 |    8 |    9 |   14 |

预处理只需从左往右遍历一遍：

```cpp
for(int i = 1; i <= n; i++) 
    pre[i] = pre[i - 1] + a[i];
```

这个循环复杂度是 $O(n)$ 的，在预处理之后，我们就可以在 $O(1)$ 的时间计算区间和。

例：如果要求区间 $[2,4]$ 的和，直接计算是 $1+4+1=6$；

利用前缀和则有：

$$pre[4]-pre[1]=9-3=6$$

一般地，**求闭区间 $[l,r]$ 的和**：$sum(l,r)=pre[r]-pre[l-1]$

因为 $pre[r]$ 包含前 $r$ 项，而 $pre[l-1]$ 正好是区间左边、不需要的部分。

**三个容易出错的地方：**

1. 一定有 $pre[0] = 0$，这样 $l=1$ 时也能直接套公式。
2. 减去的是 $pre[l-1]$，不是 $pre[l]$；否则会把第 $l$ 个数也减掉。
3. 如果区间和可能很大，$pre$ 应使用 $long long$。

如果有 $m$ 次询问，总时间从暴力的最坏 $O(nm)$ 降为 $O(n+m)$。

如果我们后续不再需要原数组的信息，我们也可以在原数组上做自身前缀和。

```cpp
for(int i = 1; i <= n; i++)
    a[i] += a[i - 1];
```

但这样会覆盖原来的 $a[i]$，做题时要先判断后续是否还需要原始数据。

**最重要的基础算法——前缀和**

### 第二题：[P8218 求区间和](https://www.luogu.com.cn/problem/P8218)

给定 $n$ 个数和 $m$ 次询问，每次输入 $l,r$，求 $a_l+a_{l+1}+\cdots+a_r$。

**1. 暴力做法：最坏 $O(nm)$ 时间**

每次询问都重新把区间累加一遍。如果 $n,m$ 都达到 $10^5$，最坏会产生 $10^{10}$ 量级的加法。

```cpp
void qianwai() 
{
    ll n;
    cin >> n;
    vector<ll> a(n + 1);
    for(ll i = 1; i <= n; i++) 
        cin >> a[i];
    ll m;
    cin >> m;
    while (m--) 
    {
        ll l, r;
        cin >> l >> r;
        ll sum = 0;
        for(ll i = l; i <= r; i++) 
            sum += a[i];
        cout << sum << '\n';
    }
}
```

**2. 前缀和做法：$O(n+m)$ 时间，$O(n)$ 空间**

把求和结果预处理出来；以后每次只要两项相减。

```cpp
void Enolaly() 
{
    ll n;
    cin >> n;
    vector<ll> pre(n + 1);
    for(ll i = 1; i <= n; i++) 
    {
        ll x;
        cin >> x;
        pre[i] = pre[i - 1] + x;
    }
    ll m;
    cin >> m;
    while (m--) 
    {
        ll l, r;
        cin >> l >> r;
        cout << pre[r] - pre[l - 1] << '\n';
    }
}
```

这道题并不需要保存原数组，所以可以边输入边构造 $pre$，还可以省掉一份数组空间。

### 第三题：[P8772 求和](https://www.luogu.com.cn/problem/P8772)

给定 $n$ 个整数，求所有 $i<j$ 的 $a_i a_j$ 之和。例如数组 $[1,2,3,4]$ 的答案为 $35$。

这道题是蓝桥杯真题，非常适合用来说明：**前缀和并不只是拿来回答区间询问，也能优化重复求和。**

**1. 暴力做法：$O(n^2)$ 时间**

```cpp
void Aiden() 
{
    ll n;
    cin >> n;
    vector<ll> a(n + 1);
    for (ll i = 1; i <= n; i++)
        cin >> a[i];
    ll ans = 0;
    for (ll i = 1; i <= n; i++)
    {
        for (ll j = i + 1; j <= n; j++)
            ans += a[i] * a[j];
    }
    cout << ans << '\n';
}
```

题目的 $n$ 最大可到 $2\times10^5$，这样的两重循环显然不合适，包超时的。

**2. 普通前缀和优化：$O(n)$ 时间，$O(n)$ 额外空间**

换一种数对统计顺序：固定右边的数 $a_i$，它需要与所有左边的数字分别相乘。于是：

$$a_1a_i+a_2a_i+\cdots+a_{i-1}a_i=a_i\cdot pre[i-1]$$

把所有 $i$ 的贡献加起来即可。

```cpp
void Aiden()
{
    ll n;
    cin >> n;
    vector<ll> a(n + 1), pre(n + 1);
    for (ll i = 1; i <= n; i++)
        cin >> a[i];
    for (ll i = 1; i <= n; i++)
        pre[i] = pre[i - 1] + a[i];
    ll ans = 0;
    for (ll i = 1; i <= n; i++)
        ans += a[i] * pre[i - 1];
    cout << ans << '\n';
}
```

**3. 滚动维护前缀和：$O(n)$ 时间，$O(1)$ 额外空间**

既然每一步只会用到前面所有数字的总和，那么其实不用保存整个 $pre$ 数组，用一个变量记录就够了。

```cpp
void Aiden()
{
    ll n;
    cin >> n;
    ll sum = 0, ans = 0;
    for (ll i = 1; i <= n; i++)
    {
        ll x;
        cin >> x;
        ans += x * sum;
        sum += x;
    }
    cout << ans << '\n';
}
```

注意顺序：**先用 $sum$ 更新答案，再把当前的 $x$ 加入 $sum$**。否则会把 $a_i^2$ 也算进去。

**4.其实还有不用前缀和的很简单做法，代数变形一下，也是$O(n)$ 时间，$O(1)$ 额外空间**：
$$
2\sum_{i=1}^n\sum_{j=i+1}^n a_i a_j
+\sum_{i=1}^n a_i^2
=\left(\sum_{i=1}^n a_i\right)^2
$$

```c++
void Aiden()
{
    ll n;
    cin >> n;
    ll cnt1 = 0, cnt2 = 0, ans = 0;
    for (ll i = 1; i <= n; i++)
    {
        ll x;
        cin >> x;
        cnt1 += x, cnt2 += x * x;
    }
    ans = (cnt1 * cnt1 - cnt2) / 2;
    cout << ans << '\n';
}
```

### 第四题：[P1614 爱与愁的心痛](https://www.luogu.com.cn/problem/P1614)

给定 $n$ 个数，找出所有**恰好连续 $m$ 个数字**的区间中，区间和的最小值。

例如 $a=[4,2,7,1,3]$，$m=3$，三个长度为 3 的区间和分别是 $13,10,11$，因此答案是 10。

**1. 暴力做法：最坏 $O(nm)$ 时间**

```cpp
void Aiden()
{
    ll n, m;
    cin >> n >> m;
    vector<ll> a(n + 1);
    for (ll i = 1; i <= n; i++)
        cin >> a[i];
    if (m == 0)
    {
        cout << 0 << '\n';
        return;
    }
    ll ans = INF;
    for (ll l = 1; l + m - 1 <= n; l++)
    {
        ll sum = 0;
        for (ll i = l; i < l + m; i++)
            sum += a[i];
        ans = min(ans, sum);
    }
    cout << ans << '\n';
}
```

**2. 前缀和做法：$O(n)$ 时间，$O(n)$ 额外空间**

固定区间右端点 $r$，既然长度是 $m$，区间左端点就是 $r-m+1$，所以区间和为：

$$pre[r]-pre[r-m]$$

```cpp
void Aiden()
{
    ll n, m;
    cin >> n >> m;
    vector<ll> pre(n + 1);
    for (ll i = 1; i <= n; i++)
    {
        ll x;
        cin >> x;
        pre[i] = pre[i - 1] + x;
    }
    if (m == 0)
    {
        cout << 0 << '\n';
        return;
    }
    ll ans = INF;
    for (ll r = m; r <= n; r++)
        ans = min(ans, pre[r] - pre[r - m]);
    cout << ans << '\n';
}
```

本题数据范围较小，暴力也可能通过；放在这里的主要目的是练习**固定区间长度时，如何正确推出区间端点**。此外还可以用双指针滑动窗口维护固定长度区间和的方法做到 $O(n)$，本节不展开。

### 第五题：[P1115 最大子段和](https://www.luogu.com.cn/problem/P1115)

给定长度为 $n$ 的数组，求**非空连续子数组**的最大和。数组中可能出现负数。

**1. 朴素做法：$O(n^3)$**

枚举左端点、右端点，然后再遍历一次计算这一段的和：

```cpp
void Aiden()
{
    ll n;
    cin >> n;
    vector<ll> a(n + 1);
    for (ll i = 1; i <= n; i++)
        cin >> a[i];
    ll ans = -INF;
    for (ll l = 1; l <= n; l++)
    {
        for (ll r = l; r <= n; r++)
        {
            ll sum = 0;
            for (ll i = l; i <= r; i++)
                sum += a[i];
            ans = max(ans, sum);
        }
    }
    cout << ans << '\n';
}
```

**2. 前缀和优化：$O(n^2)$**

不再每次重新计算区间和，而是直接用 $pre[r] - pre[l-1]$，从三层循环变成两层循环：

```cpp
void Aiden()
{
    ll n;
    cin >> n;
    vector<ll> pre(n + 1);
    for (ll i = 1; i <= n; i++)
    {
        ll x;
        cin >> x;
        pre[i] = pre[i - 1] + x;
    }
    ll ans = -INF;
    for (ll l = 1; l <= n; l++)
    {
        for (ll r = l; r <= n; r++)
            ans = max(ans, pre[r] - pre[l - 1]);
    }
    cout << ans << '\n';
}
```

但是一提交上去，便会**~~惊奇地~~**发现会 [TLE](https://www.luogu.com.cn/record/254832993) 只能拿 50 分。

这是为什么呢？很简单，因为 *O*(*n*2) 的时间复杂度无法通过 *n*≤2×1e5 的测试点。

接下来，我们要考虑用 *DP* 优化。

**注意：** P1115 的 $n$ 最大为 $2\times10^5$，所以这里的 $O(n^2)$ 只是帮助理解优化过程，**还不能通过全部测试数据**。

**3. $O(n)$ 做法一：动态规划**

#### 优化

首先， *DP* 的第一步就是确定里面要存什么。

##### 方法一

那我们先假设 *dp* 存储的是前 *i* 个数的最大子段和。

那么，这种情况之下， *dp* 的状态转移方程应当如下：

![image-20261105195007510](/assets/images/posts/cpp-algo/img-04.png)

但是实测的话却会出问题，这是为什么呢？

原因也比较简单：因为 *dp* 能直接从上一个转移过来然后再次叠加答案，最终得到的结果并不是正确答案，而是序列中所有正数相加的结果，如下表：

| 序列 |  2   |  -4  |  3   |  -1  |  2   |  -4  |  3   |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 选择 |  ↑   |      |  ↑   |      |  ↑   |      |  ↑   |

最终，**方法一**遗憾离场，我们接下来再考虑方法二。

##### 方法二

这一次，我们在 *dp* 数组里存储以这个数为结尾的最大子段和，那么状态转移方程如下：

![image-20261105195029014](/assets/images/posts/cpp-algo/img-05.png)

那么最终的答案就是 *dp* 存储的数中最大的那一个。

实测结果如下：

| 序列  |  2   |  -4  |  3   |  -1  |  2   |  -4  |  3   | 答案 |
| :---: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| dp[1] |  √   |      |      |      |      |      |      |  2   |
| dp[2] |  √   |  √   |      |      |      |      |      |  -2  |
| dp[3] |      |      |  √   |      |      |      |      |  3   |
| dp[4] |      |      |  √   |  √   |      |      |      |  2   |
| dp[5] |      |      |  √   |  √   |  √   |      |      |  4   |
| dp[6] |      |      |  √   |  √   |  √   |  √   |      |  0   |
| dp[7] |      |      |      |      |      |      |  √   |  3   |

最终，我们选择了 `dp[5]` 的结果（ 4 ），也选择了这种思路的 *dp* 。

令 $dp[i]$ 表示**必须以第 $i$ 个数结尾**的非空连续子数组的最大和。

它只有两种来源：单独从 $a[i]$ 开始一段，或者接在前一个位置的最优子段后面。

$$dp[i]=\max(a[i],dp[i-1]+a[i])$$

```cpp
void Aiden()
{
    ll n;
    cin >> n;
    vector<ll> a(n + 1), dp(n + 1);
    for (ll i = 1; i <= n; i++)
        cin >> a[i];
    ll ans = a[1];
    for (ll i = 1; i <= n; i++)
    {
        dp[i] = max(a[i], dp[i - 1] + a[i]);
        ans = max(ans, dp[i]);
    }
    cout << ans << '\n';
}
```

时间 $O(n)$，使用 $dp$ 数组的额外空间为 $O(n)$，做法不要求掌握，以后再学

**4. $O(n)$ 做法二：前缀和 + 最小前缀和**

先回到前缀和公式：

$$sum(l,r)=pre[r]-pre[l-1]$$

**这次我们不枚举左右端点，而是先固定右端点 $r$。**

当 $r$ 固定时，$pre[r]$ 是一个固定值。要让区间和最大，只要让被减去的 $pre[l-1]$ **尽可能小**。

而 $1\le l\le r$，因此 $l-1$ 只能取 $0,1,\ldots,r-1$。所以对于每个 $r$： $\text{以 }r\text{ 结尾的最大子段和}=pre[r]-\min_{0\le k<r}pre[k]$

我们从左到右遍历，同时维护一个变量 $mi$，表示**当前位置之前**出现过的最小前缀和。

例如 $a=[-2,3,-1,4,-5]$，它的前缀和是：

|      $i$      |  0   |  1   |  2   |  3   |  4   |  5   |
| :-----------: | :--: | :--: | :--: | :--: | :--: | :--: |
|    $a[i]$     |  —   |  -2  |  3   |  -1  |  4   |  -5  |
|   $pre[i]$    |  0   |  -2  |  1   |  0   |  4   |  -1  |
| $min(pre[i])$ |  0   |  -2  |  -2  |  -2  |  -2  |  -2  |

当右端点 $r=4$ 时，$pre[4]=4$，而前面的最小前缀和是 $pre[1]=-2$，

所以以 4 结尾的最大子段和是：$4-(-2)=6$ ，对应的子数组为 $[3,-1,4]$。

只要维护 $mi$，就可以一边读入，一边求答案：

```cpp
void Aiden()
{
    ll n;
    cin >> n;
    ll pre = 0, mi = 0, ans = -INF;
    for (ll i = 1; i <= n; i++)
    {
        ll x;
        cin >> x;
        pre += x;
        ans = max(ans, pre - mi);
        mi = min(mi, pre);
    }
    cout << ans << '\n';
}
```

时间复杂度 **$O(n)$**，额外空间复杂度 **$O(1)$**，而且完全可以从刚学的前缀和公式推导出来，不一定需要提前学过 DP。

**注意：**

- $ans = max(ans, pre - mi)$ **必须写在** $mi = min(mi, pre)$ **前面**。因为右端点是 $i$，左边被减掉的前缀必须位于 $0\sim i-1$。如果先把当前 $pre$ 加入最小值，就可能拿 $pre[i]-pre[i]=0$ 当作空区间答案。
- $ans$ 不能初始化为 0。题目要求**非空**子段，例如 $[-5,-2,-8]$ 的答案是 -2，而不是 0。

---

## 一维差分

刚才的前缀和适合解决：**数组不发生改变，却需要多次查询区间和**。

现在换一个问题：如果要多次把整个区间 $[l,r]$ 内的数都加上 $x$，每次都用循环逐个修改，最坏可能需要 $O(nm)$ 时间。有没有办法把一次区间修改压缩成常数次操作？

差分就是这个思路。定义：

$$d[1]=a[1],\qquad d[i]=a[i]-a[i-1]\ (i\ge 2)$$

也可以统一令 $a[0]=0$，于是 $d[i]=a[i]-a[i-1]$。

例如 $a=[2,1,5,3,4]$，它的差分数组就是：

$$d=[2,-1,4,-2,1]$$

把差分数组做一次**前缀和**，就能恢复原数组：

$$a[i]=d[1]+d[2]+\cdots+d[i]$$

这说明：**前缀和与差分是相互对应的两种处理。**

假设现在要让 $a[2]$ 到 $a[4]$ 都加上 3，原数组会变成：

$$[2,\mathbf{4},\mathbf{8},\mathbf{6},4]$$

我们不必逐一修改三个数，只需在差分数组上做：

```cpp
d[l] += x;
d[r + 1] -= x;
```

在本例中执行 $d[2] += 3、d[5] -= 3$，得到 $d=[2,2,4,-2,-2]$，再次求前缀和，恰好得到修改后的原数组。

**为什么只改两个位置？** $d[l] += x$ 会让从 $l$ 开始的所有前缀和都加上 $x$；$d[r+1] -= x$ 会让从 $r+1$ 开始的前缀和再减去 $x$，把影响抵消掉。于是只有 $[l,r]$ 内的元素增加了 $x$。

多次修改时，每次在差分数组上操作 $O(1)$，全部修改完成后再从左到右恢复一次 $O(n)$，总复杂度是 $O(n+m)$。

需要强调：这里适用于**先做完一批区间修改，再统一查看结果**。若题目要求“修改一次、马上查询一次、再修改一次”，单纯的差分数组不能一直以 $O(1)$ 直接回答查询。

不重复加减，只维护变化的部分

差分数组不记录“当前位置有多少”，而记录“从这里开始增加或减少多少”。

```python
位置：  1  2  3  4  5
数值：  0  0  0  0  0
```

现在给区间 `[2, 4]` 每个位置加 `1`，结果应该是：

```python
位置：  1  2  3  4  5
数值：  0  1  1  1  0
```

如果暴力修改，需要：

```python
a[2] += 1
a[3] += 1
a[4] += 1
```

差分的想法是：

```python
从位置 2 开始，后面都增加 1
从位置 5 开始，取消这次增加
```

所以只记录：

```python
d[2] += 1
d[5] -= 1
```

此时差分数组是:

```python
位置：  1  2  3  4  5
差分：  0  1  0  0 -1
```

注意：差分数组本身还不是最终答案。

再前缀和后就得到答案：

从左到右累加差分

```python
位置 1：0
位置 2：0 + 1 = 1
位置 3：1 + 0 = 1
位置 4：1 + 0 = 1
位置 5：1 + (-1) = 0
```

这正好是我们想要的结果。

因此：

```python
d[l] += 1
d[r + 1] -= 1
```

含义是：

- `d[l] += 1`：从 `l` 开始，覆盖次数增加；
- `d[r + 1] -= 1`：从 `r + 1` 开始，覆盖次数取消。

![image-20261020211132975](/assets/images/posts/cpp-algo/img-06.png)

![image-20261020211212265](/assets/images/posts/cpp-algo/img-07.png)

前缀和

```python
s = [0] * len(x)
now = 0

for i in range(len(x)):
    #表示把当前位置的“变化量”累加到当前覆盖次数
    now += d[i]
    #表示保存当前位置最终的覆盖次数
    s[i] = now
```

![image-20261020211620781](/assets/images/posts/cpp-algo/img-08.png)







**一维差分的例题**

### 第六题：[P1047 校门外的树](https://www.luogu.com.cn/problem/P1047)

从坐标 0 到坐标 $l$每个整数点都有一棵树，因此**最初共有 $l+1$ 棵树**。现在给出若干个闭区间 $[u,v]$，这些区间里的树要被移走，问还剩多少棵。

**1. 暴力标记：最坏 $O(lm)$**

每给出一个区间，就把其中的树标记为“被移走”，最后统计没有标记的树。

```cpp
void Aiden()
{
    ll l, m;
    cin >> l >> m;
    vector<ll> vis(l + 2);
    for (ll i = 1; i <= m; i++)
    {
        ll u, v;
        cin >> u >> v;
        for (ll j = u + 1; j <= v + 1; j++)
            vis[j] = 1;
    }
    ll ans = 0;
    for (ll i = 1; i <= l + 1; i++)
    {
        if (vis[i] == 0)
            ans++;
    }
    cout << ans << '\n';
}
```

**2. 差分统计覆盖次数：$O(l+m)$**

一个区间内的树“被覆盖一次”，就相当于给区间内所有位置加 1。最终覆盖次数为 0 的位置就是剩下的树。

**注意：** 题目坐标是 $0\sim l$，为了保持代码内部使用 1-based且差分方便，下标统一写成“坐标 + 1”。因此 $[u,v]$ 映射为 $[u+1,v+1]$。

```cpp
void Aiden()
{
    ll l, m;
    cin >> l >> m;
    vector<ll> d(l + 3);
    for (ll i = 1; i <= m; i++)
    {
        ll u, v;
        cin >> u >> v;
        d[u + 1]++;
        d[v + 2]--;
    }
    ll cover = 0, ans = 0;
    for (ll i = 1; i <= l + 1; i++)
    {
        cover += d[i];
        if (cover == 0)
            ans++;
    }
    cout << ans << '\n';
}
```

这道题数据不大，暴力也可以通过。它的教学价值是：**差分可以处理区间覆盖，而且重叠的区间不会导致重复扣掉同一棵树。**

### 第七题：[P2367 语文成绩](https://www.luogu.com.cn/problem/P2367)

有 $n$ 名学生，每名学生有初始成绩。接下来进行 $p$ 次修改，每次给第 $l$ 到第 $r$ 名学生的分数都增加 $x$，问所有修改完成后，最低分是多少。

**1. 暴力思路：最坏 $O(np)$**

每来一次修改，都用循环把区间中的每个分数加上 $x$。当 $n$ 很大、修改次数也很多时，会重复修改海量元素。

**2. 差分解法：$O(n+p)$**

先根据原数组建立差分数组，再对每个修改操作执行：

```cpp
d[l] += x;
d[r + 1] -= x;
```

全部修改结束后，从左到右对差分数组求前缀和，就能还原每位学生的最终成绩，并顺手求最小值。

```cpp
void Aiden()
{
    ll n, p;
    cin >> n >> p;
    vector<ll> a(n + 1), d(n + 2);
    for (ll i = 1; i <= n; i++)
        cin >> a[i];
    for (ll i = 1; i <= n; i++)
        d[i] = a[i] - a[i - 1];
    while (p--)
    {
        ll l, r, x;
        cin >> l >> r >> x;
        d[l] += x;
        d[r + 1] -= x;
    }
    ll ans = INF;
    for (ll i = 1;i <= n;i++)
        a[i] = a[i - 1] + d[i];
    for (ll i = 1;i <= n;i++)
        ans = min(ans, a[i]);
    cout << ans << '\n';
}
```

从这题里我们可以看出，差分可以进行的区间加减法的值不一定只有 $1$ ，可以是任意$x$

### 第八题：[P15540 [CCC 2026 J5/S2] Beams of Light](https://www.luogu.com.cn/problem/P15540)

简化一下题意：

停车位编号为 $1\sim N$。每盏灯给出位置 $P$ 和照射范围 $S$，它会照亮自己正下方，以及左右至多各 $S$ 个停车位。随后有 $Q$ 次询问，每次询问一个位置是否被任何灯照亮，输出 $Y$ 或 $N$。

一盏灯影响的实际区间为：

$$l=\max(1,P-S),\qquad r=\min(N,P+S)$$

**暴力思路：** 每盏灯都逐个标记照亮的位置。灯的数量和停车位数量都可以很大，复杂度应该是 $O(NL + Q)$。

**差分思路：** 每盏灯都对应一次区间加 1，所有灯处理完成后对差分数组求前缀和；得到的位置覆盖次数大于 0，就表示有光。思路本质其实和上一题是完全一样的，能搞明白灯照射范围这题就近似是上一道题了，可以自己上手锻炼一下。

```cpp
void Aiden()
{
    ll n, l, q;
    cin >> n >> l >> q;
    vector<ll> d(n + 2);
    while (l--)
    {
        ll p, s;
        cin >> p >> s;
        ll le = max(1ll, p - s);
        ll ri = min(n, p + s);
        d[le]++;
        d[ri + 1]--;
    }
    for (ll i = 1; i <= n; i++)
        d[i] += d[i - 1];
    while (q--)
    {
        ll x;
        cin >> x;
        cout << (d[x] > 0 ? 'Y' : 'N') << '\n';
    }
}
```

时间复杂度为 $O(n+L+Q)$，空间复杂度为 $O(n)$。

---

## 本节小结

1. **复杂度分析**：估算程序在最坏情况下需要多少操作；优化要从“哪些操作能少做”出发。
2. **前缀和**：一次 $O(n)$ 预处理，静态数组的区间和可在 $O(1)$ 查询；公式是 $pre[r] - pre[l-1]$。
3. **滚动前缀和**：如果只用到此前数字的总和，就未必需要保存整个前缀和数组（P8772）。
4. **差分**：区间加法只需 $d[l] += x、d[r+1] -= x$，最后求一次前缀和还原结果。
5. **边界**：特别留意 $pre[0]$、$r+1$ 的数组空间等各种边界情况（尤其记得差分数组要开大一丁点，新手很可能因为这个 RE）。

## 前缀和扩展

上节课我们讲了前缀和的基本用法，可以快速查询区间和，但事实上，前缀和远不止这一点用法，这次课会选择一些要更难一点的题目，但都是很有意思的

一个很容易想到的扩展是除了维护前缀信息，我们也可以维护后缀信息，比如我们可以用下面的代码获得后缀和

```cpp
for(int i = n; i >= 1; --i)
    suf[i] = suf[i + 1] + a[i];//注意会访问到第n + 1下标
```

但后缀和本身无价值，因为我们用前缀和本来就可以获得后缀信息，比如 $suf_{i} = pre_n - pre_{i - 1}$
不过有的前缀信息是不可以直接得到区间信息的，这里也引申出了第二重扩展，维护的信息不一定是和
比如我们还有可能维护前缀（或者后缀）的乘积，最值，异或和（一种二进制位运算），最大公因数 $gcd$，这些都是比较常见的维护信息

我们以前缀最值举例（不是前缀和）

```cpp
pre[0] = INF;
for(int i = 1; i <= n; ++i)
    pre[i] = min(pre[i - 1], a[i]);
```

上面这个代码可以获取前缀最小值，类比前缀和，我们思考这个能否快速获得区间的信息呢？也就是区间最小值，答案是不能，如果我们想要维护区间最值，我们需要别的更高级一些的数据结构，学到后面就会接触到
但仅仅只维护前后缀最值也可以解决掉一些问题了，我们会举例
对于最值，后缀也变得有价值了（因为前缀不能获取区间信息）

第三种扩展是在维度上，这个要难理解一点
从我个人经验上讲，二维甚至更高维的前缀和我基本没有再遇到过了，需要二维操作的题肯定会更难，包括后面会学的二维差分或者我也没学过的二维树状数组
但本着知识全面性，我们还是会举个简单例子
二维前缀和解决的需求是快速查询矩形的和，是一维区间和的升级版，会在二维数组上取定左下角和右下角两个端点，然后需要询问这个矩形范围数字的和
下面给出初始化的代码和查询的方式

```cpp
ll a[N][N], pre[N][N];
//...
ll n, m;//二维数组的两维
cin >> n >> m;
//pre[i][j]:从左上角[1][1]到[i][j]区域的和;
for(int i = 1; i <= n; ++i)
    for(int j = 1; j <= m; ++j)
        pre[i][j] = pre[i - 1][j] + pre[i][j - 1] - pre[i - 1][j - 1] + a[i][j];//注意这里的加加减减对应的关系
ll q;//q次查询
cin >> q;
while(q--)
{
    ll x, y, s, t;//s>=x && t>=y 左上右下，查询矩形空间的值
    cin >> x >> y >> s >> t;
    cout << pre[s][t] - pre[s][y - 1] - pre[t - 1][t] + pre[x - 1][y - 1];
}
```

![image-20261108153216863](/assets/images/posts/cpp-algo/img-09.png)

## 例题

[题单链接](https://www.luogu.com.cn/contest/289054)

贴一下我的代码模板，后面只会给出solve函数

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;//我们使用ll代替long long
typedef unsigned long long ull;
typedef __int128 lll;
typedef pair<int, int> pii;
typedef pair<ll, ll> pll;//具体这些定义是什么你可以先不管
const int N = 2e5 + 10;//这个N是指全局数组大小，一般和题目给出的数据有关
const ll MOD = 998244353;
const ll INF = 0x3f3f3f3f3f3f3f3f;

void solve()
{
    //这里放核心代码，后面我只会给出这个函数
}
int main()
{
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);
    int _ = 1;
   // cin >> _;//多测时取消前面注释，这次题目没有多测
    while(_--)
        solve();
    return 0;
}
```

### 第一题（题单第一题）k 倍区间

[P8649 [蓝桥杯 2017 省 B\] k 倍区间 - 洛谷](https://www.luogu.com.cn/problem/P8649)

```c++
k | pre[r]-pre[l-1]
等价于
pre[r] mod k ==pre[l-1] mod k
```

设前缀和数组为 $pre$ 满足条件的区间需要满足的条件本质上是 $pre_r \equiv pre_{l - 1} \pmod{k}$，这是数论里表示两个数字模 $k$ 同余的含义

于是我们需要存储前缀和数组中在模 k 下各个值有多少个，对于这个需求我们可以使用桶存储，最后进行计算，注意要把起点 $0$ 放进桶

时间复杂度 $O(n)$

**用桶来统计**”就是：

准备一个数组，每个位置代表一种情况，把属于这种情况的数量放进去。

在这道题里，`has` 数组就是桶：

```cpp
has[0], has[1], ..., has[k - 1]
```

法一

```cpp
void solve() {
    int n,k;
    cin>>n>>k;

    vector<int> a(n+1,0);
    for(int i=1;i<=n;i++){
        cin>>a[i];
    }

    vector<int> pre(n+1,0);
    for(int i=1;i<=n;i++){
        pre[i]=pre[i-1]+a[i];
    }

    int ans=0;
    vector<int> has(k,0);
    has[0]++;
    for(int i=1;i<=n;i++){
        int w=pre[i]%k;
        ans+=has[w];
        has[w]++;
    }
    cout<<ans<<endl;
}
```

**为什么要执行** has[0]

```cpp
has[0]++;
```

这表示：

```text
前缀和 pre[0] = 0，其除以 k 的余数是 0
```

假设某个位置 `r` 的前缀和余数也是 `0`，那么：

pre[r]−pre[0]=pre[r]pre[r]-pre[0]=pre[r]pre[r]−pre[0]=pre[r]
 就是从第 `1` 个数到第 `r` 个数的区间和。

例如：

```text
数组：2 3
k = 5
```

`pre[2] = 5`，余数是 `0`。

如果没有提前记录 `pre[0] = 0`，就无法统计区间 `[1,2]`。

所以：

```cpp
has[0]++;
```

是为了统计从数组开头开始的合法区间。

**核心循环**

```cpp
for (int i = 1; i <= n; ++i) // i -> r
{
    ll w = pre[i] % k;
    ans += has[w];
    has[w]++;
}
```

这里的 `i` 就相当于区间右端点 `r`。

法2(原理一样，but维护滚动前缀和)

```c++
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, k;
    cin >> n >> k;

    // cnt[i] 表示前缀和除以 k 余数为 i 的次数
    vector<long long> cnt(k, 0);

    // S0 = 0，所以余数 0 初始出现 1 次
    cnt[0] = 1;

    long long ans = 0;
    int rem = 0;

    for (int i = 1; i <= n; i++) {
        int x;
        cin >> x;

        // 更新当前前缀和的余数
        rem = (rem + x) % k;

        // 之前有多少个相同余数，就能产生多少个合法区间
        ans += cnt[rem];

        // 记录当前余数
        cnt[rem]++;
    }

    cout << ans << '\n';

    return 0;
}

```

法3：

这段代码也是用**前缀和 + 余数分组**，但它不是边读边统计，而是：

1. 先求出所有前缀和；
2. 统计每种余数出现了多少次；
3. 用组合数计算答案。

```c++
void solve() {
    int n,k;
    cin>>n>>k;

    vector<int> a(n+1,0);
    for(int i=1;i<=n;i++){
        cin>>a[i];
    }

    vector<int> pre(n+1,0);
    for(int i=1;i<=n;i++){
        pre[i]=pre[i-1]+a[i];
    }

    int ans=0;
    vector<int> has(k,0);
    has[0]++;
    for(int i=1;i<=n;i++){
        int w=pre[i]%k;
        has[w]++;
    }
    for(int i=0;i<k;i++){
        ans+=has[i]*(has[i]-1)/2;
    }
    cout<<ans<<endl;
}
```



### 第二题 [牛客周赛114B 小彩的好字符串](https://ac.nowcoder.com/acm/contest/119273/B)

注意不是洛谷的题

这个题一看数据范围可以用 $O(n^2)$ 的做法，字串（或者子数组）问题我们上节课最后讲过，一个暴力的方法一定是两层循环确定字串的左右边界，即枚举所有串，在这个题中，这也就要求我们枚举字串后只能用 $O(1)$(或者 $logn$ 的)时间判断三种字符的数量是否一致

那么怎么维护区间中三种字符的数量呢？也是一种前缀和，维护前缀某种字符的数量，清楚这种想法，就很简单了

时间复杂度 $O(n^2)$

```cpp
ll a[N], b[N], c[N];

void solve()
{
    ll n;
    cin >> n;
    string s;
    cin >> s;
    s = ' ' + s;
    for(int i = 1; i <= n; ++i)
    {
        a[i] = a[i - 1] + (s[i] == '1');
        b[i] = b[i - 1] + (s[i] == '2');
        c[i] = c[i - 1] + (s[i] == '3');
    }
    ll ans = 0;
    //枚举两个端点
    for(int i = 1; i <= n; ++i)
        for(int j = i; j <= n; ++j)
            if(a[j] - a[i - 1] == b[j] - b[i - 1] && b[j] - b[i - 1] == c[j] - c[i - 1])
                ans++;
    cout << ans << '\n';
}
```

二维数组统一维护

```c++
void solve() {
    int n;
    cin>>n;

    string s;
    cin>>s;

    s=' '+s;
    int ans=0;
    vector<vector<int>> pre(n+1,vector<int>(3,0));
    for(int i=1;i<=n;i++){
        pre[i][0]=pre[i-1][0]+(s[i]=='1');
        pre[i][1]=pre[i-1][1]+(s[i]=='2');
        pre[i][2]=pre[i-1][2]+(s[i]=='3');
    }

    for(int i=1;i<=n;i++){
        for(int j=i;j<=n;j++){
            if(pre[j][0]-pre[i-1][0]==pre[j][1]-pre[i-1][1] & pre[j][1]-pre[i-1][1]==pre[j][2]-pre[i-1][2]){
                ans+=1;
            }
        }
    }
    cout<<ans<<endl;
}
```

直接模拟

```c++
void solve() {
    int n;
    cin>>n;

    string s;
    cin>>s;
    int ans=0;
    // h 1 | z 2 |c 3
    for(int i=0;i<n;i++){
        int c1=0,c2=0,c3=0;
        for(int j=i;j<n;j++){
            if(s[j]=='1'){
                c1+=1;
            }else if(s[j]=='2'){
                c2+=1;
            }else{
                c3+=1;
            }

            if(c1==c2 & c2==c3){
                ans+=1;
            }
        }
    }
    cout<<ans<<endl;
}

```

### 第三题 [牛客周赛91C 小苯的逆序对和](https://ac.nowcoder.com/acm/contest/108038/C)

建议自己想一想，这个题很有趣的

时间复杂度 $O(n)$

```cpp
ll a[N], pre[N];

void solve()
{
    ll n;
    cin >> n;
    for(int i = 1; i <= n; ++i)
        cin >> a[i];
    for(int i = 1; i <= n; ++i)
        pre[i] = max(pre[i - 1], a[i]);
    ll ans = 0;
    for(int i = 2; i <= n; ++i)
        if(pre[i - 1] > a[i])
            ans = max(ans, pre[i - 1] + a[i]);
    cout << ans << '\n';
}
```

### 第四题 [牛客周赛82 小苯的排列计数](https://ac.nowcoder.com/acm/contest/102303/D)

给定了一个排列的前缀最小值数组，问有多少个排列符合这个数组
很有趣的思维题，不过和前缀和本身就没什么关系了，他是一个计数问题，注意取模

时间复杂度 $O(n)$

```cpp
ll a[N], pre[N];

void solve()
{
    ll n;
    cin >> n;
    for(int i = 1; i <= n; ++i)
        cin >> pre[i];
    ll ans = 1;
    ll cnt = n - pre[1];
    for(int i = 2; i <= n; ++i)
    {
        if(pre[i] > pre[i - 1])
        {
            ans = 0;
            break;
        }
        else if(pre[i] == pre[i - 1])
            ans = ans * cnt % MOD, cnt--;
        else
            cnt = cnt + pre[i - 1] - pre[i] - 1;
    }
    cout << ans << '\n';
}
```

### 第五题（题单第二题） 领地选择

[P2004 领地选择 - 洛谷](https://www.luogu.com.cn/problem/P2004)

学习二维前缀和的题目

时间复杂度 $O(nm)$

```cpp
ll a[N][N], pre[N][N];

void solve()
{
    ll n, m, c;
    cin >> n >> m >> c;
    for(int i = 1; i <= n; ++i)
        for(int j = 1; j <= m; ++j)
            cin >> a[i][j];
    for(int i = 1; i <= n; ++i)
        for(int j = 1; j <= m; ++j)
            pre[i][j] = pre[i][j - 1] + pre[i - 1][j] - pre[i - 1][j - 1] + a[i][j];
    ll ans = -INF;
    ll x = 0, y = 0;
    for(int i = 1; i <= n; ++i)
    {
        for(int j = 1; j <= m; ++j)
        {
            if(i + c - 1 > n || j + c - 1 > m)
                continue;
            if(ans < pre[i + c - 1][j + c - 1] - pre[i + c - 1][j - 1] - pre[i - 1][j + c - 1] + pre[i - 1][j - 1])
            {
                ans = pre[i + c - 1][j + c - 1] - pre[i + c - 1][j - 1] - pre[i - 1][j + c - 1] + pre[i - 1][j - 1];
                x = i, y = j;
            }
        }
    }
    cout << x << " " << y << '\n';
}
```

```c++
void solve() {
    int n,m,c;
    cin>>n>>m>>c;

    vector<vector<int>> st(n+1,vector<int>(m+1,0));
    
    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            cin>>st[i][j];
        }
    }

    int ans=-INF;
    int x=0,y=0;
    
    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            //右上左下；
            int s=i+c-1,t=j+c-1;
            if(s>n || t>m){
                continue;
            }
            int k=st[s][t]-st[s][j-1]-st[i-1][t]+st[i-1][j-1];
            if(ans<k){
                ans=k;
                x=i,y=j;
            }
        }
    }
    cout<<x<<" "<<y<<endl;
}
```



# 6.二维差分与双指针（滑动窗口）

> 本节目标：理解二维差分为什么只修改四个角，能够处理矩形的 $+v/-v$，并尝试从实际题意中找出矩形贡献；掌握双指针与滑动窗口的基本思想，知道什么时候可以让指针一直向前走。
>
> 前面已经学过一维前缀和、一维差分与二维前缀和，这次我们把二维差分补上，再来认识一种非常常见的区间优化方法——双指针。
>
> 例题统一来自洛谷，包含知识点、题解思路、正解代码和时空复杂度分析。

---

## 代码模板和题单

下面给出一份基础 C++ 模板。之后各题只写 $solve()$ 函数，使用时替换到模板中即可。

```cpp
// 两个斜杠后面的东西是 C++ 的注释，不会影响程序运行
#include <bits/stdc++.h>
using namespace std;
using ll = long long; // 用 ll 代替long long
const int N = 1e5 + 10; // 开静态数组可以用的常量大小，根据数据范围要记得修改大小
const ll MOD = 1e9 + 7; // 常见取模模数，另外还有一个常用取模模数 998244353
const ll INF = 4e18; // 一个极大数，约等于long long存储上限的一半，可以当成正无穷来使用

void solve() 
{
    // 在这里写解题的代码
}

int main() 
{
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0); // 关闭同步输入输出流，加快 cin 和 cout 的速度
    int _ = 1;
    //cin >> _; // 题目单测就给这行的前面敲上双斜杠表示注释，多测就不要注释（单多测一般体现在题目输入里有没有告诉你有T组样例）
    while (_--)
    	solve(); // 调用解题函数
    return 0;
}
```

**本节题单：**

| 题号 | 洛谷题目                                                     | 对应知识点                    |
| :--: | ------------------------------------------------------------ | ----------------------------- |
|  A   | [P3397 地毯](https://www.luogu.com.cn/problem/P3397)         | 二维差分基础，矩形覆盖次数    |
|  B   | [P2038 [NOIP 2014 提高组] 无线网络发射器选址](https://www.luogu.com.cn/problem/P2038) | 带权矩形贡献，换个角度思考    |
|  C   | [P6070 『MdOI R1』Decrease](https://www.luogu.com.cn/problem/P6070) | 二维差分 + 贪心，矩形 $+v/-v$ |
|  D   | [P1614 爱与愁的心痛](https://www.luogu.com.cn/problem/P1614) | 固定长度滑动窗口              |
|  E   | [P1147 连续自然数和](https://www.luogu.com.cn/problem/P1147) | 同向双指针（尺取法）          |
|  F   | [P1102 A-B 数对](https://www.luogu.com.cn/problem/P1102)     | 排序 + 双指针，重复元素计数   |
|  G   | [P1638 逛画展](https://www.luogu.com.cn/problem/P1638)       | 不定长滑动窗口，维护出现次数  |

---

## 知识点

### 一、二维差分

#### 1. 从一维差分想到二维差分

我们之前讲过一维差分：把数组中的闭区间 $[l,r]$ 全部加上 $v$，只需要做两件事。

```cpp
d[l] += v;
d[r + 1] -= v;
```

等所有修改操作结束，再对 $d$ 求一遍前缀和，就能得到最终的数组。

**那如果我们要修改的不是一段区间，而是矩阵里的一个矩形呢？**

比如一个 $n \times m$ 的矩阵，想把左上角 $(x_1,y_1)$、右下角 $(x_2,y_2)$ 围成的整个**闭矩形**全部加上 $v$。直接修改的话，需要把矩形里面每个格子都遍历一遍。

二维差分的思路非常相似：不直接修改原矩阵，而是在差分数组中修改**四个角**。

```cpp
d[x1][y1] += v;
d[x2 + 1][y1] -= v;
d[x1][y2 + 1] -= v;
d[x2 + 1][y2 + 1] += v;
```

这里 $v$ 可以是 ±1，可以是 5，也可以是 -10。

#### 2. 为什么偏偏是四个角？

先回忆二维前缀和：如果差分数组 $d[x][y]$ 增加了 $v$，那么在最后做二维前缀和时，它会让从 $(x,y)$ 开始、往右下方的所有位置都增加 $v$。

我们只想修改 $[x_1,x_2] \times [y_1,y_2]$，不想连右边、下边的区域也一起改掉，因此需要这样处理：

1. $d[x_1][y_1] += v$：让整个右下方区域先增加 $v$。
2. $d[x_2+1][y_1] -= v$：把矩形**下方**多出来的部分抵消掉。
3. $d[x_1][y_2+1] -= v$：把矩形**右方**多出来的部分抵消掉。
4. $d[x_2+1][y_2+1] += v$：右下角同时被第 2、3 步减了两次，所以还要加回来一次。

例如，给一个全零的 $4 \times 5$ 矩阵的行 $[2,3]$、列 $[2,4]$ 全部加上 5，最后应该得到：

```text
0 0 0 0 0
0 5 5 5 0
0 5 5 5 0
0 0 0 0 0
```

看起来修改了六个格子，实际上只需要改差分数组的四个位置。以后一个矩形有几万个格子，仍然只要四次修改。

#### 3. 如何建立二维差分，以及怎么还原？

把原矩阵记作 $a$，二维差分记作 $d$。如果统一使用 **1-based 下标**，并把第 0 行、第 0 列看作全零，那么有：

$$
d[i][j]=a[i][j]-a[i-1][j]-a[i][j-1]+a[i-1][j-1]
$$

如果原矩阵本来全是 0，我们就可以直接开一个全零的差分数组；如果原矩阵不全是 0，就先根据上面的公式建立差分。

全部矩形操作完成后，**对差分数组求一次二维前缀和**，就能还原出最终矩阵：

```cpp
for (int i = 1; i <= n; i++)
{
    for (int j = 1; j <= m; j++)
        d[i][j] += d[i - 1][j] + d[i][j - 1] - d[i - 1][j - 1];
}
```

此时的 $d[i][j]$ 已经是最终矩阵中的值了，不再是修改前的差分值。

假设矩阵有 $n \times m$ 个格子，一共进行 $q$ 次矩形修改，那么：

- 初始化或最终还原矩阵需要 $O(nm)$。
- 每次矩形修改只改四个角，耗时 $O(1)$。
- **总时间复杂度是 $O(nm+q)$，空间复杂度是 $O(nm)$。**

边界方面，二维差分可能访问 $x_2+1$、$y_2+1$，数组需要留出额外空间；几何坐标和数组下标也可能采用不同的编号方式，例如映射让几何坐标的 $[0, n] +1 $ 后映射到 $[1,n+1]$ 什么的。

另外，二维差分与一维的一样，适合**先做完一批修改，最后统一查看结果**，不是说可以一边修改一边随时 $O(1)$ 查询。

---

### 第一题：[P3397 地毯](https://www.luogu.com.cn/problem/P3397)

给定一个 $n \times n$ 的网格，以及 $m$ 张矩形地毯。每张地毯用左上角 $(x_1,y_1)$ 和右下角 $(x_2,y_2)$ 描述，要求输出每个格子最终被覆盖了多少次。

这道就是二维差分的基础应用。**每铺一张地毯，相当于把对应闭矩形的所有格子加上 1。**

如果每次都枚举整块地毯的每个格子，最坏需要 $O(mn^2)$；利用二维差分，每块地毯只需修改四个角，之后再扫描整个矩阵。

**代码：**

```cpp
void Aiden()
{
    ll n, m;
    cin >> n >> m;
    vector<vector<ll>> d(n + 2, vector<ll>(n + 2));
    while (m--)
    {
        ll x1, y1, x2, y2;
        cin >> x1 >> y1 >> x2 >> y2;
        d[x1][y1]++;
        d[x2 + 1][y1]--;
        d[x1][y2 + 1]--;
        d[x2 + 1][y2 + 1]++;
    }
    for (ll i = 1; i <= n; i++)
    {
        for (ll j = 1; j <= n; j++)
            d[i][j] += d[i - 1][j] + d[i][j - 1] - d[i - 1][j - 1];
    }
    ull ans = 0;
    for (ll i = 1; i <= n; i++)
    {
        for (ll j = 1; j <= n; j++)
            cout << d[i][j] << ' ';
        cout << endl;
    }
}
```

**时间复杂度：** $O(n^2+m)$。**空间复杂度：** $O(n^2)$。

差分数组记录的是**变化量**，所以中间出现负数是正常的，最后还原得到的才是覆盖次数。

### 第二题：[P2038 [NOIP 2014 提高组] 无线网络发射器选址](https://www.luogu.com.cn/problem/P2038)

接下来这题就没那么直接了，它不会告诉我们“请把某个矩形加上多少”，需要自己想办法转化出来。

**题目大意：** 一座城市有坐标为 $0\sim 128$ 的路口。部分路口存在公共场所，输入给出这些路口的坐标 $(x,y)$ 和公共场所数量 $k$。现在要在**某个路口**安装一个无线网络发射器，覆盖范围是以安装位置为中心、向四个方向延伸距离 $d$ 的正方形。要求输出：能覆盖最多公共场所的安装位置有多少个，以及最多能覆盖多少个公共场所。

我们最容易想到的办法，是枚举“把发射器放在哪里”，再算它能覆盖到哪些公共场所。

但是可以**倒过来想**：

> 某个公共场所位于 $(x,y)$，那么发射器安装在哪些位置，才能覆盖到它？

答案是一个矩形：

$$
[\max(0,x-d),\min(128,x+d)]\times
[\max(0,y-d),\min(128,y+d)]
$$

如果这个路口有 $k$ 个公共场所，那么**这个矩形里所有候选安装位置的得分都应该增加 $k$**。

比如 $(4,4)$ 有 10 个公共场所，$d=1$，发射器只要安装在 $[3,5] \times [3,5]$ 的任意一个路口，都可以覆盖它们，于是我们让这些候选位置的得分全部 $+10$。

再来一个路口 $(6,6)$，有 20 个公共场所，它会让 $[5,7] \times [5,7]$ 的候选位置再 $+20$。这时候位置 $(5,5)$ 就能获得 30 分。

**这样就转化成了带权矩形修改。** 每个有公共场所的路口贡献一次矩形 $+k$，最后扫描矩阵，找出最大得分和得到最大得分的位置数量。

原题的坐标从 0 开始，为了方便使用 1-based 差分数组，我们统一把实际坐标映射成“坐标 + 1”。

**代码：**

```cpp
void Aiden()
{
    ll dis, n;
    cin >> dis >> n;
    vector<vector<ll>> d(131, vector<ll>(131));
    while (n--)
    {
        ll x, y, k;
        cin >> x >> y >> k;
        ll x1 = max(0ll, x - dis) + 1, x2 = min(128ll, x + dis) + 1;
        ll y1 = max(0ll, y - dis) + 1, y2 = min(128ll, y + dis) + 1;
        d[x1][y1] += k;
        d[x2 + 1][y1] -= k;
        d[x1][y2 + 1] -= k;
        d[x2 + 1][y2 + 1] += k;
    }
    ll ma = -1, ans = 0;
    for (ll i = 1; i <= 129; i++)
    {
        for (ll j = 1; j <= 129; j++)
        {
            d[i][j] += d[i - 1][j] + d[i][j - 1] - d[i - 1][j - 1];
            if (d[i][j] > ma)
            {
                ma = d[i][j];
                ans = 1;
            }
            else if (d[i][j] == ma)
                ans++;
        }
    }
    cout << ans << ' ' << ma << endl;
}
```

**时间复杂度：** $O(n+129^2)$。**空间复杂度：** $O(129^2)$.

这题原本也可以直接暴力做，因为城市地图和路口数量都不大。

不过从它可以看出来：二维差分不只是统计“覆盖几次”，**矩形内每个位置完全可以加上不同操作给出的权值**。

### 第三题（课后拓展）：[P6070 『MdOI R1』Decrease](https://www.luogu.com.cn/problem/P6070)

这道题不仅需要快速执行矩形修改，还需要确定**应该修改哪个矩形、修改多少次**。

**题目大意：** 给定一个 $n \times n$ 的矩阵，最初有 $m$ 个位置非零，其余位置都是 0。每次操作可以选一个连续的 $k \times k$ 正方形，让里面所有数字都 $+1$ 或都 $-1$。求把所有数字变成 0 至少需要多少次操作；做不到就输出 $-1$。

#### 1. 为什么可以从左上到右下贪心？

先从左上角 $(1,1)$ 想起。一个合法的 $k \times k$ 正方形如果想覆盖 $(1,1)$，它的左上角就**只能**是 $(1,1)$。

所以若 $(1,1)$ 的值是 3，那么我们必须给左上角这个正方形 $-3$（相当于做 3 次 $-1$）；如果是 -2，就必须给它 $+2$。

现在 $(1,1)$ 已经归零，再考虑 $(1,2)$。虽然有不止一个正方形能覆盖它，但是以 $(1,1)$ 为左上角的操作量已经确定了，不能再随便改，否则前面处理好的位置又不为 0 了。

因此，只要我们**按行从左到右、从上到下**处理，轮到 $(i,j)$ 时，能够在不破坏前面结果的情况下消去当前位置的操作量就是被迫确定的：

- 当前位置实际值为 $v > 0$：给以 $(i,j)$ 为左上角的正方形整体 $-v$，操作次数增加 $v$。
- 当前位置实际值为 $v < 0$：给对应正方形整体 $-v$（也就是加上 $abs(v)$），操作次数增加 $abs(v)$。
- $v = 0$：不用操作。
- 如果非零但已经放不下一个 $k \times k$ 正方形，那么无解，输出 $-1$。

为什么这样得到的次数最少？因为每个位置需要的**净修改量**都是唯一确定的。如果净修改量是 $-v$，最少也要执行 $abs(v)$ 次 $+1/-1$；做多余的正负抵消操作只会更慢。

#### 2. 二维差分如何参与进来？

如果每次给一个 $k \times k$ 正方形加上 $-v$ 都要把里面的格子遍历一遍，就算贪心正确，也会非常慢。

其实我们可以更进一步：**直接在二维差分数组上做这个贪心。**

为什么这样也行？因为原矩阵全部为 0，当且仅当它的二维差分也全部为 0。按顺序处理时，前面已经处理好的差分位置都归零了，当前的 $d[i][j]$ 就代表现在必须消去的量。

设 $v = d[i][j]$。要让它归零，就相当于给以 $(i,j)$ 为左上角的 $k \times k$ 矩形整体加上 $-v$：

```cpp
d[i][j] = 0;
d[i + k][j] += v;
d[i][j + k] += v;
d[i + k][j + k] -= v;
```

后面三个修改位置都在当前格子的右边或者下方，因此不会影响已经处理过的位置。

题目只输入 $m$ 个非零位置，我们甚至不需要另开一张原矩阵：**一个位置 $(x,y)$ 加上 $z$，可以看作对 $1 \times 1$ 的矩形加 $z$**，读入时直接在差分数组里打四个角就行。

**代码:**

```cpp
void Aiden()
{
    ll n, m, k;
    cin >> n >> m >> k;
    vector<vector<ll>> d(n + 2, vector<ll>(n + 2));
    // 原矩阵中只有 m 个非零位置，每个位置相当于一次 1*1 矩形加法
    while (m--)
    {
        ll x, y;
        ll z;
        cin >> x >> y >> z;
        d[x][y] += z;
        d[x + 1][y] -= z;
        d[x][y + 1] -= z;
        d[x + 1][y + 1] += z;
    }
    ll ans = 0;
    for (ll i = 1; i <= n; i++)
    {
        for (ll j = 1; j <= n; j++)
        {
            ll v = d[i][j];
            if (v == 0)
                continue;
            // 当前格子非零，但放不下 k*k 正方形，无法消去
            if (i + k - 1 > n || j + k - 1 > n)
            {
                cout << -1 << endl;
                return;
            }
            ans += (v >= 0 ? v : -v);
            // 给以 (i,j) 为左上角的 k*k 正方形整体加上 -v
            d[i][j] = 0;
            d[i + k][j] += v;
            d[i][j + k] += v;
            d[i + k][j + k] -= v;
        }
    }
    cout << ans << endl;
}
```

**时间复杂度：** $O(n^2+m)$。**空间复杂度：** $O(n^2)$。

最后再看一个小例子：

```text
n = 4, k = 3
初始矩阵：
1 1 1 0
1 3 3 2
1 3 3 2
0 2 2 2
```

先让左上角的 $3 \times 3$ 区域全部减 1，再让以 $(2,2)$ 为左上角的 $3 \times 3$ 区域全部减 2，矩阵就变成了全零。操作次数为 $1 + 2 = 3$。

本题的贪心依据是：按照从左上到右下的顺序，每个位置需要的净修改量是唯一确定的。

---

### 二、双指针与滑动窗口

二维差分是通过**记录变化量，省掉一大片重复修改**。接下来换个角度，看看能不能在枚举区间时，省掉那些已经检查过的部分。

#### 1. 双指针的基本思路

假设我们要在一个数组里寻找满足某种条件的区间 $[l,r]$。最直接的想法是枚举左端点，再枚举右端点。

但有些题目具有特殊性质：右端点向右移动时，我们可以根据当前区间的信息，判断左端点是不是也应该右移，而且**左端点没有必要回头**。

这时候就可以用两个指针维护一个不断移动的区间。常见的形式大概有三种：

- **固定长度的滑动窗口：** 例如长度始终为 $m$，窗口右移一格，只减去离开的数字、加上进来的数字。
- **长度可变的滑动窗口：** 右端点负责扩大区间，左端点负责在满足条件时缩小区间。
- **排序后的双指针：** 利用排好序后的单调性，寻找符合条件的数对或一段相同数字。

双指针能够优化枚举，依赖的是指针可以单向移动，以及当前区间的信息能够快速更新。

#### 2. 为什么里面写了 while，时间复杂度仍然可能是 O(n)？

比如：

```cpp
int l = 1;
for (int r = 1; r <= n; r++)
{
    while (l <= r && /* 当前区间需要缩短的条件 */)
        l++;
}
```

看起来是一层 for 套一层 while，但注意，$l$ **从头到尾只往右走**，不会在每次外层循环时重新变成 1。

$r$ 最多移动 $n$ 次，$l$ 在整个过程中也最多移动 $n$ 次，因此两个指针的移动总量是 $O(n)$。

当然，这个结论有前提：窗口里的信息（比如区间和、出现次数）必须能够在移动一次指针时用 $O(1)$ 左右的时间更新。如果每次都重新遍历整个窗口，那就不能直接说总复杂度是 $O(n)$。

---

### 第四题：[P1614 爱与愁的心痛](https://www.luogu.com.cn/problem/P1614)

这道题上次用前缀和做过了，这次换一种方式看看。

给定 $n$ 个数，要找到所有**长度恰好为 $m$** 的连续区间中，区间和最小的是多少。

如果先求出整个前缀和数组，可以用 $pre[r] - pre[r-m]$ 算长度为 $m$ 的区间和。不过我们其实还可以只维护当前窗口的 $sum$。

假设当前窗口覆盖了 $[l,r]$。它右移一格后，就变成 $[l+1,r+1]$：**左边出去一个数，右边进来一个数。**

因此每次只需：

```cpp
sum -= a[l];
sum += a[r + 1];
```

也可以合并写成 $sum += a[r+1] - a[l]$。

**代码：**

```cpp
void Aiden()
{
    ll n, m;
    cin >> n >> m;
    vector<ll> a(n + 1);
    for (ll i = 1; i <= n; i++)
        cin >> a[i];
    if (m == 0)
    {
        cout << 0 << endl;
        return;
    }
    ll sum = 0;
    for (ll i = 1; i <= m; i++)
        sum += a[i];
    ll ans = sum;
    for (ll r = m + 1; r <= n; r++)
    {
        ll l = r - m + 1;
        sum += a[r] - a[l - 1];
        ans = min(ans, sum);
    }
    cout << ans << endl;
}
```

**时间复杂度：** $O(n)$。**空间复杂度：** $O(n)$。

注意原题允许 $m=0$，此时空窗口的和为 0。固定长度窗口非常基础，但后面长度会变化的窗口，本质上还是在做类似的事情。

### 第五题：[P1147 连续自然数和](https://www.luogu.com.cn/problem/P1147)

给定正整数 $M$，找出所有**至少包含两个数**的连续正整数区间，使得区间内所有数字的和恰好为 $M$。输出区间左右端点，按左端点从小到大排列。

例如 $M=15$ 时，符合条件的区间有 $[1,5]$、$[4,6]$ 和 $[7,8]$。

这次的窗口长度不再固定。我们用两个指针 $l,r$ 表示当前区间，同时用 $sum$ 维护这个区间的总和。

想一想：**为什么这题可以移动两个指针，而不必枚举全部左右端点？**

因为我们加的全都是**正整数**：

- 如果区间和太小，可以继续向右扩大区间，让 $sum$ 增加。
- 如果区间和太大，就必须把左边的一些数移出去，让 $sum$ 减小。
- 恰好等于 $M$，并且区间长度至少为 2 时，就得到一个答案。

两个指针都不需要往回走，这就是很经典的**尺取法**。

**正解代码：**

```cpp
void solve()
{
    int m;
    cin >> m;
    int l = 1;
    ll sum = 0;
    for (int r = 1; r <= m; r++)
    {
        sum += r;
        while (sum > m && l <= r)
        {
            sum -= l;
            l++;
        }
        if (sum == m && l < r)
            cout << l << ' ' << r << '\n';
    }
}
```

**时间复杂度：** $O(M)$。**额外空间复杂度：** $O(1)$。

虽然有嵌套循环，但右端点最多移动 $M$ 次，左端点总共也最多移动 $M$ 次，因此整体不是 $O(M^2)$。

还要注意，这个“区间和太大就左移”的结论**依赖区间里都是正数**。如果原数组里有负数，随意移动左端点就不一定正确了。

本题也可以利用等差数列求和公式做到 $O(\sqrt M)$，这里不给出。

### 第六题：[P1102 A-B 数对](https://www.luogu.com.cn/problem/P1102)

给出 $n$ 个数字以及正整数 $C$，问有多少对数字满足：

$$A-B=C$$

相同的数字即使值一样，只要出现在**不同位置**，也要分别计数。

例如：

```text
n = 4, C = 1
a = [1, 1, 2, 3]
```

答案是 3：两个不同位置的 $1$ 都可以和 $2$ 配对，另外 $2$ 和 $3$ 也能组成一对。

#### 思路

先排序，假设当前枚举的较小数字是 $B=a[i]$，那么较大的数字必须是：

$$A=a[i]+C$$

在有序数组中，所有等于这个目标值的数字一定排成**连续的一段**。

所以我们用两个指针维护这段区间：

- $l$ 指向第一个满足 $a[l] >= target$ 的位置。
- $r$ 指向第一个满足 $a[r] > target$ 的位置。

那么等于 $target$ 的数字就有 $r-l$ 个，当前的 $a[i]$ 能贡献 $r-l$ 组数对。

因为我们从小到大枚举 $a[i]$，$target=a[i]+C$ 也只会增大或不变，$l$ 和 $r$ 就都可以只向右移动。

**代码：**

```cpp
void Aiden()
{
    ll n, c;
    cin >> n >> c;
    vector<ll> a(n + 1);
    for (ll i = 1; i <= n; i++)
        cin >> a[i];
    sort(a.begin() + 1, a.end());
    ll ans = 0, l = 1, r = 1;
    for (ll i = 1; i <= n; i++)
    {
        ll tar = a[i] + c;
        while (l <= n && a[l] < tar)
            l++;
        while (r <= n && a[r] <= tar)
            r++;
        ans += r - l;
    }
    cout << ans << endl;
}
```

**时间复杂度：** 排序 $O(n\log n)$，双指针部分 $O(n)$，总计 $O(n\log n)$。**空间复杂度：** $O(n)$。

### 第七题：[P1638 逛画展](https://www.luogu.com.cn/problem/P1638)

给定 $n$ 幅画，每幅画由 $1\sim m$ 中的一位画家创作。现在想选一段**最短的连续区间**，让区间内包含全部 $m$ 位画家的作品。输出区间左右端点；如果最短区间不止一个，取**左端点最小**的那组。

这道题和刚才 P1147 有点像，都要维护一个长度不固定的窗口。不过这次判断窗口是否合法，不再是比较一个 $sum$，而是看**每一位画家是不是都出现过**。

我们维护三个东西：

- $cnt[x]$：当前窗口里编号为 $x$ 的画家出现了几次。
- $num$：当前窗口包含了多少种不同的画家。
- $[l,r]$：当前窗口的左右端点。

右指针 $r$ 向右走，不断把新画作加入窗口。如果某位画家的出现次数从 0 变成 1，就让 $num++$。

当 $num=m$ 时，说明我们已经看到了全部画家。这时候可以**尝试让左端点右移，缩短窗口**：

1. 先用当前合法区间尝试更新最短答案。
2. 把左端点那幅画从窗口移出去，更新它的 $cnt$。
3. 如果某位画家的计数降到了 0，就说明窗口不再合法，此时先停止收缩，等右端点继续往右走。

如此一来，每个元素最多被加进窗口一次、移出窗口一次，左右端点都不会回头。

**代码：**

```cpp
void Aiden()
{
    ll n, m;
    cin >> n >> m;
    vector<ll> a(n + 1), cnt(m + 1);
    for (ll i = 1; i <= n; i++)
        cin >> a[i];
    ll l = 1, num = 0, L = 1, R = n;
    for (ll r = 1; r <= n; r++)
    {
        cnt[a[r]]++;
        if (cnt[a[r]] == 1)
            num++;
        while (num == m)
        {
            if (r - l + 1 < R - L + 1)
                L = l, R = r;
            cnt[a[l]]--;
            if (cnt[a[l]] == 0)
                num--;
            l++;
        }
    }
    cout << L << ' ' << R << endl;
}
```

**时间复杂度：** $O(n+m)$。**空间复杂度：** $O(n+m)$。

这里还有两个细节：

1. 如果把某位画家的唯一一幅画移出了窗口，$num$ 必须减 1。
2. 有多个相同长度的最短区间时，取**左端点最小**的那组。指针按从左到右的顺序扫描，只在找到更短区间时更新答案。

---

## 本节小结

1. **二维差分：** 闭矩形加 $v$，只需要修改四个角。全部操作结束后，做一次二维前缀和还原矩阵。
2. **$+v$ 和 $-v$ 是一回事：** 矩形修改量不必是 1，负数照样可以处理；要注意原矩阵不为零时先建立差分。
3. **看到题意要会转化：** P2038 的关键是反过来考虑“每个公共场所能让哪些安装位置受益”，从而得到带权矩形加法。
4. **二维差分也能和别的思想结合：** P6070 先利用从左上到右下的顺序确定必须执行的操作，再用差分加速修改。
5. **双指针：** 两个端点能否单向移动，取决于题目有没有相应的单调性或可以维护的窗口信息。
6. **固定窗口与不定长窗口：** P1614 减去左边、加上右边；P1147 和 P1638 则根据当前条件决定何时收缩左端。
7. **排序 + 双指针：** P1102 利用排序后相同数字连续出现的性质统计数对，重复数字需要分别计数。

**感谢你看到这里，希望你喜欢这份讲义！**









# *7*二分查找

![image-20261025114853931](/assets/images/posts/cpp-algo/img-10.png)

```c++
答疑
问：如何理解 end = lowerBound(nums, target + 1) - 1 这段代码？

答：要想找到 ≤target 的最后一个数，无需单独再写一个二分。我们可以先找到这个数的右边相邻数字，也就是 >target 的第一个数。在所有数都是整数的前提下，>target 等价于 ≥target+1，这样就可以复用我们已经写好的二分函数了，即 lowerBound(nums, target + 1)。然后将其减一，就得到 ≤target 的最后一个数的下标。

问：如果 ≥target+1 的第一个数不存在怎么办？

答：这说明数组中的数都 ≤target。如果数组中有 target，那么数组的最后一个数（下标 n−1）就是 target（因为数组是递增的）。lowerBound(nums, target + 1) 在这种情况下会返回 n，减一得到 n−1，这正是我们要计算的下标。

问：为什么要写 left + (right - left) / 2？

答：在面试或者实际场景中，你不一定知道输入的数组有多长，万一数组长度达到 int 最大值，left + right 可能会发生加法溢出。当然，如果只看本题的数据范围，写 (left + right) / 2 也可以。对于 Python 来说，由于没有溢出这个概念，所以可以直接相加。

问：怎么判断我写的是哪一种二分？

答：看 while 循环的条件，如果是 left <= right，就是闭区间；如果是 left < right，就是半闭半开区间；如果是 left + 1 < right，就是开区间。

问：关于闭区间写法，为什么 nums[mid] >= target 成立的时候要写 right = mid - 1？此时的 mid 不是有可能是答案吗？这样写不会错过答案吗？

答：「二分范围」和「答案所在范围」是两个概念。设现在二分的范围是闭区间 [L,R]，如果下标在 [L,R] 中的数都小于 target，根据循环不变量，答案是 R+1。由此可见，当我们在闭区间 [L,R] 中二分时，答案所在范围是 [L,R+1]。顺带一提，如果题目保证答案在闭区间 [a,b] 中，则可以在 [a,b−1] 中二分，如果这个范围内的数都不满足要求，那么剩下的 b 就是答案（排除所有错误答案后，剩下的一定是正确答案）。

问：我看到一种二分的写法，在二分的过程中，额外记录答案的值。如何评价这种写法？

答：喜欢这种写法的同学，推荐写开区间二分。开区间二分 if 条件成立时更新的是哪个变量，最后返回的就是哪个变量。这和记录答案的做法如出一辙。

问：关于开区间二分，如何理解 −1 和 n 这两个下标？

答：可以假设 nums[−1]=−∞ 以及 nums[n]=∞，此时 nums 仍然是有序的。在这种情况下，nums[−1]<target，所以 −1 是红色；nums[n]≥target，所以 n 是蓝色。这个思想可以推广到二分答案，见本文末尾的二分题单
```

+1/-1**是因为闭区间已经取到了**，**开区间就不需要加减**

二分查找常用转化表
需求	                                        写法	                                      如果不存在

>≥x 的第一个元素的下标	    lowerBound(nums,x)	        结果为 n
>
>x 的第一个元素的下标	      lowerBound(nums,x+1)	    结果为 n
><x 的最后一个元素的下标	lowerBound(nums,x)−1	    结果为 −1
>≤x 的最后一个元素的下标	lowerBound(nums,x+1)−1	结果为 −1

作者：灵茶山艾府
链接：https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/1980196/er-fen-cha-zhao-zong-shi-xie-bu-dui-yi-g-t9l9/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## 板子题

[34. 在排序数组中查找元素的第一个和最后一个位置 - 力扣（LeetCode）](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/)

## 1.闭区间[l,r]

```c++
class Solution {
    // lower_bound 返回最小的满足 nums[i] >= target 的下标 i
    // 如果数组为空，或者所有数都 < target，则返回 nums.size()
    // 要求 nums 是非递减的，即 nums[i] <= nums[i + 1]
    int lower_bound(vector<int>& nums, int target) {
        int left = 0, right = (int) nums.size() - 1; // 闭区间 [left, right]
        while (left <= right) { // 区间不为空
            // 循环不变量：
            // nums[left-1] < target
            // nums[right+1] >= target
            int mid = left + (right - left) / 2;
            if (nums[mid] >= target) {
                right = mid - 1; // 范围缩小到 [left, mid-1]
            } else {
                left = mid + 1; // 范围缩小到 [mid+1, right]
            }
        }
        // 循环结束后 left = right+1
        // 此时 nums[left-1] < target 而 nums[left] = nums[right+1] >= target
        // 所以 left 就是第一个 >= target 的元素下标
        return left;
    }
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int start = lower_bound(nums, target);
        if (start == nums.size() || nums[start] != target) {
            return {-1, -1}; // nums 中没有 target
        }
        // 如果 start 存在，那么 end 必定存在
        int end = lower_bound(nums, target + 1) - 1;
        return {start, end};
    }
};

作者：灵茶山艾府
链接：https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/1980196/er-fen-cha-zhao-zong-shi-xie-bu-dui-yi-g-t9l9/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
作者：灵茶山艾府
链接：https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/1980196/er-fen-cha-zhao-zong-shi-xie-bu-dui-yi-g-t9l9/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

## 2.左闭右开[l,r)

```c++
class Solution {
    // lower_bound 返回最小的满足 nums[i] >= target 的下标 i
    // 如果数组为空，或者所有数都 < target，则返回 nums.size()
    // 要求 nums 是非递减的，即 nums[i] <= nums[i + 1]
    int lower_bound(vector<int>& nums, int target) {
        int left = 0, right = nums.size(); // 左闭右开区间 [left, right)
        while (left < right) { // 区间不为空
            // 循环不变量：
            // nums[left-1] < target
            // nums[right] >= target
            int mid = left + (right - left) / 2;
            if (nums[mid] >= target) {
                right = mid; // 范围缩小到 [left, mid)
            } else {
                left = mid + 1; // 范围缩小到 [mid+1, right)
            }
        }
        // 循环结束后 left = right
        // 此时 nums[left-1] < target 而 nums[left] = nums[right] >= target
        // 所以 left 就是第一个 >= target 的元素下标
        return left;
    }

作者：灵茶山艾府
链接：https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/1980196/er-fen-cha-zhao-zong-shi-xie-bu-dui-yi-g-t9l9/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

## 开区间（l,r）

```c++
开区间写法
class Solution:
    # lower_bound 返回最小的满足 nums[i] >= target 的下标 i
    # 如果数组为空，或者所有数都 < target，则返回 len(nums)
    # 要求 nums 是非递减的，即 nums[i] <= nums[i + 1]
    def lower_bound(self, nums: List[int], target: int) -> int:
        left, right = -1, len(nums)  # 开区间 (left, right)
        while left + 1 < right:  # 区间不为空
            mid = (left + right) // 2
            # 循环不变量：
            # nums[left] < target
            # nums[right] >= target
            if nums[mid] >= target:
                right = mid  # 范围缩小到 (left, mid)
            else:
                left = mid  # 范围缩小到 (mid, right)
        # 循环结束后 left+1 = right
        # 此时 nums[left] < target 而 nums[right] >= target
        # 所以 right 就是第一个 >= target 的元素下标
        return right
```

## 库函数

```c++
//`nums.begin()` 是 vector 的成员函数，返回一个【迭代器】
//指向 vector 的第一个元素
//lower_bound：左边界，第一个 >= x
//upper_bound：右边界，第一个 > x
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        // 也可以用 equal_range，见【C++ 写法二】
        int start = ranges::lower_bound(nums, target) - nums.begin();
        if (start == nums.size() || nums[start] != target) {
            return {-1, -1};
        }
        int end = ranges::upper_bound(nums, target) - nums.begin() - 1;
        return {start, end};
    }
};

作者：灵茶山艾府
链接：https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/1980196/er-fen-cha-zhao-zong-shi-xie-bu-dui-yi-g-t9l9/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```

### 1. lower_bound

含义：查找第一个满足 `a[i] >= x` 的位置。

也就是：

- 找第一个大于等于 `x` 的元素
- 如果所有元素都小于 `x`，返回数组长度 `n`

例如：

Plain text

```c++
a = [1, 2, 2, 2, 4, 5]
x = 2
```

结果：

Plain text

```c++
lower_bound = 1
```

因为下标 `1` 是第一个 `>= 2` 的位置。

### 2. upper_bound

含义：查找第一个满足 `a[i] > x` 的位置。

也就是：

- 找第一个严格大于 `x` 的元素
- 如果所有元素都小于等于 `x`，返回数组长度 `n`

对于：

Plain text

```c++
a = [1, 2, 2, 2, 4, 5]
x = 2
```

结果：

Plain text

```c++
upper_bound = 4
```

因为下标 `4` 是第一个 `> 2` 的位置。

### 3. 两者对比

Plain text

```c++
a = [1, 2, 2, 2, 4, 5]
      ↑        ↑
 lower_bound upper_bound
```

| 函数             | 查找条件             |
| ---------------- | -------------------- |
| `lower_bound(x)` | 第一个 `>= x` 的位置 |
| `upper_bound(x)` | 第一个 `> x` 的位置  |

因此，数组中 `x` 的出现次数为：

Python

```c++
upper_bound(x) - lower_bound(x)
```

本例中：

Plain text

```
4 - 1 = 3
```

### 4. C++ 写法

C++

```c++
#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> a = {1, 2, 2, 2, 4, 5};
    int x = 2;

    // 第一个 >= x 的位置
    int left = lower_bound(a.begin(), a.end(), x) - a.begin();

    // 第一个 > x 的位置
    int right = upper_bound(a.begin(), a.end(), x) - a.begin();

    cout << left << '\n';   // 1
    cout << right << '\n';  // 4
    cout << right - left << '\n'; // 3
}
```

注意：C++ 中返回的是**迭代器**，需要减去 `a.begin()` 才能得到下标。

### 5. Python 写法

Python 使用 `bisect` 模块：

Python

```python
from bisect import bisect_left, bisect_right

a = [1, 2, 2, 2, 4, 5]
x = 2

# 等价于 lower_bound
left = bisect_left(a, x)

# 等价于 upper_bound
right = bisect_right(a, x)

print(left)          # 1
print(right)         # 4
print(right - left)  # 3
```

对应关系：

Python

```
bisect_left  ≈ lower_bound
bisect_right ≈ upper_bound
```

### 6. 常见用途

#### 判断是否存在 `x`

Python

```
pos = bisect_left(a, x)

if pos < len(a) and a[pos] == x:
    print("存在")
else:
    print("不存在")
```

#### 统计 `x` 出现次数

Python

```
count = bisect_right(a, x) - bisect_left(a, x)
```

#### 求小于 `x` 的元素个数

Python

```
count = bisect_left(a, x)
```

#### 求小于等于 `x` 的元素个数

Python

```
count = bisect_right(a, x)
```

### 7. 边界条件

对于：

Python

```
a = [1, 3, 5]
```

查找 `x = 0`：

Plain text

```
lower_bound = 0
upper_bound = 0
```

查找 `x = 6`：

Plain text

```
lower_bound = 3
upper_bound = 3
```

返回 `len(a)` 是合法结果，表示没有找到满足条件的元素。使用下标访问前要先判断：

Python

```
pos = bisect_left(a, x)

if pos < len(a):
    print(a[pos])
```

最重要的记忆方式：

Plain text

```
lower_bound：左边界，第一个 >= x
upper_bound：右边界，第一个 > x
```

# *8*`DFS`

### 画递归搜索树

## 递归实现指数型枚举

[92. 递归实现指数型枚举 - AcWing题库](https://www.acwing.com/problem/content/94/)

```c++
#include<bits/stdc++.h>
using namespace std;
const int N=20;
int n;
int st[N];
void dfs(int x){//x表示当前枚举到什么位置；
	if(x>n){
		for(int i=1;i<=n;i++){
			if(st[i]==1){
				cout<<i<<" ";
			}
		}
		cout<<endl;
		return ; //一定要写，打断循环；
	}
	
	st[x]=1;//1：选；2：不选；0：考虑选还是不选； 
	dfs(x+1);
	st[x]=0;//归位，先考虑一次，再考虑下一次是选还是不选； 
	
	st[x]=2;
	dfs(x+1);
	st[x]=0;
}
int main(){
	ios::sync_with_stdio(0);cin.tie(0);
	cin>>n;
	dfs(1);
    return 0;
}
```

## 递归实现排列型枚举

https://www.luogu.com.cn/problem/P1706

![](/assets/images/posts/cpp-algo/img-11.jpeg)

```c++
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
const int N = 20;
int n;
//bool是为了确保元素不重复；
bool st[N];//记录当前的状态（初始为false），true标记已用，就不能选了，false标记没用过，即可以选
int arr[N];//存储输入的数据，e.g:321/123/312
void dfs(int x) {
	if (x > n) {
		for (int i = 1; i <= n; i++) {
			printf("%5d", arr[i]);
		}
		cout << endl;
		return ;
	}
	for (int i = 1; i <= n; i++) {
		if (!st[i]) {//st[i]没用，选上；
			st[i] = true;//选上了，已用；
			arr[x] = i;//第x个位置用i(先遍历一遍，找到第一个没用过的i；回溯是在i处递增下一个)；
			dfs(x + 1);//下一个位置；
			st[i] = false;//回溯时标记第i个元素解除使用状态，收回占用牌；
			arr[x] = 0;//回溯时第x个位置先空着；等下一遍过来填元素，清空储物柜；
		}
	}
}
int main() {
	cin >> n;
	dfs(1);
	return  0;
}
```

### 板子题

[P1088 [NOIP 2004 普及组\] 火星人 - 洛谷](https://www.luogu.com.cn/problem/P1088)

#### 常规`dfs`做法

完整代码展示

```c++
#include<bits/stdc++.h>
using namespace std;
int n,m;
const int N=10010;
bool st[N];
int arr[N];
int mars[N];
int cnt=0;
bool fd=false;
void dfs(int x){
	if(fd){
		return ;
	}
	if(x>n){
		cnt++;
		if(cnt==m+1){
			fd=true;
			for(int i=1;i<=n;i++){
				cout<<arr[i]<<" ";
			}
			cout<<endl;
		}
	    return ;
	}
	for(int i=1;i<=n;i++){
		if(!cnt){
			i=mars[x];
		}
		if(!st[i]){
			st[i]=true;
			arr[x]=i;
			dfs(x+1);
			st[i]=false;
			arr[x]=0;
		}
	}
}
int main(){
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		cin>>mars[i];
	}
	dfs(1);
	return 0;
}
```



#### 库函数神力乍现，吓哭了

next_permutation

```c++
while (m--) {
    next_permutation(a, a + n);
}
```

从当前数组 `a` 开始，**往后跳 M 个字典序排列**，每跳一次就把数组改成下一个排列，一共跳 M 次；

完整代码展示

```c++
#include <bits/stdc++.h>
using namespace std;

const int N = 10010;
int a[N];

int main() {
    int n, m;
    cin >> n >> m;

    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    while (m--) {
        next_permutation(a, a + n);
    }

    for (int i = 0; i < n; i++) {
        cout << a[i] << " ";
    }
    return 0;
}
```



## 递归实现组合型枚举

[P1157 组合的输出 - 洛谷](https://www.luogu.com.cn/problem/P1157)

![image-20260401183009514](/assets/images/posts/cpp-algo/img-12.png)

```c++
#include<bits/stdc++.h>
using namespace std;
int state,n,r;
const int N=21;
int arr[N];
void dfs(int x,int state){
	if(x>r){
		for(int i=1;i<=r;i++){
		printf("%3d",arr[i]);
	}
	printf("\n");
	return ;
}
	for(int i=state;i<=n;i++){
		arr[x]=i;
		dfs(x+1,i+1);
		arr[x]=0;
	}
}
int main(){
	cin>>n>>r;
	dfs(1,1);
	return 0;
}
```

# *9*位运算

异或

![image-20261025094340062](/assets/images/posts/cpp-algo/img-13.png)

下面用 Python 讲解图片中的三种基础位运算：`&`、`|`、`^`



## 一.按位与&

```c++
对应二进制位，都为 1 才是 1，否则为 0
```

常见用途：判断奇偶

一个数的二进制最低位：

- 偶数：最低位是 `0`
- 奇数：最低位是 `1`

所以可以这样判断

```c++
#include<bits/stdc++.h>

using namespace std;

int main(){
    int x=7;
    if(x&1){
        cout<<"奇数"<<endl;
    }else{
        cout<<"偶数"<<endl;
    }
    return 0;
}
```

`7 = 111`
`111 & 001 = 001`

## 二.按位或 `|`

```c++
两个对应位置只要有一个是 1，结果就是 1
```



## 三、按位异或 `^`

```c++
两个对应位置不同，结果是 1
两个对应位置相同，结果是 0
```

### 异或的核心性质

#### 1. 自己异或自己等于 0

```c++
cout(5 ^ 5)  # 0
```

二进制：

Plain text

```c++
101
^101
---
000
```

也就是：

Plain text

```c++
a ^ a = 0
```

#### 2. 和 0 异或，结果不变

```c++
cout(5 ^ 0)  # 5
```

即：

Plain text

```
a ^ 0 = a
```

##### 3. 异或顺序可以交换

Python

```c++
#include<bits/stdc++.h>

using namespace std;

int main(){
    cout<<(1 ^ 2 ^ 3); 
    cout<<(3 ^ 1 ^ 2);
    return 0;
}
```

两个结果相同。

即：

Plain text

```
a ^ b ^ c = c ^ a ^ b
```

##### 四、异或交换两个变量

Python 本身可以直接交换：



```c++
a, b = b, a
```

也可以利用异或：

Python

```c++
#include<bits/stdc++.h>

using namespace std;

int main(){
    int a = 5;
    int b = 3;

    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    
    cout<<a<<endl<<b<<endl;
    return 0;
}
```

过程如下：

```
a = 5 ^ 3
b = (5 ^ 3) ^ 3 = 5
a = (5 ^ 3) ^ 5 = 3
```

不过在 Python 中，推荐使用：

Python

```python
a, b = b, a
```

异或交换主要是帮助理解异或性质。

##### 五、异或和：找出只出现一次的数

假设数组中除了一个数只出现一次，其他数都出现两次：

Python

```
nums = [4, 1, 2, 1, 2, 4, 7]
```

答案是 `7`。

利用：

Plain text

```
a ^ a = 0
a ^ 0 = a
```



代码：

Python

```
nums = [4, 1, 2, 1, 2, 4, 7]

answer = 0

for x in nums:
    answer ^= x

print(answer)  # 7
```

展开为：

Plain text

```
0 ^ 4 ^ 1 ^ 2 ^ 1 ^ 2 ^ 4 ^ 7
```

相同的数会抵消：

Plain text

```
4 ^ 4 = 0
1 ^ 1 = 0
2 ^ 2 = 0
```

最后只剩：

Plain text

```
7
```

[M-小苯的异或疑惑（hard）_北京信息科技大学第十五届程序设计竞赛（同步赛）](https://ac.nowcoder.com/acm/contest/68572/M)

![image-20261025104919306](/assets/images/posts/cpp-algo/img-14.png)

```python
import sys
input = lambda:sys.stdin.readline().strip()

n=int(input())
a=list(map(int,input().split()))
f=a[0]
if(n%2!=0):
    print(0)
else:
    for i in range(1,n):
        f^=a[i]
    print(f)
```



优化思路：统计每个数出现了几次

考虑某个 `a[k]`：

- 它会和其他 `n - 1` 个元素进行异或
- 所以 `a[k]` 一共出现 `n - 1` 次

而异或有性质：

Plain text

```
x ^ x = 0
```

所以：

- 如果 `n - 1` 是偶数，`a[k]` 出现偶数次，会全部抵消
- 如果 `n - 1` 是奇数，`a[k]` 会保留一次

因此：

当 `n` 为奇数

Plain text

```
n - 1 为偶数
```

所有元素都抵消，答案是：

Plain text

```
0
```

当 `n` 为偶数

Plain text

```
n - 1 为奇数
```

每个元素保留一次，答案是：

Plain text

```
a[0] ^ a[1] ^ ... ^ a[n-1]
```



##### 六、多个数异或，本质上是统计每一位的奇偶性

例如：

Python

```
print(5 ^ 3 ^ 6)
```

二进制：

Plain text

```
5 = 101
3 = 011
6 = 110
```

逐位统计：

Plain text

```
第 1 位：1、0、1，有两个 1，结果为 0
第 2 位：0、1、1，有两个 1，结果为 0
第 3 位：1、1、0，有两个 1，结果为 0
```

所以：

Plain text

```
5 ^ 3 ^ 6 = 0
```

异或某一位上出现奇数个 `1`，结果该位就是 `1`；出现偶数个 `1`，结果就是 `0`。

### 七、三种运算对比

Python

```
a = 5  # 101
b = 3  # 011

print(a & b)  # 1，两个位置都为 1
print(a | b)  # 7，只要一个位置为 1
print(a ^ b)  # 6，两个位置不同
```

对应关系：

| 运算     | 规则               | 示例        |
| -------- | ------------------ | ----------- |
| `&`      | 都是 1 才是 1      | `5 & 3 = 1` |
| `    | ` | 有一个 1 就是 1    |             |
| `^`      | 不同为 1，相同为 0 | `5 ^ 3 = 6` |

### 八、注意：位运算和逻辑运算不同

位运算：

Python

```
&   |   ^
```

逻辑运算：

Python

```
and   or   not
```

例如：

Python

```
a = True
b = False

print(a and b)  # False
```

而位运算是对整数的二进制位进行操作：

Python

```
print(5 & 3)  # 1
```

不要混淆：

Python

```
if x > 0 and y > 0:
    print("都大于 0")
```

这里应该使用逻辑运算 `and`，不是 `&`。

### 最后记忆

Plain text

```
&：都为 1 才为 1
|：有 1 就为 1
^：不同为 1，相同为 0
```

最重要的异或性质：

Python

```
a ^ a == 0
a ^ 0 == a
```

这也是“找只出现一次的数”这类题目的基础。

int a[N], b[N >> 1];
int a[N]：定义一个全局整型数组 a，大小为 N（约 100 万），用于存储数据。
int b[N >> 1]：

1 是右移运算符，等价于整数除以 2（向下取整）。
N >> 1 即 N / 2，所以数组 b 的大小约为 50 万（1000011 / 2 = 500005）。
这种写法比直接写 N/2 更高效，是竞赛中常用的位运算技巧。
(n & (n-1)) == 0 是判断一个正整数 n 是否为 2 的幂的经典位运算方法，一定要注意==的优先级大于&；

>

![image-20260410164237025](/assets/images/posts/cpp-algo/img-15.png)

![image-20260521221850112](/assets/images/posts/cpp-algo/img-16.png)

![image-20260528004159366](/assets/images/posts/cpp-algo/img-17.png)

低 t 位相同” 等价于 “模 k 相同”

[D-骗你的，其实我是小红_牛客周赛 Round 144](https://ac.nowcoder.com/acm/contest/134957/D)

```c++
#include<iostream>
using namespace std;
int main() {
	int l, r, k;
	cin >> l >> r >> k;
	long long n = r - l + 1;
	long long p = n / k;
	long long q = n % k;
	cout << q * (p + 1) * p / 2 + (k - q) * (p - 1) * p / 2;
	return 0;

}
```

### 异或^

异或（XOR）是一种位运算，表示“**相同为 0，不同为 1**”。



- 同一个数异或两次会回到原值

- `a ^ a = 0`

- `a ^ 0 = a`

- `a ^ b = b ^ a`

- `a ^ (b ^ c) = (a ^ b) ^ c`

  

### 按位与&

只有两个二进制位都为 1，结果才是 1。

| 1    | 1    | 0    | 0    |
| ---- | ---- | ---- | ---- |
| 0    | 0    | 1    | 1    |
|      |      |      |      |
| 0    | 0    | 0    | 0    |

### 状态压缩

可以把一个字符串变成一个整数来表示。
例如：
•	1100 可以看成一个二进制数
•	它对应的整数状态就是一种“压缩后的表示”

示例见nk155复盘D;

mask |= (1 << j)

```c++
mask = mask | (1 << j);
```

拆开看两部分：

1. `1 << j`：`1`左移 j 位 → **只有第 j 位是 1，其余全部是 0**。

> j=3：`1<<3` = `0b1000`（二进制），值 = 8。

1. `|` 按位或运算：**只要对应位有一个是 1，结果这一位就是 1**。
2. `|=`：复合赋值运算符，把或的结果重新赋值给`mask`。

#### 作用

> **把 mask 的第 j 位强制设置成 1；其他所有位保持原样不变。**
>
> 如果第 j 位本来已经是 1，执行完也不变，不会破坏别的位。

#### 例子

```
mask = 5      二进制：0101
j = 1
1 << 1        二进制：0010

mask |= (1<<1)
0101 | 0010 = 0111 → mask变成7
```

`mask |= (1<<j)` → **集合 mask 把 j 号元素加进来**

意思是：如果第 j 位是 1，就把状态中的第 j 位也设为 1



## 左移<<

左移 `<<` ：`a << k`

**整体二进制往左挪 k 位，右边补 0**。

十进制等价：**相当于 × \(2^k\)**

示例，`int a = 5`；5 二进制：`0000 0101`



```c++
5 << 1
0000 0101 <<1 → 0000 1010   → 10        等价 5*2
5 << 2
0000 0101 <<2 → 0001 0100   → 20        等价 5*4
```

## 右移>>

右移 `>>`：`a >> k`

正数右移等价于 **除以 \(2^k\)，向下取整**。

`a = 5`，二进制 `0000 0101`

```c++
5 >> 1 → 0000 0010 → 2   等价 5 / 2
5 >> 2 → 0000 0001 → 1   等价 5 / 4
```



# 10大整数乘法：__int128

[L-A × B_河南萌新联赛2026第（四）场：南阳理工学院](https://ac.nowcoder.com/acm/contest/139235/L)

`__int128`可以保存到\(10^{38}\)，足够存\(10^{18}*10^{18}\)。

注意：cin/cout/printf**不支持直接打印__int128**，需要手写输出函数

```c++
#include <iostream>
using namespace std;

// 输出__int128
void print(__int128 x)
{
    if(x > 9) print(x / 10);
    putchar(x % 10 + '0');
}

int main()
{
    long long a, b;
    scanf("%lld %lld", &a, &b);
    __int128 res = (__int128)a * b;
    print(res);
    return 0;
}
```

# 11进制转换

`re[i] = pre[i] - □ × 10 + s[i]`，这个是**进制转换（字符串转数字）**的递推式！

把**字符串形式的 b 进制数字**，转成十进制整数：

```c++
res = res × base + (当前位数字)
```

举例子：字符串 `s = "123"`，base=10（十进制）

1. res 初始 = 0
2. 第一位`'1'`：`res = 0 * 10 + 1 = 1`
3. 第二位`'2'`：`res = 1 * 10 + 2 = 12`
4. 第三位`'3'`：`res = 12 * 10 + 3 = 123`

```c++
string s = "123";
long long res = 0;
for(char ch : s){
    int digit = ch - '0'; //字符转数字
    res = res * 10 + digit;
}
cout << res;
```

## 区分两个公式（很容易搞混）

1. **前缀和**：`pre[i] = pre[i-1] + a[i]` （求数组区间和）
2. **字符串转数字（进制转换递推）**：`res = res * base + digit`（你手写的这个）

# 字符串哈希算法

![image-20260917162827294](/assets/images/posts/cpp-algo/img-18.png)

多项式字符串哈希前缀：\(\boldsymbol{Pre[r] - Pre[l-1] \times base^{r-l+1}}\)



\(\boldsymbol{Hash(l,r) = Pre[r] - Pre[l-1] \times 10^{r-l+1}}\)



字符串：`1 3 5 7`，取 \(l=2,r=4\)

子串：`3 5 7`，值 = 357

- \(Pre[4]=1357\)
- \(Pre[l-1]=Pre[1]=1\)
- \(r-l+1 = 4-2+1=3\)，\(10^3=1000\)

\(Hash(2,4)=Pre[4]-Pre[1]\times10^{3}=1357 - 1\times 1000 = 357\)

和子串`357`完全一致。



## `s = " " + s;` 解析（字符串哈希经典写法）

> 这行代码的目的：**把字符串下标从 1 开始，而不是 C++ 默认的 0 下标**



