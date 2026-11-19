---
title: Python 语法与算法学习
published: 2026-11-19
description: Python 语法速查与常用算法模板合集，含 97 张配图（原笔记 6180 行）
tags: [Python, 算法, 笔记]
downloadable: true
---

固定模板

```python
import sys
import math
import bisect
import heapq

from collections import (
    deque,
    Counter,
    defaultdict
)

from functools import lru_cache
from itertools import permutations, combinations, accumulate
from operator import itemgetter


# ==================== 快速输入 ====================

# 方式一：按行读取，适合普通输入
input = sys.stdin.buffer.readline

# 读取一行整数
n, m = map(int, input().split())

# 读取一行数组
a = list(map(int, input().split()))


# 方式二：一次性读取全部输入，适合数据量特别大
# data = list(map(int, sys.stdin.buffer.read().split()))
# index = 0
# n = data[index]
# index += 1


# ==================== 数学函数 math ====================

# 最大公约数
g = math.gcd(12, 18)  # 6

# 最小公倍数
l = math.lcm(12, 18)  # 36

# 平方根
x = math.sqrt(16)  # 4.0

# 向上取整、向下取整
up = math.ceil(3.2)    # 4
down = math.floor(3.8)  # 3

# 阶乘
f = math.factorial(5)  # 120

# 组合数 C(n, k)
c = math.comb(5, 2)  # 10

# 无穷大
INF = 10**18

# 负无穷
NEG_INF = -10**18


# ==================== 二分 bisect ====================

a = [1, 2, 2, 4, 6]

# 第一个大于等于 x 的位置
left = bisect.bisect_left(a, 2)   # 1

# 第一个大于 x 的位置
right = bisect.bisect_right(a, 2)  # 3

# 统计 x 出现次数
count = bisect.bisect_right(a, 2) - bisect.bisect_left(a, 2)

# 向有序数组中插入元素，保持有序
bisect.insort(a, 3)


# ==================== 队列 deque ====================

q = deque()

# 入队
q.append(1)

# 从队头出队
x = q.popleft()

# 从队尾入队
q.appendleft(2)

# 从队尾出队
x = q.pop()


# ==================== BFS 常用写法 ====================

directions = [
    (-1, 0),  # 上
    (1, 0),   # 下
    (0, -1),  # 左
    (0, 1)    # 右
]

queue = deque()
queue.append((0, 0))

while queue:
    x, y = queue.popleft()

    for dx, dy in directions:
        nx = x + dx
        ny = y + dy


# ==================== 堆 heapq ====================

# Python 默认是小根堆
heap = []

heapq.heappush(heap, 5)
heapq.heappush(heap, 2)
heapq.heappush(heap, 8)

# 取出最小值
smallest = heapq.heappop(heap)

# 查看堆顶但不删除
top = heap[0]


# 模拟大根堆：存入负数
max_heap = []

heapq.heappush(max_heap, -10)
heapq.heappush(max_heap, -3)

# 最大值
maximum = -heapq.heappop(max_heap)


# ==================== Counter 计数 ====================

a = [1, 2, 2, 3, 3, 3]

cnt = Counter(a)

# cnt[3] == 3
# 出现次数最多的元素
most_common = cnt.most_common(1)


# ==================== defaultdict ====================

# 不存在的键默认值为 0
freq = defaultdict(int)

for x in a:
    freq[x] += 1


# 默认创建空列表
graph = defaultdict(list)

graph[1].append(2)
graph[2].append(3)


# ==================== 前缀和 accumulate ====================

a = [1, 2, 3, 4]

prefix = list(accumulate(a))
# prefix = [1, 3, 6, 10]

# 区间 [l, r] 的和：
# prefix[r] - prefix[l - 1]
# 注意这里假设下标从 1 开始


# ==================== 缓存递归结果 ====================

@lru_cache(None)
def fib(n):
    if n <= 1:
        return n

    return fib(n - 1) + fib(n - 2)


# ==================== 主程序 ====================

def solve():
    # 在这里写题目代码
    pass


if __name__ == "__main__":
    solve()
```

```python
import sys
import math
import bisect
import heapq
sys.set_int_max_str_digits(0)
sys.set_int_max_str_digits(0)
from collections import deque, Counter, defaultdict
from functools import lru_cache

input = sys.stdin.buffer.readline

INF = 10**18

directions = [
    (-1, 0),
    (1, 0),
    (0, -1),
    (0, 1)
]


def solve():
    n = int(input())
    a = list(map(int, input().split()))

    # 在这里写代码


if __name__ == "__main__":
    solve()
```

[Python 速成 - OI Wiki](https://oi-wiki.org/lang/python/)

课程（知识点）[TsingPig视频专辑-TsingPig视频合集-哔哩哔哩视频](https://space.bilibili.com/398421867/lists?sid=4898042&spm_id_from=333.788.0.0)

https://github.com/TsingPig/Lesson_Python_TsingPig.git

https://wiki.dwj601.cn/ds-and-algo/templates-py/

课程（带刷）[【假期逆袭！算法竞赛入门速成】蓝桥杯、天梯赛（python组）第一章 基础练习_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1LdweenEHP/?spm_id_from=333.1387.favlist.content.click&vd_source=a19f0b677a71a17e63a5ae63e952e806)

课程（带刷力扣）[算法路飞的个人空间-算法路飞个人主页-哔哩哔哩视频](https://space.bilibili.com/790513/lists/8322760?type=season)

灵神https://github.com/EndlessCheng/codeforces-go/blob/master/leetcode/README.md

# idle快捷键

![image-20260920153928665](/assets/images/posts/python-grammar/image-20260920153928665.png)

# 基础语法

## 命名

![image-20260920155958776](/assets/images/posts/python-grammar/image-20260920155958776.png)

## 数据类型

![image-20260920163909673](/assets/images/posts/python-grammar/image-20260920163909673.png)

```python
# int 整数
# float 浮点数
# str 字符串 不可变序列 s="Hello"
# list 列表，增删改查，'list=[1,2,3]'
# tuble 元组 不可变序列 'tub=(1,2,3)'
# set 集合 无序不重复 支持集合运算 's={1,2,3}'
# dict 字典 类似于C++map 'd={"key","value"}'
```



## 快读模板



```python
import sys
def main():
    data = list(map(int, sys.stdin.read().split()))

    
if __name__ == "__main__":
    main()
# Python 固定写法：当直接运行这个 py 文件时，执行 main () 函数。
```

导入系统模块，用来一次性读取全部输入。竞赛里`sys.stdin.read()`是高速读入，比循环`input()`快很多，处理 2e5 大数据不会超时

定义主函数，把所有逻辑包进去。Python 推荐写在函数里，运行速度比全局代码更快

1. `sys.stdin.read()`：一次性读取**全部输入文本**，把所有输入当成一整个长字符串。
2. `.split()`：按空白（空格、换行、回车）切分成一串字符串，不管有多少行。
3. `map(int, ...)`：把每一段字符串转成整数。
4. `list(...)`：转为整数列表，全部输入数字顺序存到`data`。

> 举例样例输入：
>
> ```
> 6
> 5 4
> 1 2 3 4 4
> ```

`data`会变成：`[6,5,4,1,2,3,4,4, ...]` 好处：不用一行一行读，规避多次 IO 带来的巨大耗时





[Problem - B1 - Codeforces](https://codeforces.com/contest/2258/problem/B1)

```python
import sys

def main():
    data = list(map(int, sys.stdin.read().split()))
    # `p`是**指针（索引）**，标记我们现在读到`data`列表第几个数字。初始从第 0 位开始   
    p = 0
    
    t = data[p]
    p += 1
    for _ in range(t):
        n = data[p]
        m = data[p+1]
        p += 2
        
        stx = [0] * (m + 1)   # stx[0 ~ m)，多开一位防止越界
        for __ in range(n):
            val = data[p]
            p += 1
            stx[val] += 1
        
        # 后缀和 stx1[x] = sum_{i >= x} stx[i]
        stx1 = [0] * (m + 2)
        for x in range(m, 0, -1):
            stx1[x] = stx1[x + 1] + stx[x]
        
        ans = 0
        for x in range(1, m + 1):
            l1 = stx1[x + 1]
            l2 = 0
            if 2 * x <= m:
                l2 = stx[2 * x]
            cnt = stx[x] + l1 + l2
            if cnt > ans:
                ans = cnt
        print(ans)

if __name__ == "__main__":
    main()

```

```python
import sys
input = sys.stdin.readline

def main():
    t = int(input())
    for _ in range(t):
        n, m = map(int, input().split())
        arr = list(map(int, input().split()))
        stx = [0]*(m+1)
        for v in arr:
            stx[v] += 1
        stx1 = [0]*(m+2)
        for x in range(m,0,-1):
            stx1[x] = stx1[x+1] + stx[x]
        ans = 0
        for x in range(1, m+1):
            l1 = stx1[x+1]
            l2 = 0
            if 2*x <= m:
                l2 = stx[2*x]
            cnt = stx[x] + l1 + l2
            ans = max(ans, cnt)
        print(ans)
        
if __name__ == "__main__":
    main()

```

对标C++

```c++
#include<bits/stdc++.h>

using namespace std;


int main(){
	int t;
	cin>>t;
	
	while(t--){
		int n,m;
		cin>>n>>m;
		
		
		vector<int> stx(m+1,0);
		vector<int> stx1(m+2,0);
		//vector<int> stx2(2*m);
		
		for(int i=0;i<n;i++){
			int x;
			cin>>x;
			
			stx[x]++;			 
		} 
		
		for(int x=m;x>=1;x--){
			stx1[x]=stx1[x+1]+stx[x];
		}
		
		int ans=0;
		
		for(int x=1;x<=m;x++){
			int l1=stx1[x+1];
			
			int l2=0;
			
			if(2*x<=m){
				l2=stx[2*x];
			}
			
			int cnt=stx[x]+l1+l2;
			ans=max(ans,cnt);
		}
		
		cout<<ans<<endl;
	}
	
	return 0;
}
```

### 板子2

```python
import sys
input = lambda: sys.stdin.readline().strip()
```



## 输入输出

```python
n=int(input())
print(n)
# a b 输入以空格分割
a,b=map(int ,input().split())
print(a+b)

print(n,a,b)

# Python print 默认自动换行

# 手动取消换行
print("输出列表:",end=' ')
```

![image-20260920182141902](/assets/images/posts/python-grammar/image-20260920182141902.png)





## list  列表

对标`vector`

```python
# list
# 它的作用：**读入一行空格隔开的数字，转成整数列表**
lis=list(map(int,input().split()))
print("输出列表:",end=' ')
print(lis)
# 尾部添加元素
lis.append(19)
print("输出列表:",end=' ')
print(lis)

print("不带括号版：",end=' ')
print(*lis)

# 输出某个元素
print("第一和第二个元素：",end=' ');
print(lis[0],lis[1])

# 计算总会
sum(lit)
```

![image-20260922204005080](/assets/images/posts/python-grammar/image-20260922204005080.png)

```python
# list 列表 里面可以放不同的数据类型

# listext = ["string",2,3,4,5]

list1 =[1,2,3,4,5]

# print(list1[0])
# 无索引默认删第一个，有索引按索引删
list1.pop()
print(list1)
list1.pop(0)
print(list1)

# append 末尾添加

list1.append(5)
print(list1)
print("list1的长度为 ",end='')
print(len(list1))

# insert 插入 在对应位置插入对应元素
list1.insert(0,1) #前面是索引位置，后面是位数据
print(list1)
```



![image-20260922203855764](/assets/images/posts/python-grammar/image-20260922203855764.png)

```python
list1=list(map(int ,input().split()))
# 排序
list1.sort()
print(list1)

# 翻转
list1.reverse()
print(list1)

# 删除指定值 remove(只删第一个) ||| pop 是删除指定索引值

list1.remove(1)
print(list1)
```

![image-20260922205124587](/assets/images/posts/python-grammar/image-20260922205124587.png)

```python
list1=list(map(int ,input().split()))
# 排序 默认从小到大
list1.sort()
print(list1)
# 从大到小
# 法1
list1.sort(reverse=True)
print(list1)
# 法2
b = sorted(list1, reverse=True)
print(b)
# 翻转
list1.reverse()
print(list1)

# 删除指定值 remove(只删第一个) ||| pop 是删除指定索引值

list1.remove(1)
print(list1)

```

![image-20260922205532211](/assets/images/posts/python-grammar/image-20260922205532211.png)

## 元组

不变的列表



```python
# 操作 和列表不变的部分一样
# 输出，列表[],元组 （）
tuple1=(1,2,3)

print (tuple1)
# 转化为list 操作
print (list(tuple1))
list1 = list(tuple1)
list1[0]=0
print(list1)

tub2=tuple(list1)
print(tub2)
```



![image-20260922211031438](/assets/images/posts/python-grammar/image-20260922211031438.png)





## 字符串

Python 里字符串`str`是不可变类型，不能直接写 `s[i] = '.'` 修改字符串里某个字符！

### 用法

```python
str1="hello"
str2=" Selina"

print(str1+str2)
# [l:r]:左闭右开 [l,r)
print(str1[0:4])
```

![image-20260920210430180](/assets/images/posts/python-grammar/image-20260920210430180.png)

```python
s1="hello boy"
s2="Oh No"
//加号
print(s1+s2)
```

![image-20260922200300845](/assets/images/posts/python-grammar/image-20260922200300845.png)



```python
s1="hello boy"

# len length

print(len(s1))


# capitalize 首字母大写

print (s1.capitalize())

# upper 全部大写

print(s1.upper())

s1="OH BOY"
# lower 全部小写

print(s1.lower())

# replace 把第一个参数替换为第二个

print(s1.replace("BOY","Selina ,I miss you"))

# find 查找 报告第一个出现的索引

print(s1.find("BOY"))
```



![image-20260922201148977](/assets/images/posts/python-grammar/image-20260922201148977.png)



```python
s1="hello boy"
s2="HELLO WORLD"
# bool
# a = True
# b = False

# isupper 判断是否都是大写

print(s1.isupper())
print(s2.isupper())
```

![image-20260922201710839](/assets/images/posts/python-grammar/image-20260922201710839.png)

```python
s1="hello boy"
s2="HELLO WORLD"

print(s1.split('o',1))
# 判断结尾是否匹配
print(s1.endswith("boy"))
```



![image-20260922202536004](/assets/images/posts/python-grammar/image-20260922202536004.png)

### 输入

#### 读取一整行输入（推荐！可以带空格

```python
s = input()   # 读取一行，回车结束；得到字符串，包含空格，**自动去掉末尾换行符**

print(s)
```

![image-20260922205935383](/assets/images/posts/python-grammar/image-20260922205935383.png)

#### 读取多个，按空格分割成字符串列表

```python
# 输入：hi python
lst = input().split()
print(lst)  # ['hi', 'python']

```

![image-20260922210054972](/assets/images/posts/python-grammar/image-20260922210054972.png)



### `strip()`

 的作用是：**删除字符串开头和结尾的空白字符**，包括空格、换行 `\n`、制表符 `\t` 等。

```python
s = input().strip()
```

![image-20260925122853443](/assets/images/posts/python-grammar/image-20260925122853443.png)

[Problem - B - Codeforces](https://codeforces.com/contest/2236/problem/B)

```python
import sys
input = sys.stdin.readline

def main():
    t=int(input())
    for _ in range(t):

        n,k=map(int,input().split())
        s=input().strip()

        cnt=[0] * k

        for i in range(n):
            if(s[i]=='1'):
                cnt[i%k]+=1

        ok=True

        for i in range(k):
            if(cnt[i]%2!=0):
                ok=False
                break

        print("YES" if ok else "NO")

if __name__ == "__main__":
    main()
```

### 字符串拼接

```python
import sys;
input=lambda:sys.stdin.readline().strip()

n=input()
print(f"I am {n} and I am studying Python in Nowcoder!")
```

![image-20261007151122830](/assets/images/posts/python-grammar/image-20261007151122830.png)

### 取最后一个字符区间



```python
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        asd=s.split()
        return len(asd[-1])
```

`s.split()` 默认按**空白（空格、换行、多个空格）**切分字符串，得到单词列表。 `asd[-1]` 取**最后一个单词**，`len()`求它的长度。

> 功能：**返回字符串最后一个单词的长度**（LeetCode 58. 最后一个单词的长度

### index

`index()` 用来查找元素在列表中的下标。

![image-20261024161616408](/assets/images/posts/python-grammar/image-20261024161616408.png)



## 函数



```python
# 函数
# 定义 def
def get_sum(sum1,sum2):
    return sum1+sum2

a,b=map(int,input().split())

print(get_sum(a,b))
```



![image-20260920211153853](/assets/images/posts/python-grammar/image-20260920211153853.png)



## 运算符

在上面的实践中可以发现，除法运算（`/`）永远返回浮点类型（在 Python 2 中返回整数）．如果你想要整数或向下取整的结果的话，可以使用整数除法（`//`）．同样的，你也可以像 C++ 中一样，使用模（`%`）来计算余数，科学计数法的形式也相同．

```python
# 数字

a=9
b=2
c=a+1
print(a/b)
print(c/b)
# 强转
print(int(a/b))
print(a//b)

print(a%b)

#  abs
a=-9
print(a/2)

print(abs(a/2))

```

![image-20260920212905505](/assets/images/posts/python-grammar/image-20260920212905505.png)

```python
import math
# round:四舍五入
a=3.4
print(round(a))
a=3.5
print(round(a))

# pow 幂

print(pow(a,2))

#ceil 引入math模块 向上取整
print(math.ceil(a))
```

![image-20260920213536914](/assets/images/posts/python-grammar/image-20260920213536914.png)



## 字典dict

重点 后续要打磨

kiys / values 键值对

**Python dict 等价 C++ unordered_map（哈希表）；C++ map 是有序版本，Python 里想要有序要额外 sorted**

```python
# dict 键值对，通过键查找值
dict1={"name":"老张","height":170,"weight":100}

print(dict1["name"])

print(len(dict1))
# 获得键
print(dict1.keys())
#获得值
print(dict1.values())

# 添加或修改
dict1["name"]="Aurora"
print(dict1["name"])

dict1["gender"]="man"
print(dict1.keys())

# 删除
dict1.pop("name")
print(dict1.keys())
```

![image-20260922212135164](/assets/images/posts/python-grammar/image-20260922212135164.png)

```c++
map<string,int> cnt;
```

```python
cnt = dict()  # 字典，等价C++ map
```

### 示例

[B - Survey Tabulation](https://atcoder.jp/contests/abc471/tasks/abc471_b)

![image-20261010153704095](/assets/images/posts/python-grammar/image-20261010153704095.png)

```python
n = int(input())
st = []
for _ in range(n):
    s = input()
    st.append(s)

cnt = dict()  # 字典，等价C++ map

for s in st:
    s_lower = s.lower()   # 全部转小写，和C++里^32效果一样
    if s_lower in cnt:
        cnt[s_lower] += 1
    else:
        cnt[s_lower] = 1

ans = 0
for v in cnt.values():
    ans = max(ans, v)

print(ans)

```

对标C++

```c++
#include<bits/stdc++.h>
using namespace std;
int main(){
	int n;
	cin>>n;
	
	vector<string> st(n);
	
	for(int i=0;i<n;i++){
		cin>>st[i];
	} 
	
	map<string,int> cnt;
	
	for(int i=0;i<n;i++){
		for(int j=0;j<st[i].size();j++){
			if(st[i][j]>='A'&&st[i][j]<='Z'){
				st[i][j]^=32;
			}
		}
		
		cnt[st[i]]++;
	}
	
	int ans=0;
	for(auto & p:cnt){
		int v=p.second;
		ans=max(ans,v);
	}
	cout<<ans<<endl;
}
```



## 集合

**set 无重复元素，无顺序** **无法索引查找**

```python
# set 无重复元素，无顺序 无法索引查找
set1={1,3,5,2,2}
set2=set((3,4,7,5,6))
print(set1)
print(set2)

# 添加元素
set1.add(10)
print(set1)

# 删除元素

set1.discard(2)
print(set1)

# 公有的元素
print(set1.intersection(set2))
# 不同的 1有2没有
print(set1.difference(set2))
```

![image-20260922213819174](/assets/images/posts/python-grammar/image-20260922213819174.png)

```py
# set 无重复元素，无顺序 无法索引查找
set1={1,3,5,2,2}
set2=set((3,4,7,5,6))
print(set1)
print(set2)

# 判断2是不是1的子集
print(set2.issubset(set1))
```

![image-20260922214045238](/assets/images/posts/python-grammar/image-20260922214045238.png)



## 队列



```python
# 从 Python 自带的 `collections` 模块里面，导入 `deque`（双端队列）这个类，**这样你后面代码才能直接写 `deque()` 创建队列**。
from collections import deque

# 创建空队列
q = deque()

# 入队（队尾添加） append
q.append(1)
q.append(2)
q.append(3)

# 出队（队头弹出） popleft
x = q.popleft()
print(x) # 1

# 查看队首元素（不取）
print(q[0]) # 2

# 判断队列是否为空
if q:
    print("队列不为空")
else:
    print("空队列")

# 获取长度
print(len(q))

```

![image-20260922232803419](/assets/images/posts/python-grammar/image-20260922232803419.png)

## if语句

```python
homework_finished=False

if(homework_finished):
    print("over")
else:
    print("go work")

a=int(input())

if(a==100):
    print("good")
elif (a==1000):
    print("fuck")
else :
    print("NNNN")
```





## 循环

### while

```python
x=int(input())
list1=[]
while x>0 :
    p=x%10
    list1.append(p)
    x//=10
print(*list1)
```

![image-20260923001512468](/assets/images/posts/python-grammar/image-20260923001512468.png)



### for

### 增减



```c++
int n = 5;
for(int i = 0; i < n; i++){
    cout << i << endl;
}
// 输出：0 1 2 3 4

```



```python
n = 5
for i in range(n):
    print(i)

```

- `range(n)`：产生 `0,1,2,...,n-1`，**左闭右开，取不到 n**
- 不需要写 `i++`，Python 自动帮 i+1
- 缩进代替大括号



```c++
// i从1到5，包含5
for(int i = 1; i <= 5; i++){
    cout << i << endl;
}

```



```python
# range(起点, 终点)，终点取不到！所以要写5+1=6
for i in range(1, 6):
    print(i)

```



```c++
for(int i = 1; i <= 10; i += 2){
    cout << i; //1,3,5,7,9
}

```





```python
# range(起始,终止,步长)
for i in range(1, 11, 2):
    print(i)

```





```c++
for(int i = 5; i >= 1; i--){
    cout << i; //5 4 3 2 1
}

```





```python
# range(开始，结束，-1)；结束值取不到，所以写0
for i in range(5, 0, -1):
    print(i)

```



### 遍历数组



```c++
int arr[] = {10,20,30};
for(int i = 0; i < 3; i++){
    cout << arr[i];
}
// 或者C++11范围for
for(auto num : arr){
    cout << num;
}

```



```python
lst = [10,20,30]
for num in lst:
    print(num)

```



```python
lst = [10,20,30]
for i in range(len(lst)):
    print(lst[i])

```



### 占位变量 `_`

（不需要用到循环变量的值，只需要循环跑 n 次）

```c++
for(int i=0; i<3; i++){
    cout << "hello";
}

```



```python
for _ in range(3):
    print("hello")

```



### 嵌套 for 循环



```c++
for(int i = 0; i < 3; i++){
    for(int j = 0; j < 3; j++){
        cout << i*j << " ";
    }
    cout << endl;
}

```



```python
for i in range(3):
    for j in range(3):
        print(i*j, end=" ")
    print() #内层循环跑完一行，换行

```



###  break /continue（和 C++ 作用完全一样）

- `break`：直接跳出整个循环
- `continue`：跳过本次循环剩下代码，直接进入下一轮



| 功能            | C++ 写法                | Python 写法              | 坑点                    |
| --------------- | ----------------------- | ------------------------ | ----------------------- |
| 循环 0~4        | `for(int i=0;i<5;i++)`  | `for i in range(5)`      | range 终点取不到        |
| 循环 1~5        | `for(int i=1;i<=5;i++)` | `for i in range(1,6)`    | 很多人忘记 + 1          |
| 倒序 5~1        | `for(int i=5;i>=1;i--)` | `for i in range(5,0,-1)` | 结束写 0，不是 1        |
| 遍历数组元素    | `for(auto x:a)`         | `for x in lst:`          | Python 不用下标         |
| 循环 n 次不用 i | `for(int i=0;i<n;i++)`  | `for _ in range(n)`      | `_`只是约定，不是关键字 |

```c++
#include <iostream>
using namespace std;
int main(){
    int n;
    cin >> n; //输入
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            cout << i*j << " ";
        }
        cout << endl; //换行
    }
    return 0;
}

```

`end=" "`：print 默认会换行，`end=" "`改成**用空格隔开，不换行**



```python
# 1. 输入：读取一个整数n
n = int(input())

# 2. 嵌套循环，n行n列
for i in range(n):
    for j in range(n):
        print(i*j, end=" ")
    print()

```



## 列表与字符串转换

py的字符串是不可变的（阴间）

**操作先转列表，再转字符串**

```python
# 1.输入一串字符
s = input("请输入一串字符：")
# 2.转为列表，每个字符单独放进去
lst = list(s)

# ==========中间操作在这里写==========
# 举几个常见操作例子，你可以按需修改
# 例1：把下标0的字符改成大写
lst[0] = lst[0].upper()
# 例2：反转整个字符列表
lst.reverse()
# 例3：删除第2个字符（下标1）
# del lst[1]
# ====================================

# 3.列表转回字符串
result = ''.join(lst)
print("处理后的字符串：", result)

```





# 竞赛py常用

[蓝桥杯py常用语法（面向小白，便于速成）_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV164Z9YTErP/?spm_id_from=333.1387.favlist.content.click&vd_source=a19f0b677a71a17e63a5ae63e952e806)

## 输入列表

```
lis=list(map(int,input().split()))

print(lis)
```

![image-20260925144603249](/assets/images/posts/python-grammar/image-20260925144603249.png)



[P16235 [蓝桥杯 2026 省 B\] 蓝桥竞技 - 洛谷](https://www.luogu.com.cn/problem/P16235)

```python
t = int(input())

for _ in range(t):

    n = int(input())

    a=list(map(int,input().split()))

    total=sum(a)

    if(total%5!=0):
        #print(" 该轮失败： total ")
        print("F")
        continue

    k=total//5
    flag=True
    
    print(k)

    for num in a:
        if num>k:
            flag=False
            print(" 该轮失败： k ")
            print(num)
            break

    print("T" if flag else "F")

```



## 输入字符串列表

```python
# 列表字符串
s=list(input().strip())
print(s)
```

![image-20260925194757225](/assets/images/posts/python-grammar/image-20260925194757225.png)



```python
# 创建分配列表
lis=[0]*100
# 创造n行m列
lit = [[0 for i in range(m)] for j in range(n)]

lit = [[0 for _ in range(m)] for _ in range(n)]

lit = [[0] * m for _ in range(n)]
#这是**列表推导式**，一次性生成包含 2 个列表的二维列表（2 行网格），等价于下面完整循环写法：
grid = [list(input().strip()) for _ in range(2)]

# 列表叠加器创造列表
lit=[[0 for i in range(3)] for j in range(3)]
lit[1][1]=1
print(lit)
```

![image-20260925195613900](/assets/images/posts/python-grammar/image-20260925195613900.png)



```python
import sys

input = sys.stdin.readline

# 读取 n 和 m
n, m = map(int, input().split())

# 读取 n 个字符串 S  一行一行读
s = [input().strip() for _ in range(n)]

# 读取 m 个字符串 T
t = [input().strip() for _ in range(m)]

print(s)
print(t)
```





## 列表输出

```python
# 创建分配列表
lis=[1]*6

# 列表叠加器创造列表
lit=[[0 for i in range(3)] for j in range(3)]
lit[1][1]=1
print(lit)

# 以空格为分格符
print(" ".join(map(str,lit)))
print(*lit)
print(*lis)
print(" ".join(map(str,lis)))
```

![image-20260925195837618](/assets/images/posts/python-grammar/image-20260925195837618.png)

## 输出保留小数

```python
a=1.229178
b=0

print(f"{a:.2f}")
print(f"{b:.3f}")
print(round(a,2))
print(round(b,2))
```

![image-20260925200652250](/assets/images/posts/python-grammar/image-20260925200652250.png)

## list



### 1. 作用

#### `s.find(sub, start=0, end=len(s))`

- 查找子串 `sub` 在字符串`s`中**第一次出现的下标**
- 参数：`start`起始位置，`end`终止位置（左闭右开）
- ✅ 找到：返回起始索引
- ❌ 找不到：**返回 -1**（不会抛异常）

python



运行





```
"abcabc".find("bc")    # 1
"abcabc".find("xx")    # -1
```

#### `s.index(sub, start=0, end=len(s))`

- 和`find`几乎一样，查找子串第一次出现下标
- ✅ 找到：返回起始索引
- ❌ 找不到：**抛出 ValueError**

python



运行





```
"abcabc".index("bc")   # 1
"abcabc".index("xx")   # ValueError: substring not found
```

> 一句话区分 find vs index：**找不到时，find 返回 - 1，index 报错**

#### `s.count(sub, start=0, end=len(s))`

- 统计子串`sub`在指定区间**不重叠出现的次数**

python



运行





```
"aaaa".count("aa") # 2 （位置0、2，不会重叠计数）
```

### 2. 时间复杂度

> Python 字符串底层是朴素匹配（没有 KMP，CPython 实现）
>
> 设主串长度 n，子串长度 m

表格







| 方法      | 时间复杂度      | 说明                                     |
| :-------- | :-------------- | :--------------------------------------- |
| `find()`  | \(O(n\cdot m)\) | 最坏情况逐位置比对                       |
| `index()` | \(O(n\cdot m)\) | 和 find 底层代码几乎一样，仅异常处理不同 |
| `count()` | \(O(n\cdot m)\) | 遍历整串，每次尝试匹配子串               |

> 补充：
>
> 1. 日常短字符串感受不出来差异；**超大文本 + 长子串**才会明显变慢
> 2. 列表的 `list.count()`：\(O(n)\)，遍历一次列表逐个相等判断
> 3. 列表的 `list.index()`：\(O(n)\)，找到第一个匹配元素就停止
>
> ⚠️ 列表**没有 find ()**！很多人容易混淆字符串和列表 API。

### 3. 简单总结对比表

表格







| 函数  | 功能                    | 未找到行为    | 复杂度 (字符串) | 复杂度 (列表) |
| :---- | :---------------------- | :------------ | :-------------- | :------------ |
| find  | 查找首次子串位置        | return -1     | \(O(nm)\)       | 不存在        |
| index | 查找首次子串 / 元素位置 | 抛 ValueError | \(O(nm)\)       | \(O(n)\)      |
| count | 统计匹配次数            | 返回 0        |                 |               |



## set

```python
s.add(x)        # 添加元素，存在则无变化
s.remove(x)     # 删除元素，不存在抛KeyError
s.discard(x)    # 删除元素，不存在不报错
s.pop()         # 随机删除一个元素并返回
s.clear()       # 清空集合

# 集合运算
a & b   # 交集 a.intersection(b)
a | b   # 并集 a.union(b)
a - b   # 差集 a.difference(b)
a ^ b   # 对称差集（只在其中一个里面的元素）
```

判断元素 `a` **是否存在于集合中**，存在返回 `True`，不存在返回 `False`

```python
s = {1,2,3}
print(2 in s)   # True
print(5 in s)   # False
```



## 优先队列heapq

O（log(n)）

返回最小值,py 里面只要小分堆，大分堆加负号使用



```python
import heapq
q=[]
heapq.heappush(q,2)
heapq.heappush(q,1)
print(q)
# 弹出并返回堆顶最小值，
print(heapq.heappop(q))
print(q)
print(len(q))
```

![image-20260925231642336](/assets/images/posts/python-grammar/image-20260925231642336.png)



## bin

```python
a=bin(3)
print(a)
print(a[2:])
```

![image-20260925231848735](/assets/images/posts/python-grammar/image-20260925231848735.png)

```python
a=9
lis=list(map(int,bin(a)[2:].zfill(10).strip()))
print(lis)

```

![image-20260925232049408](/assets/images/posts/python-grammar/image-20260925232049408.png)

### 分步解析

#### 1. `bin(a)`

`bin()` 把整数转**二进制字符串**，**自带前缀 `0b`**

python



运行





```python
bin(9)   # '0b1001'
```

9 的二进制：\(8+1 = 1001_2\)

#### 2. `bin(a)[2:]`

切片从下标 2 开始，**切掉前面的 `0b`**

python



运行





```python
bin(9)[2:]   # '1001'
```

#### 3. `.zfill(10)`

`zfill(n)`：**在字符串左侧补 0，让总长度等于 n**

`'1001'` 长度是 4，左边补 6 个 0 →

python



运行





```python
'1001'.zfill(10)   # '0000001001'
```

#### 4. `.strip()`

> strip ()：删除字符串**首尾空白字符（空格、换行等）**
>
> 这里字符串`'0000001001'`首尾没有空格，**strip 在这里等于没作用，多余代码**

#### 5. `map(int, 字符串)`

字符串是`'0000001001'`，遍历每一个字符，逐个转 int

```python
'0'→0, '0'→0 ... '1'→1
```

#### 6. `list(...)`

把 map 对象转为列表，得到最终：

python



运行





```python
[0, 0, 0, 0, 0, 0, 1, 0, 0, 1]
```

------

### 一句话总结

> 把数字 9 转为**10 位定长二进制列表（高位补 0）**
>
> 注意：`strip()` 在这里是无效冗余代码，可以删掉。

### 简化等价写法（去掉没用的 strip）

python



运行





```python
a=9
lis=list(map(int,bin(a)[2:].zfill(10)))
print(lis)
```

### 拓展考点（算法笔试常用）

- `zfill` 是**左边补 0**；`rjust` 也可以实现同样效果
- 如果想要**从右往左固定位数**，不能直接 zfill
- 如果要得到**倒序二进制列表**（最低位放第一个）：`bin(a)[2:][::-1]`

## 排序

```python
lis=[1,3,2,4,5]
lis.sort()
print(lis)
lis.sort(reverse=True)
print(lis)
```

![image-20260925232642665](/assets/images/posts/python-grammar/image-20260925232642665.png)

```python
lis=[[1,2],
     [3,4],
     [7,1]
     ]
# 根据第二个值对整个列表排序
lis.sort(key=lambda x : x[1])
print(lis)
```

![image-20260925234553031](/assets/images/posts/python-grammar/image-20260925234553031.png)

```python
lis=[[1,2],
     [3,4],
     [7,4]
     ]
# 先根据第二个值，再根据第一个值对整个列表排序
lst.sort(key=lambda x:  (x[1],x[0]))
lis.sort(key=lambda x : (x[1],x[0]))
print(lis)
```

![image-20260925234917473](/assets/images/posts/python-grammar/image-20260925234917473.png)

[C-小月的排序_牛客周赛 Round 161](https://ac.nowcoder.com/acm/contest/140235/C)

```python
import sys

d = list(map(int, sys.stdin.buffer.read().split()))

n, k = d[0], d[1]
a = d[2:]


def key(x):
    # 转成二进制字符串，例如 13 -> "1101"
    s = bin(x)[2:]

    # 统计二进制中 1 的个数
    cnt = s.count('1')

    # 0 特殊处理
    if x == 0:
        low = 31
    else:
        # 从右往左查找第一个 1
        # 位置从 0 开始
        low = s[::-1].index('1')

    # Python 会依次比较 cnt、low、x
    return cnt, low, x


a.sort(key=key)

print(a[k - 1])
```



## 查找

```python
import bisect

lis=[1,2,4,3,5,4]
 # 查找第一个大于等于4的下标
print(bisect.bisect_left(lis,4))
```

![image-20260925235212593](/assets/images/posts/python-grammar/image-20260925235212593.png)

```python
import bisect

lis=[1,5,4,3,5,4]
 # 查找第一个大于4的下标
print(bisect.bisect_right(lis,4))
```

![image-20260925235259313](/assets/images/posts/python-grammar/image-20260925235259313.png)

## 转ASCII码

```python
a="A"

print(ord(a))
```

![image-20260925235536761](/assets/images/posts/python-grammar/image-20260925235536761.png)

```python
a=65

print(chr(a))
```

![image-20260925235522704](/assets/images/posts/python-grammar/image-20260925235522704.png)

## 进制转换

#### 16->10

```python
import sys

input = lambda: sys.stdin.readline().strip()

n = input()
print(int(n, 16))
```

#### 整数转二进制

```python
bin(n)
```

e.g

```python
bin(16)  # '0b10000'
```



## math

```python
import math
# 找最小公倍数
print(math.gcd(4,6))
```

![image-20260925235708493](/assets/images/posts/python-grammar/image-20260925235708493.png)

```python
import math
# kai'f
print(math.sqrt(4))
```

![image-20260925235802260](/assets/images/posts/python-grammar/image-20260925235802260.png)



## 切片

```python
s[start:end:step]
```

![image-20261008151501903](/assets/images/posts/python-grammar/image-20261008151501903.png)

```python
class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        # s拼接后去掉首尾
        return s in (s+s)[1:-1]
```



`[:-1]` 是 Python 的**切片写法**，表示：

从开头开始，取到倒数第一个元素之前，不包含倒数第一个元素。



## 判断子串

![image-20261008150931333](/assets/images/posts/python-grammar/image-20261008150931333.png)



## 转置

```python
b=lst[::-1]
```



库函数

```python
#`isalnum()` 用于判断字符是否是：

- 英文字母
- 数字
```

![image-20261022163245843](/assets/images/posts/python-grammar/image-20261022163245843.png)



```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        n=len(s)
        l=0
        r=n-1
        while(l<r):
            if not s[l].isalnum():
                l+=1
            elif not s[r].isalnum():
                r-=1
            elif(s[l].lower()==s[r].lower()):
                l+=1
                r-=1
            else:
                return False
        return True
```

## 向上取整

![image-20261025165132886](/assets/images/posts/python-grammar/image-20261025165132886.png)

```python
(suc+c-1)//c
```

二分

![image-20261025165417667](/assets/images/posts/python-grammar/image-20261025165417667.png)

```python
def lower_bound(pot: list[int], suc1: int) -> list[int]:
    l=0
    r=len(pot)-1

    while(l<=r):
        m=(l+r)//2
        if(pot[m]>=suc1):
            r=m-1
        else:
            l=m+1
    return l

class Solution:
    def successfulPairs(self, spells: list[int], potions: list[int], suc: int) -> list[int]:
        pairs=[]
        potions.sort()
        for c in spells:
            #cnt=0
            k1=(suc+c-1)//c
            st=lower_bound(potions,k1)
            pairs.append(len(potions)-st)
        
        return(pairs)
```

## 逆元

在 Python 中，“逆元”通常指**模逆元**：

![image-20261030210857714](/assets/images/posts/python-grammar/image-20261030210857714.png)

### 1. Python 3.8+

直接使用：

Python

```python
y = 3
mod = 7

inv_y = pow(y, -1, mod)
print(inv_y)  # 5
```

因为：

![image-20261030210921395](/assets/images/posts/python-grammar/image-20261030210921395.png)

![image-20261030211018737](/assets/images/posts/python-grammar/image-20261030211018737.png)

Python

```python
y_inv = pow(y, -1, mod)
```

注意：只有当 `gcd(y, mod) == 1` 时逆元存在，否则会报错。

Python

```python
pow(2, -1, 4)  # ValueError，因为 2 和 4 不互质
```

### 2. 竞赛中常见：模质数逆元

如果模数是质数 `MOD`，根据费马小定理：

Python

```python
inv_y = pow(y, MOD - 2, MOD)
```

例如：

Python

```python
MOD = 10**9 + 7
y = 3

inv_y = pow(y, MOD - 2, MOD)
```

模逆元的核心应用是：**在模运算中实现“除法”**。

![image-20261030211232377](/assets/images/posts/python-grammar/image-20261030211232377.png)

```python
MOD = 10**9 + 7

def combination(n, k):
    if k < 0 or k > n:
        return 0

    fact = [1] * (n + 1)

    for i in range(1, n + 1):
        fact[i] = fact[i - 1] * i % MOD

    numerator = fact[n]
    denominator = fact[k] * fact[n - k] % MOD

    # denominator 的逆元
    denominator_inv = pow(denominator, MOD - 2, MOD)

    return numerator * denominator_inv % MOD
```



![image-20261030211337420](/assets/images/posts/python-grammar/image-20261030211337420.png)

```python
MOD = 10**9 + 7

def combination(n, k):
    if k < 0 or k > n:
        return 0

    fact = [1] * (n + 1)

    for i in range(1, n + 1):
        fact[i] = fact[i - 1] * i % MOD

    numerator = fact[n]
    denominator = fact[k] * fact[n - k] % MOD

    # denominator 的逆元
    denominator_inv = pow(denominator, MOD - 2, MOD)

    return numerator * denominator_inv % MOD
```

![image-20261030211400273](/assets/images/posts/python-grammar/image-20261030211400273.png)

```python
MOD = 10**9 + 7

x1, y1 = 1, 2
x2, y2 = 4, 8

dy = (y2 - y1) % MOD
dx = (x2 - x1) % MOD

slope = dy * pow(dx, MOD - 2, MOD) % MOD
```



![image-20261030211440818](/assets/images/posts/python-grammar/image-20261030211440818.png)

## 列表转字符串输出

```python
print(''.join(ans))
```

表示：**把列表 `ans` 中的所有字符串拼接起来，中间不添加任何字符，然后输出。**

例如：

```python
ans = ['a', 'b', 'c']
print(''.join(ans))
```

输出：

```text
abc
```

这里：

```python
''
```

是一个空字符串，表示拼接时不加分隔符。

如果写成：

```python
print(' '.join(ans))
```

则会在元素之间加空格：

```python
ans = ['a', 'b', 'c']
print(' '.join(ans))
```

输出：

```text
a b c
```

如果写成：

```python
print(','.join(ans))
```

输出：

```text
a,b,c
```

在你前面的代码中：

```python
ans = ['1', '3', 'a']
print(''.join(ans))
```

输出：

```text
13a
```

如果题目要求字符之间有空格，就使用：

```python
print(' '.join(ans))
```

输出：

```text
1 3 a
```



[B-小红的字符串压缩_牛客周赛 Round 169](https://ac.nowcoder.com/acm/contest/143199/B)



```python
import sys

input = sys.stdin.readline


def solve():
    n = int(input())
    s = input().strip()

    r = []

    p = s[0]
    c = 1

    # 连续相同字符压缩
    for i in range(1, n):
        if s[i] == p:
            c += 1
        else:
            r.append(p + str(c))
            p = s[i]
            c = 1

    r.append(p + str(c))
    r1=''.join(r)
    # 统计压缩后字符串中每个字符出现的次数
    cnt = {}
    for ch in r1:
        cnt[ch]=cnt.get(ch,0)+1
    

    mx = max(cnt.values())

    # sorted 默认按照 ASCII 码从小到大排序
    ans = []

    for ch in sorted(cnt):
        if cnt[ch] == mx:
            print(ch,end=' ')


if __name__ == "__main__":
    solve()
```



```python
import sys
import math
import bisect
import heapq
from collections import deque, Counter, defaultdict

#sys.set_int_max_str_digits(0)

input = sys.stdin.readline

INF = 10**18
mod = 998244353

directions = [
    (-1, 0),
    (1, 0),
    (0, -1),
    (0, 1),
]

X4 = [1, 0, -1, 0]
Y4 = [0, 1, 0, -1]

X8 = [0, 1, 1, 1, 0, -1, -1, -1]
Y8 = [1, 1, 0, -1, -1, -1, 0, 1]

Xh = [1, 2, 2, 1, -1, -2, -2, -1]
Yh = [2, 1, -1, -2, -2, -1, 1, 2]


def solve():
    n = int(input())
    s=input().strip()
    s+=' '
    st=[]
    l=1
    for i in range(1,len(s)):
        if(s[i]==s[i-1]):
            l+=1
        else:
            st.append(s[i-1])
            st.append(str(l))
            l=1
    #print(''.join(st))
    # 将列表拼接成完整压缩字符串
    r = ''.join(st)
    cnt1=[0]*26
    cnt2=[0]*10

    for ch in r:
        if 'a'<=ch<='z':
            cnt1[ord(ch)-ord('a')]+=1
        elif '0' <= ch <= '9':
            cnt2[ord(ch) - ord('0')] += 1

    mx1=max(cnt1)
    mx2=max(cnt2)
    # print(mx1)
    # print(mx2)
    if(mx1==mx2):
        for i in range(10):
            if(cnt2[i]==mx2):
                print(chr(i+ord('0')),end=' ')
        for i in range(26):
            if(cnt1[i]==mx1):
                print(chr(i+ord('a')),end=' ')
    elif(mx1>mx2):
        for i in range(26):
                            if(cnt1[i]==mx1):
                                print(chr(i+ord('a')),end=' ')
    else:
        for i in range(10):
                    if(cnt2[i]==mx2):
                        print(chr(i+ord('0')),end=' ')

if __name__ == "__main__":
    solve()

"""
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
"""
```



# 算法

## 二分

增减性单调的情况

[852. 山脉数组的峰顶索引 - 力扣（LeetCode）](https://leetcode.cn/problems/peak-index-in-a-mountain-array/description/)

![image-20261010170010316](/assets/images/posts/python-grammar/image-20261010170010316.png)

```python
class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:
        l=0
        r=len(arr)-1
        mid=0
        while(l<r):
            mid=(l+r)//2
            if(arr[mid-1]<arr[mid] and arr[mid]>arr[mid+1]):
                break
            #下降段：mid可能就是r
            elif(arr[mid]>arr[mid+1]):
                r=mid
            #上升段：mid一定不是l
            elif(arr[mid]<arr[mid+1]):
                l=mid+1
        return mid
```

```python
class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:
        l=0
        r=len(arr)-2
        while(l<=r):
            m=(l+r)//2
            if(arr[m]<arr[m+1]):
                l=m+1
            else:
                r=m-1
        return l
```



### 经典例题

[34. 在排序数组中查找元素的第一个和最后一个位置 - 力扣（LeetCode）](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/)

![image-20261025105234163](/assets/images/posts/python-grammar/image-20261025105234163.png)

![image-20261025114853931](/assets/images/posts/python-grammar/image-20261025114853931.png)

最后一个 ≤ x = 第一个 > x 的位置 - 1
最后一个 < x = 第一个 ≥ x 的位置 - 1

```python
#[] 左右闭区间
def lower_bound(nums: list[int], target: int) -> list[int]:
    l=0
    n=len(nums)
    r=n-1
    while(l<=r):
        #写在循环里面
        m=(l+r)//2
        if(nums[m]<target):
            l=m+1
        else:
            r=m-1
    return l

class Solution:
    def searchRange(self, nums: list[int], target: int) -> list[int]:
        start=lower_bound(nums,target)
        if(start>=len(nums) or nums[start]!=target):
            return [-1,-1]
        end=lower_bound(nums,target+1)-1
        return [start,end]
```

```python
class Solution:
    # lower_bound 返回最小的满足 nums[i] >= target 的下标 i
    # 如果数组为空，或者所有数都 < target，则返回 len(nums)
    # 要求 nums 是非递减的，即 nums[i] <= nums[i + 1]
    def lower_bound(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1  # 闭区间 [left, right]
        while left <= right:  # 区间不为空
            # 循环不变量：
            # nums[left-1] < target
            # nums[right+1] >= target
            mid = (left + right) // 2
            if nums[mid] >= target:
                right = mid - 1  # 范围缩小到 [left, mid-1]
            else:
                left = mid + 1  # 范围缩小到 [mid+1, right]
        # 循环结束后 left = right+1
        # 此时 nums[left-1] < target 而 nums[left] = nums[right+1] >= target
        # 所以 left 就是第一个 >= target 的元素下标
        return left

    def searchRange(self, nums: List[int], target: int) -> List[int]:
        start = self.lower_bound(nums, target)
        if start == len(nums) or nums[start] != target:
            return [-1, -1]  # nums 中没有 target
        # 如果 start 存在，那么 end 必定存在
        end = self.lower_bound(nums, target + 1) - 1
        return [start, end]

#[)左闭右开

class Solution:
    # lower_bound 返回最小的满足 nums[i] >= target 的下标 i
    # 如果数组为空，或者所有数都 < target，则返回 len(nums)
    # 要求 nums 是非递减的，即 nums[i] <= nums[i + 1]
    def lower_bound(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums)  # 左闭右开区间 [left, right)
        # 有开区间不等于
        while left < right:  # 区间不为空
            # 循环不变量：
            # nums[left-1] < target
            # nums[right] >= target
            mid = (left + right) // 2
            if nums[mid] >= target:
                right = mid  # 范围缩小到 [left, mid)
            else:
                left = mid + 1  # 范围缩小到 [mid+1, right)
        # 循环结束后 left = right
        # 此时 nums[left-1] < target 而 nums[left] = nums[right] >= target
        # 所以 left 就是第一个 >= target 的元素下标
        return left

    def searchRange(self, nums: List[int], target: int) -> List[int]:
        start = self.lower_bound(nums, target)  # 选择其中一种写法即可
        if start == len(nums) or nums[start] != target:
            return [-1, -1]  # nums 中没有 target
        # 如果 start 存在，那么 end 必定存在
        end = self.lower_bound(nums, target + 1) - 1
        return [start, end]

#() 左右开区间
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

    def searchRange(self, nums: List[int], target: int) -> List[int]:
        start = self.lower_bound(nums, target)  # 选择其中一种写法即可
        if start == len(nums) or nums[start] != target:
            return [-1, -1]  # nums 中没有 target
        # 如果 start 存在，那么 end 必定存在
        end = self.lower_bound(nums, target + 1) - 1
        return [start, end]


```

### 库函数

![image-20261025160012585](/assets/images/posts/python-grammar/image-20261025160012585.png)

![image-20261025160038345](/assets/images/posts/python-grammar/image-20261025160038345.png)



```python
class Solution:
    def maximumCount(self, nums: List[int]) -> int:
        neg = bisect_left(nums, 0)
        pos = len(nums) - bisect_right(nums, 0)
        return max(neg, pos)

作者：灵茶山艾府
链接：https://leetcode.cn/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/2050916/mo-ni-by-endlesscheng-8e43/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

![image-20261025160218155](/assets/images/posts/python-grammar/image-20261025160218155.png)

![image-20261025160324997](/assets/images/posts/python-grammar/image-20261025160324997.png)

![image-20261025160400469](/assets/images/posts/python-grammar/image-20261025160400469.png)



## 双指针

1. **连续区间**：考虑滑动窗口；
2. **两端决定答案**：考虑左右指针；
3. **有序数据匹配或合并**：考虑同步指针；
4. **一个扫描、一个维护结果**：考虑快慢指针；
5. **每次移动都能排除一批不可能情况**：双指针才有正确性基础；
6. **指针能够单向移动且不回退**：通常可以做到线性复杂度。

最重要的不是看到“两根指针”就套模板，而是证明：

**为什么移动这个指针是安全的？被跳过的情况为什么不可能再成为答案？**

这类双指针题目不能死记“固定左边”或“固定右边”，核心是看：

**固定一个变量后，剩下两个变量是否具有单调性，能否用两个指针一次遍历完成**

![image-20261010164512011](/assets/images/posts/python-grammar/image-20261010164512011.png)

这不是双指针做法！

```python
class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n=len(nums)
        k=0
        for i in range(n):
            if(nums[i]!=0):
                nums[k]=nums[i]
                k+=1

        for i in range(k,n):
            nums[i]=0
```

双指针+快排做法

**left指针指0**

```python
class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n=len(nums)
        left=right=0

        while right<n:
            if(nums[right]!=0):
                nums[right],nums[left]=nums[left],nums[right]
                left+=1

            right+=1
```



[167. 两数之和 II - 输入有序数组 - 力扣（LeetCode）](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/description/)

![image-20261014172111134](/assets/images/posts/python-grammar/image-20261014172111134.png)

```python
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        nums.sort()
        left=0
        right=len(nums)-1

        while(left<right):
            lst=[]
            if(nums[left]+nums[right]==target):
                lst.append(left+1)
                lst.append(right+1)
                return lst
            elif(nums[left]+nums[right]>target):
                right-=1
            else:
                left+=1
```



三数之和

[15. 三数之和 - 力扣（LeetCode）](https://leetcode.cn/problems/3sum/description/)

![image-20261015141317356](/assets/images/posts/python-grammar/image-20261015141317356.png)

```python
class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        nums.sort()
        res=[]
        n=len(nums)
        for i in range(0,n-2):
            x=nums[i]
            

            j=i+1
            k=n-1
            if (i>0 and x==nums[i-1]):
                continue
            while(j<k):
                if(nums[i]+nums[j]+nums[k]>0):
                    k-=1
                elif(nums[i]+nums[j]+nums[k]<0):
                    j+=1
                else:
                    res.append([nums[i],nums[j],nums[k]])
                    j+=1
                    while(j<k and nums[j]==nums[j-1]):
                        j+=1
                    k-=1
                    while(k>j and nums[k]==nums[k+1]):
                        k-=1
                        
        return res
```

### 前后缀分解/双指针

![image-20261022145343049](/assets/images/posts/python-grammar/image-20261022145343049.png)

#### 前后缀分解

![image-20261022145426251](/assets/images/posts/python-grammar/image-20261022145426251.png)

```python
class Solution:
    def trap(self, height: list[int]) -> int:
        #由一段区间的较小部分决定，区间范围到下一个比初始大的结束 
        #怎么统计面积 
        # 前后缀 min(pre_max,suf_max)-helight->每单位木桶的水
        ans=0
        n=len(height)

        pre_max=[0]*n
        suf_max=[0]*n

        pre_max[0]=height[0]
        suf_max[-1]=height[-1]

        for i in range(1,n):
            pre_max[i]=max(pre_max[i-1],height[i])
        for i in range(n-2,-1,-1):
            suf_max[i]=max(suf_max[i+1],height[i])
        for pre,suf,h in zip(pre_max,suf_max,height):
            ans+=min(pre,suf)-h
        return ans
```

双指针







单调栈







## 哈希enumerate()

`enumerate()` 用于**遍历序列时同时获取下标和值**

### 语法

```python
enumerate(iterable, start=0)
```

- `iterable`：可迭代对象，如列表、字符串、元组
- `start`：下标起始值，默认是 `0`

#### 基本用法



```python
items = ["apple", "banana", "orange"]

for index, value in enumerate(items):
    print(index, value)
```

等价于

```python
for index in range(len(items)):
    print(index, items[index])
```

输出

```python
0 apple
1 banana
2 orange
```

转换成了列表

```python
items = ["apple", "banana", "orange"]
result=list(enumerate(items))
print(result)
```

![image-20261010160742493](/assets/images/posts/python-grammar/image-20261010160742493.png)

#### 指定下标

```python
names = ["Tom", "Jerry", "Alice"]

for index, name in enumerate(names, start=1):
    print(index, name)
```

输出

```python
1 Tom
2 Jerry
3 Alice
```



### 遍历字符串

```python
for index, char in enumerate("Python"):
    print(index, char)
```

![image-20261010160345635](/assets/images/posts/python-grammar/image-20261010160345635.png)

[1. 两数之和 - 力扣（LeetCode）](https://leetcode.cn/problems/two-sum/description/?envType=study-plan-v2&envId=top-100-liked)

哈希法

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        idx = {}  # 创建一个空哈希表（字典）
        for j, x in enumerate(nums):  # x=nums[j]
            #`in idx` 默认检查的是**字典的键**
            if target - x in idx:  # 在左边找 nums[i]，满足 nums[i]+x=target
                return [idx[target - x], j]  # 返回两个数的下标
            idx[x] = j  # 保存 nums[j] 和 j
            #放在判断后，防止自己和自己配对

作者：灵茶山艾府
链接：https://leetcode.cn/problems/two-sum/solutions/2326193/dong-hua-cong-liang-shu-zhi-he-zhong-wo-0yvmj/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```



## 哈希Counter()

`collections` 模块中的一个**计数器**，本质上是字典的子类，专门用来统计元素出现次数。

```python
from collections import Counter

nums = [1, 2, 1, 3, 2, 1]

count = Counter(nums)

print(count)
```

输出

```python
Counter({1: 3, 2: 2, 3: 1})
```

```python
1 出现 3 次
2 出现 2 次
3 出现 1 次
```

统计字符串的字符

```
from collections import Counter

s = "hello"

count = Counter(s)

print(count)
```

### cnt.items()

`cnt.items()` 是什么

先回顾：`cnt = Counter(st)` `Counter` 是 collections 里的计数容器，本质是**字典（dict）的子类**：

- key：字符串（你输入的单词）
- value：这个单词出现的次数

👉 **`cnt.items()` 返回一个可迭代对象，里面每一项是 `(key, value)` 二元组** 格式：`(单词, 出现次数)`

```python
#访问：
for i ,x in cnt.items():
```

## 滑动窗口（本质二分）



[209. 长度最小的子数组 - 力扣（LeetCode）](https://leetcode.cn/problems/minimum-size-subarray-sum/description/)

![image-20261011002440835](/assets/images/posts/python-grammar/image-20261011002440835.png)

```python
class Solution:
    def minSubArrayLen(self, target: int, nums: list[int]) -> int:
        n=len(nums)
        size=n+1
        left=0
        sum=0
        for right,x in enumerate(nums):
            sum+=x
            while sum-nums[left]>=target:
                sum-=nums[left]
                left+=1

            if sum>=target:
                size=min(size,right-left+1) 

        return 0 if size==n+1 else size
```





[3. 无重复字符的最长子串 - 力扣（LeetCode）](https://leetcode.cn/problems/longest-substring-without-repeating-characters/?envType=study-plan-v2&envId=top-100-liked)

![image-20261011161826181](/assets/images/posts/python-grammar/image-20261011161826181.png)

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        ans=0
        left=0
        #创建一个空的 `Counter`，它可以当作一个“自动计数的字典”使用

        cnt=Counter()   #hashmap  char int
        #cnt[char]=int cnt内部包裹

        for right,x in enumerate(s):
            cnt[x]+=1
            while cnt[x]>1:
                cnt[s[left]]-=1
                left+=1
            ans=max(ans,right-left+1)
        return ans
```

哈希集合

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        ans=0
        left=0
        windows=set()
        for r,c in enumerate(s):
            while c in windows:
                windows.remove(s[left])
                left+=1
            windows.add(c)
            ans=max(ans,r-left+1)
        return ans  
```



## 数论

### 因数



如果 d 是 n 的正因数，那么：

d 和 -d 都可能是因数。



#### 优化



![image-20261014150921774](/assets/images/posts/python-grammar/image-20261014150921774.png)

[小红的因式分解](https://ac.nowcoder.com/acm/problem/275582)

```python
import sys
from math import isqrt
input=lambda:sys.stdin.readline().strip()

def ysh(n):
    result=[]
    # 枚举因数，平方根优化
    limit=isqrt(abs(n))
    
    for d in range(1,limit+1):
        if(n%d==0):
            # e.g 3 -3
            result.append(d)
            result.append(-d)
        # 枚举另一半的因数 e.g(12/3=4)
            other=abs(n)//d
            if(other!=d):
                result.append(other)
                result.append(-other)

    return result

t=int(input())

for _ in range(t):
    a,b,c=map(int,input().split())

    #a!=0 
    flag=0 # 有没有解 初始化无解

    for a1 in ysh(a):
        a2=a//a1

    # c!=0 b!=0
        if(c!=0):
            for b2 in ysh(c):
                b1=c//b2
                if(a1*b2+a2*b1==b):
                    print(a1,b1,a2,b2)
                    flag=1
                    break
    # c=0 b1=0/b2=0
        else:
    # b1=0 a1*b2=b
            if(b%a1==0):
                b1=0
                b2=b//a1
                print(a1,b1,a2,b2)
                flag=1

    # b2=0 a2*b1=b
            elif(b%a2==0):
                b2=0
                b1=b//a2
                print(a1,b1,a2,b2)
                flag=1
        if(flag==1):
            break

    if(flag==0):
        print("NO")
```

### 三角形

判定条件：

![image-20261015161251045](/assets/images/posts/python-grammar/image-20261015161251045.png)

### 素数判断

```python
import sys
from math import isqrt
input=lambda:sys.stdin.readline().strip()

def pdss(t):
    if(t<2):
        return False
    elif(t==2):
        return True
    elif(t%2==0):
        return False
    else:
        t1=isqrt(t)
        for i in range(3,t1+1,2):
            if(t%i==0):
                return False
        return True
```

### 埃拉托斯特尼筛法

（找出质数）

段代码是在用**埃拉托斯特尼筛法**，一次性找出 `2 ~ 10005` 之间的所有质数。

```python
m = 10005
vis = [False] * (m + 1)
pri = []
```

- `m`：筛选范围上限。
- `vis[i]`：表示数字 `i` 是否已经被确定为合数。
  - `False`：暂时没被标记，可能是质数。
  - `True`：一定是合数。
- `pri`：保存找到的质数。

核心代码：

```python
for i in range(2, m + 1):
    if not vis[i]:
        pri.append(i)

        for j in range(i * i, m + 1, i):
            vis[j] = True
```

具体过程：

#### 1. 如果 `i` 没被标记

```python
if not vis[i]:
```

说明 `i` 是质数。

例如开始时：

```text
i = 2
```

`2` 没有被标记，所以 `2` 是质数。

```python
pri.append(2)
```

把 `2` 加入质数数组。

#### 2. 标记 `i` 的倍数

```python
for j in range(i * i, m + 1, i):
    vis[j] = True
```

当 `i = 2` 时，会标记：

```text
4, 6, 8, 10, 12, ...
```

因为它们都是 `2` 的倍数，一定不是质数。

当 `i = 3` 时，会标记：

```text
9, 12, 15, 18, ...
```

当 `i = 5` 时，会标记：

```text
25, 30, 35, ...
```

最终，所有没有被标记的数就是质数。

为什么从 `i * i` 开始？

以 `i = 5` 为例：

```text
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
```

这些数已经分别被 `2`、`3`、`4` 标记过了，所以不需要重复标记。第一个可能还没被标记的倍数就是：

```text
5 * 5 = 25
```

因此从 `i * i` 开始可以提高效率。

例如最终：

```python
pri[:10]
```

大致是：

```text
[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
```

你看到的：

```python
[i \* i]
```

其中的反斜杠只是网页显示时的转义，实际 Python 代码应写成：

```python
[i * i]
```

### 次方表示

![image-20261020164953877](/assets/images/posts/python-grammar/image-20261020164953877.png)

取模

```python
(a % m + b % m) % m = (a + b) % m
(a % m × b % m) % m = (a × b) % m
```



## 动态规划

### dp示例1

[小红的偶子串](https://ac.nowcoder.com/acm/problem/262013)

![image-20261016135413951](/assets/images/posts/python-grammar/image-20261016135413951.png)

1.定义状态

```python
dp[i]=以s[i]结尾的最长合法的偶子串长度
```

2.找状态转移

如果最后两个相同

```python
s[i]==s[i-1]
```

可以组成一对偶子串

```py
dp[i]=当前长度+2
```

即

```python
dp[i]=dp[i-2]+2
```

如果不相同

```python
dp[i]=0
```

求最终答案

```python
ans=max(dp[i])
```



```python
import sys
input=lambda:sys.stdin.readline().strip()

s=input()
n=len(s)
ans=0
dp=[0]*n
for i in range(1,n):
    if(s[i]==s[i-1]):
        if(i>=2):
            dp[i]=dp[i-2]+2
        else:
            dp[i]=2
        ans=max(ans,dp[i])

print(ans)
```

### dp示例2

[D - Installation of Street Lights](https://atcoder.jp/contests/awc0186/tasks/awc0186_d)

![image-20261027154628903](/assets/images/posts/python-grammar/image-20261027154628903.png)

![image-20261027154703818](/assets/images/posts/python-grammar/image-20261027154703818.png)

核心公式：

```python
dp[right + 1] = min(dp[right + 1], dp[left] + cost)
```

意思是：

用当前这盏灯覆盖一段房子后，更新 `dp[right + 1]`，取原来的方案和新方案中花费较小的那个。

#### 每个变量是什么意思？

假设当前灯覆盖下标：

Plain text

```
left 到 right
```

例如：

Plain text

```
left = 2
right = 4
```

说明当前灯覆盖第 2、3、4 栋房子。

#### 原来的状态

Python

```
dp[right + 1]
```

也就是：

Python

```
dp[5]
```

表示：

照亮前 5 栋房子的最小花费。

因为下标 `0, 1, 2, 3, 4` 一共是 5 栋。

#### 新方案

当前灯覆盖：

Plain text

```
left 到 right
```

那么在使用当前灯之前，前面的 `left` 栋房子已经被照亮：

Python

```
dp[left]
```

当前灯花费：

Python

```
cost
```

所以新方案总花费是：

Python

```
dp[left] + cost
```

#### 因此完整语句就是

Python

```python
dp[right + 1] = min(
    dp[right + 1],
    dp[left] + cost
)
```

可以读成：

Plain text

```python
dp[right + 1] 等于以下两个数中较小的一个：

1. dp[right + 1]：原来的最优方案
2. dp[left] + cost：先照亮前 left 栋，再安装当前灯
```

#### 举例

假设：

Python

```python
left = 2
right = 4
dp[2] = 5
cost = 9
dp[5] = 20
```

当前灯覆盖第 2 到第 4 栋房子。

新方案花费：

Python

```
dp[2] + 9 = 5 + 9 = 14
```

原来照亮前 5 栋房子需要：

Python

```
dp[5] = 20
```

所以更新为：

Python

```
dp[5] = min(20, 14)
```

结果：

Python

```
dp[5] = 14
```

也就是找到了一种更便宜的方案。

你只需要记住这一句：

Python

```
dp[右端点 + 1] = min(原来的花费, 前面的花费 + 当前灯的花费)
```

**`right + 1` 不是“多覆盖一栋房子”，而是因为下标从 `0` 开始，前 `right + 1` 栋房子的最后下标正好是 `right`。**

#### 先看编号

假设有 5 栋房子，下标是：

Plain text

```
房子下标： 0   1   2   3   4
房子数量： 1   2   3   4   5
```

所以：

- 覆盖下标 `0`，一共覆盖 `1` 栋；
- 覆盖下标 `0~1`，一共覆盖 `2` 栋；
- 覆盖下标 `0~2`，一共覆盖 `3` 栋；
- 覆盖下标 `0~4`，一共覆盖 `5` 栋。

规律就是：

Plain text

```
覆盖到下标 right
=> 一共覆盖 right + 1 栋房子
```

因此要记录到：

Python

```
dp[right + 1]
```

#### `dp[i]` 的含义

我们规定：

Python

```
dp[i] = 照亮前 i 栋房子的最小花费
```

这里的“前 i 栋”是：

Plain text

```
下标 0 到 i-1
```

例如：

Python

```
dp[3]
```

表示照亮：

Plain text

```
下标 0、1、2
```

一共 3 栋房子。

不是表示下标为 3 的那一栋房子。

#### 举例

假设当前灯覆盖：

Plain text

```
left = 2
right = 4
```

也就是覆盖：

Plain text

```
下标 2、3、4
```

前面已经覆盖的是：

Plain text

```
下标 0、1
```

一共 2 栋，所以之前的状态是：

Python

```
dp[left] = dp[2]
```

使用当前灯后，覆盖范围变成：

Plain text

```
下标 0、1、2、3、4
```

一共 5 栋房子，所以应该更新：

Python

```
dp[5]
```

而：

Python

```
right + 1 = 4 + 1 = 5
```

所以代码是：

Python

```
dp[right + 1] = min(dp[right + 1], dp[left] + cost)
```

#### 画成图

Plain text

```
下标：    0    1    2    3    4
          |----|----|----|----|
前两栋：  已覆盖 已覆盖

当前灯覆盖：          [---- 2、3、4 ----]

最终覆盖： [0、1、2、3、4]
          一共 5 栋
```

所以最终状态是：

Python

```
dp[5]
```

而不是 `dp[4]`。

#### 为什么不是 `dp[right]`？

如果写成：

Python

```python
dp[right]
```

例如 `right = 4`，那表示：

Python

```python
dp[4]
```

也就是只表示前 4 栋房子：

Plain text

```python
下标 0、1、2、3
```

它漏掉了下标为 4 的那栋房子。

所以必须写：

Python

```python
dp[right + 1]
```

#### 最简单的记忆方法

如果当前灯覆盖：

Plain text

```python
left 到 right
```

那么：

Python

```python
dp[left]
```

表示覆盖当前灯之前的房子；

Python

```python
dp[right + 1]
```

表示覆盖当前灯之后的房子。

完整转移：

Python

```python
dp[right + 1] = min(
    dp[right + 1],
    dp[left] + cost
)
```

读作：

覆盖到下标 `right`，实际上已经覆盖了前 `right + 1` 栋房子。新的花费等于“前面的花费 + 当前灯的花费”。

和原来的方案比较，取较小值。

现在换一种枚举方式。

我们枚举当前灯覆盖的最右边房子 `right`。

假设：

- 当前房子坐标为 `houses[right]`
- 当前灯照明距离为 `radius`

如果它最早覆盖到 `left`，必须满足：

![image-20261027162105792](/assets/images/posts/python-grammar/image-20261027162105792.png)

Python

```python
min_position = houses[right] - 2 * radius
```

我们要找：

第一个坐标大于等于 `min_position` 的房子。

因为房子坐标已经排序，所以可以用二分查找：

**左闭右开**

```python
bisect_left(数组, 目标值, 起始位置, 结束位置)
```

Python

```python
left = bisect_left(houses,min_position,0,right + 1)
```

这里限制到 `right + 1`，是因为不能让 `left` 跑到 `right` 后面。



```python
import sys
from bisect import bisect_left

input = sys.stdin.readline
# n房屋数量，m路灯种类
n, m = map(int, input().split())

# 房屋坐标
x = list(map(int, input().split()))
x.sort()

# lp[i] = (照明半径, 安装费用)
lp = []

for _ in range(m):
    r, c = map(int, input().split())
    lp.append((r, c))

INF = 10 ** 30

# dp[i]：照亮前 i 栋房子的最小费用
dp = [INF] * (n + 1)
dp[0] = 0

# 枚举当前灯覆盖的最右边房子
for i in range(n):
    # 枚举每种路灯
    # r照亮半径，c范围
    for r, c in lp:
        # 当前路灯最左能够覆盖到的坐标
        p = x[i] - 2 * r

        # 找到第一个坐标 >= p 的房子下标
        # bisect_left(数组, 目标值, 起始位置, 结束位置)
        l = bisect_left(x, p, 0, i + 1)

        # 当前路灯覆盖第 l 到第 i 栋房子
        # 前 l 栋房子已经被照亮
        dp[i + 1] = min(dp[i + 1], dp[l] + c)

print(dp[n])
```

他妈的，我头要炸了，这dp 我晕了

### dp示例3

[D - Combo Bonus](https://atcoder.jp/contests/awc0187/tasks/awc0187_d)

![image-20261027230517792](/assets/images/posts/python-grammar/image-20261027230517792.png)

![image-20261027230548451](/assets/images/posts/python-grammar/image-20261027230548451.png)

https://gist.github.com/xue120754/d78ce0fa023c8590a540da77ae216aa9

```python
import sys
input = sys.stdin.buffer.readline
# N：阶段数量
# C：两个相邻阶段都通过时获得的额外奖励
N, C = map(int, input().split())

# 每个阶段单独通过时获得的分数
scores = list(map(int, input().split()))

# dp0：
# 处理完前面的阶段后，最后一个阶段不通过时的最大分数
dp0 = 0

# dp1：
# 处理完前面的阶段后，最后一个阶段通过时的最大分数
# 一开始没有阶段，不可能处于“最后一个阶段通过”的状态
dp1 = -10**30

for score in scores:
    # 当前阶段不通过：
    # 上一个阶段无论通过还是不通过，都不会产生新的分数
    new_dp0 = max(dp0, dp1)

    # 当前阶段通过：
    # 1. 上一个阶段不通过：增加 score
    # 2. 上一个阶段通过：增加 score + C
    new_dp1 = max(
        dp0 + score,
        dp1 + score + C
    )

    # 进入下一阶段
    dp0 = new_dp0
    dp1 = new_dp1

# 最后一个阶段可以通过，也可以不通过
print(max(dp0, dp1))

```



## 差分

### 差分+前缀和 知识点

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

![image-20261020211132975](/assets/images/posts/python-grammar/image-20261020211132975.png)

![image-20261020211212265](/assets/images/posts/python-grammar/image-20261020211212265.png)

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

![image-20261020211620781](/assets/images/posts/python-grammar/image-20261020211620781.png)



https://gist.github.com/xue120754/dee866808065682018b29fa3b045a4e3

### 离散化+差分

差分数组不记录“当前位置有多少”，而记录“从这里开始增加或减少多少”。

[C-小月的长廊_牛客周赛 Round 166](https://ac.nowcoder.com/acm/contest/141877/C)

**区间、集合、字典、离散化、差分数组、前缀和**

这段代码里的离散化，目的是：

原坐标可能很大，不能直接用坐标当数组下标；于是把真正出现的坐标压缩成连续的小下标。

![image-20261020192410463](/assets/images/posts/python-grammar/image-20261020192410463.png)

```python
import sys

input = sys.stdin.readline

n, p = map(int, input().split())

# 保存所有区间
a = []

# 保存所有需要离散化的坐标
x = set()

for _ in range(n):
    l, r = map(int, input().split())

    a.append((l, r))

    x.add(l)
    x.add(r)
    x.add(r + 1)

# 排序、去重
x = sorted(x)

# 建立：原坐标 -> 离散下标
mp = {}

for i in range(len(x)):
    mp[x[i]] = i

# 差分数组
d = [0] * (len(x) + 1)

# 处理每个区间 [l, r]
for l, r in a:
    d[mp[l]] += 1
    d[mp[r + 1]] -= 1

# 求前缀和，得到每个坐标的覆盖次数
s = [0] * len(x)
now = 0

for i in range(len(x)):
    now += d[i]
    s[i] = now

# 统计答案
ans = 0

for l, r in a:
    v1 = s[mp[l]]
    v2 = s[mp[r]]

    if abs(v1 - v2) >= p:
        ans += 1

print(ans)
```

### dict+差分

```python
import sys

input = sys.stdin.readline

# 读取区间数量 n，以及判断条件 p
n, p = map(int, input().split())

# 保存所有区间
lr = []

# 差分字典
d = {}

for _ in range(n):
    l, r = map(int, input().split())
    lr.append((l, r))

    # 保证这些坐标之后可以被查询
    #如果键不存在，就添加这个键并设置默认值；如果键已经存在，就保持原值不变。
    d.setdefault(l, 0)
    d.setdefault(r, 0)
    d.setdefault(r + 1, 0)
# e.g d.setdefault(5, 0)
#     {5: 0}
#     d[5] = 0
    # 区间 [l, r] 覆盖次数加 1
    d[l] += 1

    # 从 r + 1 开始取消覆盖
    d[r + 1] -= 1

# 按坐标从小到大进行前缀累加
now = 0
#dx是d前缀和后的结果
dx = {}

for x in sorted(d):
    now += d[x]
    dx[x] = now

# 统计答案
ans = 0

for l, r in lr:
    # 查询 l 和 r 位置的覆盖次数
    if abs(dx[l] - dx[r]) >= p:
        ans += 1

print(ans)
```

复盘版

```python
import sys
input=lambda:sys.stdin.readline().strip()

n,p=map(int,input().split())

lr=[]

d={}
for _ in range(n):

    l,r=map(int,input().split())
    lr.append((l,r))

    d.setdefault(l,0)
    d.setdefault(r,0)
    d.setdefault(r+1,0)

    d[l]+=1
    d[r+1]-=1

now=0
#对dx进行d的前缀和操作
dx={}
#
#对字典直接使用 `sorted`，排序的是**字典的键**.
# 把字典中所有坐标从小到大取出来，
# 每次取一个坐标放到变量 `x` 中。
for x in sorted(d):
    now+=d[x]
    #不可以写dx[x]+=now y因为最开始dx是空字典
    dx[x]=now
cnt=0
#应该从 `lr` 中取出每一个区间：
#for i in range(n):
for l,r in lr:
    if(abs(dx[r]-dx[l])>=p):
        cnt+=1
print(cnt)
```

![image-20261024101030492](/assets/images/posts/python-grammar/image-20261024101030492.png)



```python
import sys
input=lambda:sys.stdin.readline().strip()

n=int(input())
l1=[]
r1=[]

for _ in range(n):
    l2,r2=map(int,input().split())
    l1.append(l2)
    r1.append(r2)

k=max(r1)
d=[0]*(k+1)
for i in range(n):
    d[l1[i]]+=1
    d[r1[i]]-=1

st=[0]*k
now=0
for i in range(k):
    now+=d[i]
    st[i]=now


ans1=0
ans2=0
cnt1=0
cnt2=0

l=min(l1)

for i in range(min(l1),max(r1)):
    if(st[i]>=1):
        cnt2=0
        cnt1+=1
        ans1=max(cnt1,ans1)
    else:
        cnt1=0
        cnt2+=1
        ans2=max(cnt2,ans2)
print(ans1,ans2)
```



[C-小月的程序_牛客周赛 Round 165](https://ac.nowcoder.com/acm/contest/141721/C)

![image-20261016160917115](/assets/images/posts/python-grammar/image-20261016160917115.png)

![image-20261016162224261](/assets/images/posts/python-grammar/image-20261016162224261.png)

```python
import sys

input = sys.stdin.readline

t = int(input())

for _ in range(t):
    n = int(input())
    a = [0] + list(map(int, input().split()))

    d = [0] * (n + 1)

    for i in range(2, n + 1):
        d[i] = a[i] - a[i - 1]

    # suf[i] 表示 d[i] 到 d[n] 是否全部 >= 0
    suf = [True] * (n + 2)

    for i in range(n, 1, -1):
        suf[i] = suf[i + 1] and d[i] >= 0

    ans = 0
    left_ok = True
    #不要每次重新计算全部内容，
    #而是记录之前的结果，只更新刚刚变化的部分
    for k in range(1, n + 1):
        # 维护 d[2] 到 d[k] 是否全部 <= 0
        # 如果k=1没有前缀就只需要判断后缀
        if k >= 2:
            left_ok = left_ok and d[k] <= 0

        # 前缀反转后是非递减的
        if not left_ok:
            continue

        # 后缀 a[k+1], ..., a[n] 非递减
        if k < n and not suf[k + 2]:
            continue

        # 反转后的前缀与后缀可以连接
        if k < n and a[1] > a[k + 1]:
            continue

        ans += 1

    print(ans)
```

## 背包问题

[C - Bento Packing](https://atcoder.jp/contests/abc479/tasks/abc479_c)

### 状态压缩枚举+位运算

![image-20261017155107747](/assets/images/posts/python-grammar/image-20261017155107747.png)

```python
import sys

# 使用 readline 读取输入，速度更快
input = sys.stdin.readline

# 读取菜品数量 n 和午餐盒最大容量 w
n, w = map(int, input().split())

# delicious[i] 表示第 i 道菜的美味度
delicious = []

# volume[i] 表示第 i 道菜的体积
volume = []

# 读取 n 道菜的信息
for _ in range(n):
    a, b = map(int, input().split())

    # a 是美味度
    delicious.append(a)

    # b 是体积
    volume.append(b)

# answer 表示目前找到的最大美味度
answer = 0

# 一共有 2^n 种选择方案
#
# mask 可以理解为一个二进制数：
# mask 的第 i 位为 1，表示选择第 i 道菜；
# mask 的第 i 位为 0，表示不选择第 i 道菜。
#
# 例如 n = 3 时：
#
# mask = 0  -> 000 -> 一道菜都不选
# mask = 1  -> 001 -> 选择第 0 道菜
# mask = 2  -> 010 -> 选择第 1 道菜
# mask = 3  -> 011 -> 选择第 0、1 道菜
# mask = 4  -> 100 -> 选择第 2 道菜
#
for mask in range(1 << n):

    # 当前选择方案的总美味度
    total_delicious = 0

    # 当前选择方案的总体积
    total_volume = 0

    # 检查每一道菜是否被选择
    for i in range(n):

        # 1 << i 表示只有第 i 位是 1 的二进制数
        #
        # 例如：
        # i = 0 时，1 << i = 001
        # i = 1 时，1 << i = 010
        # i = 2 时，1 << i = 100
        #
        # mask & (1 << i) 不等于 0，
        # 说明 mask 的第 i 位是 1，
        # 也就是选择了第 i 道菜。
        #如果 `mask` 的第 `i` 位是 `1`，说明第 `i` 道菜被选择了。
        if mask & (1 << i):

            # 加上第 i 道菜的美味度
            total_delicious += delicious[i]

            # 加上第 i 道菜的体积
            total_volume += volume[i]

    # 如果总体积没有超过午餐盒容量
    if total_volume <= w:

        # 更新最大美味度
        answer = max(answer, total_delicious)

# 输出所有合法选择方案中的最大美味度
print(answer)
```

`1<<i`:

![image-20261017155930521](/assets/images/posts/python-grammar/image-20261017155930521.png)

`&`

&是**按位与**运算：**两个比特都为 1，结果才是 1；否则为 0**。

https://gist.github.com/xue120754/15855f0bc75928820651af2395b68eec

### 递归枚举

`global answer` 的意思是：

告诉 Python：函数里的 `answer` 使用函数外面定义的那个变量。

```python
import sys
input = lambda:sys.stdin.readline().strip()

n,w=map(int,input().split())

a=[]
b=[]

for _ in range(n):
    a1,b1=map(int,input().split())
    a.append(a1)
    b.append(b1)

ans=0

def dfs(i,total_a,total_b):
    global ans

    if(total_b>w):
        return 
    if(i==n):
        ans=max(ans,total_a)
        return 

    dfs(i+1,total_a,total_b)

    dfs(i+1,total_a+a[i],total_b+b[i])

dfs(0,0,0)

print(ans)
```

## 哈希+前缀和

[D-小月的回声_牛客周赛 Round 166](https://ac.nowcoder.com/acm/contest/141877/D)

### 常规前缀和公式

`sum[i]=sum[i-1]+a[i];`

`a[l]~a[r]=sum[r]-sum[l-1]`



前缀和+哈希：

```python
mp = {}

for i in range(1, n + 1):
    s[i] = s[i - 1] + a[i]
    #这个和s[i]对应的位置i
    mp[s[i]] = i
```



```python
mp[某个前缀和] = 这个前缀和对应的下标
```



![image-20261021163440319](/assets/images/posts/python-grammar/image-20261021163440319.png)

![image-20261021164314139](/assets/images/posts/python-grammar/image-20261021164314139.png)

```python
import sys


def solve():
    input = sys.stdin.buffer.readline

    n = int(input())
    a = [0] + list(map(int, input().split()))

    # s[i] 表示前 i 个元素的前缀和
    s = [0] * (n + 1)

    # mp[前缀和] = 对应的下标
    mp = {}

    # 计算前缀和，并记录前缀和对应的位置
    for i in range(1, n + 1):
        s[i] = s[i - 1] + a[i]
        mp[s[i]] = i
    #记录个数
    ans = 0

    # 枚举左端点 l
    for l in range(1, n + 1):

        # 枚举右端点元素 a[r] 的可能值
        # 由于 1 <= a[i] <= 30，所以只需要枚举 1~30
        for ar in range(1, 31):

            # 由：
            # a[l] * a[r] = s[r - 1] - s[l]
            #
            # 得到：
            # s[r - 1] = a[l] * a[r] + s[l]
            target = ar * a[l] + s[l]

            # 如果不存在这样的前缀和，跳过
            if target not in mp:
                continue

            # mp[target] 对应的是 r - 1
            r = mp[target] + 1

            # 右端点不能越界
            if r > n:
                continue

            # 确保右端点元素值就是当前枚举的 ar
            if a[r] != ar:
                continue

            # 区间长度必须至少为 3
            if r - l + 1 < 3:
                continue

            # 找到一个合法区间
            ans += 1

    print(ans)


if __name__ == "__main__":
    solve()
```





## 图论









## 位运算

```python
两个对应位置都是 1，结果才是 1
```

![image-20261025094340062](/assets/images/posts/python-grammar/image-20261025094340062.png)

下面用 Python 讲解图片中的三种基础位运算：`&`、`|`、`^`



### 一.按位与&

常见用途：判断奇偶

一个数的二进制最低位：

- 偶数：最低位是 `0`
- 奇数：最低位是 `1`

所以可以这样判断

```python
x=7

if(x&1):
    print("奇数")
else:
    print("偶数")
```

`7 = 111`
`111 & 001 = 001`

### 二.按位或 `|`

```python
两个对应位置只要有一个是 1，结果就是 1
```



### 三、按位异或 `^`

```python
两个对应位置不同，结果是 1
两个对应位置相同，结果是 0
```

#### 异或的核心性质

##### 1. 自己异或自己等于 0

Python

```
print(5 ^ 5)  # 0
```

二进制：

Plain text

```
101
^101
---
000
```

也就是：

Plain text

```
a ^ a = 0
```

##### 2. 和 0 异或，结果不变

Python

```
print(5 ^ 0)  # 5
```

即：

Plain text

```
a ^ 0 = a
```

##### 3. 异或顺序可以交换

Python

```
print(1 ^ 2 ^ 3)
print(3 ^ 1 ^ 2)
```

两个结果相同。

即：

Plain text

```
a ^ b ^ c = c ^ a ^ b
```

##### 四、异或交换两个变量

Python 本身可以直接交换：

Python

```
a, b = b, a
```

也可以利用异或：

Python

```
a = 5
b = 3

a = a ^ b
b = a ^ b
a = a ^ b

print(a)  # 3
print(b)  # 5
```

过程如下：

Plain text

```
a = 5 ^ 3
b = (5 ^ 3) ^ 3 = 5
a = (5 ^ 3) ^ 5 = 3
```

不过在 Python 中，推荐使用：

Python

```
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

![image-20261025104919306](/assets/images/posts/python-grammar/image-20261025104919306.png)

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

| 运算 | 规则               | 示例            |
| ---- | ------------------ | --------------- |
| `&`  | 都是 1 才是 1      | `5 & 3 = 1`     |
| `    | `                  | 有一个 1 就是 1 |
| `^`  | 不同为 1，相同为 0 | `5 ^ 3 = 6`     |

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



## BFS(队列)

[蓝桥杯国一攻略 · EP2](file:///C:/Users/xue/Downloads/ep2.html)

[I-快速夺取_苏州工学院 2026 ACM新生程序设计竞赛同步赛（重现赛）@AuroraSean](https://ac.nowcoder.com/acm/contest/143131/I)

![image-20261029221657715](/assets/images/posts/python-grammar/image-20261029221657715.png)

### 一、BFS 是什么？

BFS 的全称是：

Breadth First Search，广度优先搜索

它的思想是：

先走距离为 1 的所有位置，再走距离为 2 的所有位置，再走距离为 3 的所有位置……

就像水波纹一样，一层一层向外扩散。

例如地图：

Plain text

```python
起点 . . .
    . # .
    . . 终点
```

从起点开始：

Plain text

```python
第 0 层：起点
第 1 层：起点周围能走的位置
第 2 层：再向外扩展一层
第 3 层：继续扩展
```

只要最终扩展到了终点，就说明可以到达。

### 二、BFS 需要什么东西？

BFS 通常需要三个东西：

Python

```python
queue      # 队列，保存待处理的位置
visited    # 记录某个位置是否访问过
directions # 上下左右四个方向
```

#### 1. 队列

队列有一个特点：

先进先出。

就像排队买饭：

Plain text

```python
先来的人先离开
```

Python 中使用：

Python

```python
from collections import deque

queue = deque()
```

加入元素：

Python

```python
queue.append((x, y))
```

取出最前面的元素：

Python

```python
x, y = queue.popleft()
```

不能使用：

Python

```python
list.pop(0)
```

因为列表头部删除元素很慢，BFS 应该使用 `deque`。

#### 2. visited 数组

为什么需要 `visited`？

因为地图中可能有环。

例如：

Plain text

```python
A -> B -> C
     ↑    ↓
     └────┘
```

如果不记录访问过的位置，就可能一直绕圈。

Python

```python
visited = [[False] * n for _ in range(2)]
```

当访问一个位置时：

Python

```python
visited[x][y] = True
```

#### 3. 四个方向

从一个格子可以向：

- 上；
- 下；
- 左；
- 右。

因此可以写：

Python

```python
因为二维数组的行号是**从上到下增加**的。
directions = [
    (-1, 0),  # 上
    (1, 0),   # 下
    (0, -1),  # 左
    (0, 1)    # 右
]
             行号变小
                ↑
                |
列号变小  ←──── (x, y) ────→  列号变大
                |
                ↓
             行号变大
```

如果当前位置是：

Python

```python
(x, y)
```

那么下一个位置是：

Python

```python
nx = x + dx
ny = y + dy
```

### 三、BFS 的标准模板

下面是一个最基础的 BFS：

Python

```python
from collections import deque

def bfs(start_x, start_y, target_x, target_y, grid):
    rows = len(grid)
    cols = len(grid[0])

    # visited[x][y] 表示位置 (x, y) 是否访问过
    visited = [[False] * cols for _ in range(rows)]

    # 创建队列，并把起点加入队列
    queue = deque()
    queue.append((start_x, start_y))
    #表示起点访问过
    visited[start_x][start_y] = True

    # 上、下、左、右
    directions = [
        (-1, 0),
        (1, 0),
        (0, -1),
        (0, 1)
    ]

    while queue:
        # 取出队头位置
        x, y = queue.popleft()

        # 如果到达终点，说明可以到达
        if x == target_x and y == target_y:
            return True

        # 尝试向四个方向走
        for dx, dy in directions:
            nx = x + dx
            ny = y + dy

            # 判断是否越界
            if nx < 0 or nx >= rows:
                continue

            if ny < 0 or ny >= cols:
                continue

            # 判断是否是机器人
            if grid[nx][ny] == 1:
                continue

            # 判断是否已经访问过
            if visited[nx][ny]:
                continue

            # 可以走到这个位置
            visited[nx][ny] = True
            queue.append((nx, ny))

    # 队列为空，仍然没有找到终点
    return False
```

### 四、这段 BFS 是怎么运行的？

重点看这部分：

Python

```python
while queue:
    x, y = queue.popleft()
```

只要队列不为空，就不断取出一个位置。

然后：

Python

```python
for dx, dy in directions:
```

尝试从当前位置走向四个方向。

如果新位置合法：

Python

```
visited[nx][ny] = True
queue.append((nx, ny))
```

就把它标记为已访问，并放入队列等待处理。

### 五、套到本题中

本题有两个重要位置：

Plain text

```
起点：(1, 1)
铂金条：(r1, c1)
收集箱：(r2, c2)
```

需要完成：

Plain text

```
起点 -> 铂金条 -> 收集箱
```

所以可以分成两次 BFS：

1. 从起点搜索铂金条；
2. 如果能到达铂金条，再从铂金条搜索收集箱。

如果两次都可以到达，输出：

Plain text

```
YES
```

否则输出：

Plain text

```
NO
```

为什么可以分成两次？

因为机器人不能移动，地图不会发生变化。

如果：

Plain text

```
起点可以到达铂金条
铂金条可以到达收集箱
```

那么我们就可以先走到铂金条，再继续走到收集箱。

### 六、本题 BFS 代码

Python

```python
import sys
from collections import deque


def bfs(grid, start, target):
    """
    判断从 start 是否可以走到 target。

    参数：
    grid   : 地图，0 表示可以走，1 表示机器人
    start  : 起点坐标 (行, 列)
    target : 终点坐标 (行, 列)

    返回：
    True  : 可以到达
    False : 无法到达
    """

    rows = 2
    cols = len(grid[0])

    start_x, start_y = start
    target_x, target_y = target

    # visited[x][y] 表示位置 (x, y) 是否访问过
    visited = [[False] * cols for _ in range(rows)]

    # 使用队列保存待搜索的位置
    queue = deque()

    # 从 start 开始搜索
    queue.append((start_x, start_y))
    visited[start_x][start_y] = True

    # 上、下、左、右
    directions = [
        (-1, 0),  # 上
        (1, 0),   # 下
        (0, -1),  # 左
        (0, 1)    # 右
    ]

    while queue:
        # 取出队头位置
        x, y = queue.popleft()

        # 到达目标
        if x == target_x and y == target_y:
            return True

        # 尝试四个方向
        for dx, dy in directions:
            nx = x + dx
            ny = y + dy

            # 不能越界
            if nx < 0 or nx >= rows:
                continue

            if ny < 0 or ny >= cols:
                continue

            # 不能走到机器人所在的位置
            if grid[nx][ny] == 1:
                continue

            # 已经访问过的位置不再访问
            if visited[nx][ny]:
                continue

            # 标记并加入队列
            visited[nx][ny] = True
            queue.append((nx, ny))

    # 搜索结束仍未找到目标
    return False


# 读取所有输入
data = list(map(int, sys.stdin.buffer.read().split()))

# 读取列数
n = data[0]

# 读取两个目标的位置
r1, c1, r2, c2 = data[1:5]

# 转成 Python 的 0-based 下标
r1 -= 1
c1 -= 1
r2 -= 1
c2 -= 1

# 读取地图
grid = [
    data[5:5 + n],
    data[5 + n:5 + 2 * n]
]

# 起点是 (1, 1)，转换成 0-based 后是 (0, 0)
start = (0, 0)

# 铂金条位置
gold = (r1, c1)

# 收集箱位置
box = (r2, c2)

# 第一步：起点能否到达铂金条
can_reach_gold = bfs(grid, start, gold)

# 第二步：铂金条能否到达收集箱
can_reach_box = bfs(grid, gold, box)

if can_reach_gold and can_reach_box:
    print("YES")
else:
    print("NO")
```

### 七、用样例简单模拟

假设：

Plain text

```python
n = 5
铂金条 = (1, 3)
收集箱 = (2, 5)
```

地图：

Plain text

```python
0 0 0 1 0
0 1 0 0 0
```

起点：

Plain text

```python
(1, 1)
```

第一次 BFS：

Plain text

```python
(1,1) -> (1,2) -> (1,3)
```

可以拿到铂金条。

第二次 BFS：

Plain text

```python
(1,3) -> (2,3) -> (2,4) -> (2,5)
```

可以到达收集箱。

因此输出：

Plain text

```python
YES
```

### 八、为什么起点加入队列前要标记？

代码中：

Python

```python
queue.append((start_x, start_y))
visited[start_x][start_y] = True
```

必须立刻标记。

如果不立刻标记，可能出现：

Plain text

```python
起点 -> 右边 -> 起点
```

然后起点又被重复加入队列。

正确做法是：

一个位置第一次加入队列时，就标记为访问过。

而不是等它从队列取出来时再标记。

### 九、BFS 的完整思维过程

以后遇到网格搜索题，可以按这五步想：

#### 第一步：一个位置如何表示？

本题中一个位置是：

Python

```python
(row, col)
```

也就是：

Python

```python
(行号, 列号)
```

#### 第二步：从一个位置能走到哪里？

本题可以上下左右移动：

Python

```python
directions = [
    (-1, 0),
    (1, 0),
    (0, -1),
    (0, 1)
]
```

#### 第三步：什么位置不能走？

有三种：

1. 行号越界；
2. 列号越界；
3. 当前位置有机器人。

#### 第四步：如何避免重复搜索？

使用：

Python

```python
visited
```

#### 第五步：什么时候成功？

当前位置等于目标位置：

Python

```python
if (x, y) == target:
    return True
```

### 十、BFS 和 DFS 的区别

| 方法 | 搜索方式     | 常用数据结构 |
| ---- | ------------ | ------------ |
| BFS  | 一层一层搜索 | 队列         |
| DFS  | 一条路走到底 | 栈或递归     |

如果题目问：

最少走多少步？

在每一步代价相同的情况下，优先使用 BFS，因为 BFS 第一次到达终点时，一定是最短路。

本题只问：

能不能到达？

BFS 和 DFS 都可以，但 BFS 更适合练习网格搜索。

## dfs(递归)

[蓝桥杯国一攻略 · EP2](file:///C:/Users/xue/Downloads/ep2.html)

### **板子**

```python
m, n = len(maze), len(maze[0])
vis = [[False] * n for _ in range(m)]
dirc = [(1, 0), (-1, 0), (0, 1), (0, -1)]

def InArea(x, y):
    return 0 <= x < m and 0 <= y < n

def dfs(x, y):
    if not InArea(x, y) or vis[x][y] == True:
        return
    vis[x][y] = True
    for dx, dy in dirc:
        dfs(x + dx, y + dy)
    return
```

[200. 岛屿数量 - 力扣（LeetCode）](https://leetcode.cn/problems/number-of-islands/submissions/759660540/)

```python
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        n=len(grid)
        m=len(grid[0])
        ans=0
        vis=[[False]*m for _ in range(n)]#先列后行
        dirc =[(1,0),(-1,0),(0,1),(0,-1)]
        def inarea(x,y):
            return 0<=x<n and 0<=y<m
         # 深度优先搜索，标记同一个岛屿
        def dfs(x,y):
            # 越界、访问过、或者是水，直接返回
            if not inarea(x,y) or vis[x][y]==True or grid[x][y]=="0":# “0” 要加""号
                return
            # 标记当前位置
            vis[x][y]=True
            # 搜索上下左右
            for dx,dy in dirc:
                dfs(x+dx,y+dy)
            return

        for i in range(n):
            for j in range(m):
                 # 找到一个未访问的陆地，说明发现了一个新岛屿
                if(grid[i][j]=="1" and vis[i][j]==False):
                    ans+=1
                    dfs(i,j)
        return ans
```

每次进入一个新的陆地格子后，又会执行：

```python
for dx, dy in dirc:
    dfs(新的坐标)
```

所以它不是只检查起点附近，而是：

```text
当前格子
    -> 邻居格子
        -> 邻居的邻居
            -> 更外层的格子
```

这就是递归不断向外扩展的过程。

当它尝试走到水、越界或已经访问过的位置时，触发：

```python
if not inarea(x, y) or vis[x][y] or grid[x][y] == "0":
    return
```

此时这一次递归调用结束，返回上一个格子，继续检查上一个格子的其他方向。

例如遇到水：

```text
1 1 1
0 0 1
```

从 `(0, 0)` 可以走到 `(0, 1)`，再到 `(0, 2)`，再到 `(1, 2)`。尝试走到 `(1, 1)` 时发现是水：

```python
grid[1][1] == "0"
```

于是：

```python
return
```

但这只代表**当前这条方向停止**，不是整个 DFS 停止。程序会回到上一级，继续尝试其他方向。

可以把它理解为走迷宫：

- `dfs`：沿着一条路继续走
- 遇到墙、边界、走过的地方：返回
- 返回后换另一条路
- 所有路都走完后：整个 DFS 结束

所以 `return` 只结束当前递归调用，不会立即结束所有搜索。

所以一次 `dfs` 实际上会标记：

从起点出发，所有能够通过上下左右走到的陆地。

而题目中规定：

上下左右相连的一整块陆地称为一个岛屿。

因此，一次 `dfs` 标记的所有陆地，恰好就是一整座岛屿。

外层循环负责寻找新的岛屿：

```python
for i in range(n):
    for j in range(m):
        if grid[i][j] == "1" and not vis[i][j]:
            ans += 1
            dfs(i, j)
```

[I-快速夺取_苏州工学院 2026 ACM新生程序设计竞赛同步赛（重现赛）@AuroraSean](https://ac.nowcoder.com/acm/contest/143131/I)

当然可以。DFS 和 BFS 都是“搜索地图”，区别是：

- **BFS**：一层一层搜索，使用队列；
- **DFS**：一条路走到底，走不通再退回来，使用递归或栈。

这道题只问“能不能到达”，所以 DFS 可以解决。

### 1. DFS 的核心思想

假设现在在位置 `(x, y)`：

1. 如果越界，不能走；
2. 如果是机器人，不能走；
3. 如果已经访问过，不能重复走；
4. 如果到达目标，返回 `True`；
5. 标记当前位置；
6. 递归搜索上下左右；
7. 只要有一个方向能到达目标，就返回 `True`。

核心代码：

Python

```python
def dfs(x, y):
    if 到达终点:
        return True

    标记当前位置已经访问

    for 四个方向:
        if 这个方向可以走:
            if dfs(下一个位置):
                return True

    return False
```

### 2. 为什么要记录 `visited`？

地图中可能有环：

Plain text

```python
A -> B
↑    ↓
D <- C
```

如果不记录访问过的位置，就可能：

Plain text

```python
A -> B -> C -> D -> A -> B -> ...
```

无限循环。

所以当前位置第一次进入 DFS 时，就要立刻标记：

Python

```python
visited[x][y] = True
```

注意：**判断能不能到达时，不需要取消标记。**

### 3. 用递归写 DFS

Python

```python
def dfs(x, y):
    # 如果到达目标，搜索成功
    if (x, y) == target:
        return True

    # 标记当前位置已经访问过
    visited[x][y] = True

    # 尝试上、下、左、右四个方向
    for dx, dy in directions:
        nx = x + dx
        ny = y + dy

        # 越界，跳过
        if nx < 0 or nx >= 2 or ny < 0 or ny >= n:
            continue

        # 有机器人，跳过
        if grid[nx][ny] == 1:
            continue

        # 已经访问过，跳过
        if visited[nx][ny]:
            continue

        # 递归搜索下一个位置
        if dfs(nx, ny):
            return True

    # 四个方向都走不到目标
    return False
```

这里最重要的是这一句：

Python

```python
if dfs(nx, ny):
    return True
```

意思是：

如果从下一个位置出发能够到达终点，那么当前搜索也成功。

### 4. 本题完整 DFS 代码

Python

```python
import sys


def can_reach(grid, start, target):
    """
    判断从 start 是否可以走到 target。

    grid 中：
    0 表示可以走
    1 表示有机器人，不能走
    """

    rows = 2
    cols = len(grid[0])

    # visited[x][y] 表示位置 (x, y) 是否访问过
    visited = [[False] * cols for _ in range(rows)]

    # 上、下、左、右
    directions = [
        (-1, 0),  # 上
        (1, 0),   # 下
        (0, -1),  # 左
        (0, 1)    # 右
    ]

    def dfs(x, y):
        # 到达目标
        if (x, y) == target:
            return True

        # 标记当前位置，防止重复搜索
        visited[x][y] = True

        # 尝试四个方向
        for dx, dy in directions:
            nx = x + dx
            ny = y + dy

            # 不能越界
            if nx < 0 or nx >= rows:
                continue

            if ny < 0 or ny >= cols:
                continue

            # 不能走到机器人位置
            if grid[nx][ny] == 1:
                continue

            # 已经访问过的位置不再搜索
            if visited[nx][ny]:
                continue

            # 如果从下一个位置能到达目标，搜索成功
            if dfs(nx, ny):
                return True

        # 四个方向都无法到达目标
        return False

    # 从 start 开始搜索
    return dfs(start[0], start[1])


# 读取所有输入
data = list(map(int, sys.stdin.buffer.read().split()))

# 读取列数
n = data[0]

# 读取铂金条和收集箱的位置
r1, c1, r2, c2 = data[1:5]

# 题目坐标从 1 开始，Python 下标从 0 开始
r1 -= 1
c1 -= 1
r2 -= 1
c2 -= 1

# 读取两行地图
grid = [
    data[5:5 + n],
    data[5 + n:5 + 2 * n]
]

# 起点 (1, 1) 转换成 Python 下标后是 (0, 0)
start = (0, 0)

# 铂金条位置
gold = (r1, c1)

# 收集箱位置
box = (r2, c2)

# 第一步：起点能否到达铂金条
if not can_reach(grid, start, gold):
    print("NO")
else:
    # 第二步：拿到铂金条后，能否到达收集箱
    if can_reach(grid, gold, box):
        print("YES")
    else:
        print("NO")
```

### 5. 递归过程举例

假设当前地图是：

Plain text

```python
0 0 1
1 0 0
```

从左上角开始：

Plain text

```python
(0, 0)
```

DFS 可能这样搜索：

Plain text

```python
dfs(0, 0)
    尝试上：越界
    尝试下：机器人
    尝试左：越界
    尝试右：进入 (0, 1)

        dfs(0, 1)
            尝试下：进入 (1, 1)

                dfs(1, 1)
                    尝试右：进入 (1, 2)

                        dfs(1, 2)
                            到达目标
                            返回 True
```

返回过程：

Plain text

```python
dfs(1, 2) 返回 True
dfs(1, 1) 返回 True
dfs(0, 1) 返回 True
dfs(0, 0) 返回 True
```

所以最终判断可以到达。

### 6. DFS 中“走不通怎么办”？

例如：

Plain text

```python
0 0 1
1 0 1
0 1 0
```

如果某个方向走不通，递归函数会执行：

Python

```python
return False
```

然后回到上一个位置，继续尝试其他方向。

这就叫：

回溯。

但要注意：

Python

```python
visited[nx][ny] = False
```

在本题中不需要写。

因为我们只是判断“是否存在一条路”。一个位置如果已经搜索过，并且从它出发到不了目标，那么之后再次来到它，也不会有新的结果。

### 7. DFS 和 BFS 代码的主要区别

### BFS

Python

```python
queue.append(start)

while queue:
    x, y = queue.popleft()
    ...
```

使用队列，一层一层搜索。

### DFS

Python

```python
def dfs(x, y):
    ...
    dfs(nx, ny)
```

使用递归，一条路走到底。

| 对比           | BFS      | DFS          |
| -------------- | -------- | ------------ |
| 主要结构       | 队列     | 递归/栈      |
| 搜索特点       | 一层一层 | 一条路走到底 |
| 能否判断可达   | 可以     | 可以         |
| 是否保证最短路 | 可以     | 不保证       |
| 本题能否使用   | 可以     | 可以         |

### 8. 这道题为什么 DFS 可以？

题目只要求输出：

Plain text

```python
YES 或 NO
```

也就是只关心：

是否存在一条合法路径。

DFS 会尝试所有可能路线：

- 找到一条能到达的路线，就返回 `True`；
- 所有路线都走不通，就返回 `False`。

因此完全符合题目要求。

时间复杂度为：

Plain text

```python
O(行数 × 列数) = O(2n) = O(n)
```

因为每个位置最多访问一次。
