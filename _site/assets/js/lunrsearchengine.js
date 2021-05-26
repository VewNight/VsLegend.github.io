
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "Mediumish Template for Jekyll",
    "body": "This website is built with Jekyll and Mediumish template for Jekyll. It's for demonstration purposes, no real content can be found. Mediumish template for Jekyll is compatible with Github pages, in fact even this demo is created with Github Pages and hosted with Github.  Documentation: Please, read the docs here. Questions or bug reports?: Head over to our Github repository! Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Java8 函数式编程                              :               函数式编程，或称函数程序设计、泛函编程，是一种编程范式，它将电脑运算视为函数运算，并且避免使用程序状态以及易变对象。其中，λ演算为该语言最重要的基础。:                                                                                                                                                                       WangJwi                                22 May 2021                                                                                                                                                                                                                                                                                                                  Java反射机制                              :               反射通常由需要检查或修改Java虚拟机中运行的应用程序的运行时行为的程序使用。这是一个相对高级的功能，只应由对语言基础有很深了解的开发人员使用。考虑到这一警告，反射是一种强大的技术，可以使应用程序执行原本不可能的操作。Java反射机制:                                                                                                                                                                       WangJwi                                21 May 2021                                                                                                                      All Post:                                                                                                     Java8 函数式编程              :       函数式编程，或称函数程序设计、泛函编程，是一种编程范式，它将电脑运算视为函数运算，并且避免使用程序状态以及易变对象。其中，λ演算为该语言最重要的基础。:                                                                               WangJwi                22 May 2021                                                                                                                                     Java反射机制              :       反射通常由需要检查或修改Java虚拟机中运行的应用程序的运行时行为的程序使用。这是一个相对高级的功能，只应由对语言基础有很深了解的开发人员使用。考虑到这一警告，反射是一种强大的技术，可以使应用程序执行原本不可能的操作。Java反射机制:                                                                               WangJwi                21 May 2021                                            "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/Functional-Programming/",
    "title": "Java8 函数式编程",
    "body": "2021/05/22 - 函数式编程，或称函数程序设计、泛函编程，是一种编程范式，它将电脑运算视为函数运算，并且避免使用程序状态以及易变对象。其中，λ演算为该语言最重要的基础。 函数式编程：Functional programming: 参考：Java 8 Stream Lambda Expressions Functional Programming in Java Functional programming 什么是函数式编程: 函数式编程，或称函数程序设计、泛函编程，是一种编程范式，它将电脑运算视为函数运算，并且避免使用程序状态以及易变对象。其中，λ演算为该语言最重要的基础。而且，λ演算的函数可以接受函数作为输入参数和输出返回值。 比起指令式编程，函数式编程更加强调程序执行的结果而非执行的过程，倡导利用若干简单的执行单元让计算结果不断渐进，逐层推导复杂的运算，而不是设计一个复杂的执行过程。 在函数式编程中，函数是第一类对象，意思是说一个函数，既可以作为其它函数的输入参数值，也可以从函数中返回值，被修改或者被分配给一个变量。 函数式接口: 定义： 要定义一个函数式接口，需要满足以下两种情况  使用@FunctionalInterface注解，标注接口为函数式接口 接口内部必须只有一个或以下的普通接口方法。可以有任意数量的接口默认方法和接口静态方法，这些都不影响函数式接口的定义。说明： 函数式接口实际上只是函数式编程的定义，它将作为方法参数，被传给其他方法，而实现这些接口的方法一般被表现为lambda表达式（当然你也可以用一般接口的形式来实现函数式接口，也可以通过匿名内部类来实现，但lambda表达式实际上就是为了简化上述情况而产生的）。 常用的函数式接口： Function：接受一个参数，并返回一个结果 12345678910111213141516171819202122232425@FunctionalInterfacepublic interface Function&lt;T, R&gt; {  // 接受一个参数，并返回一个结果  R apply(T t);  // apply方法的组合实现 表示before. apply(v)的函数输出值r将作为this. apply(r)的输入值  default &lt;V&gt; Function&lt;V, R&gt; compose(Function&lt;? super V, ? extends T&gt; before) {    Objects. requireNonNull(before);    return (V v) -&gt; apply(before. apply(v));  }  // apply方法的组合实现 表示this. apply(t)的函数输出值r将作为after. apply(r)的输入值  default &lt;V&gt; Function&lt;T, V&gt; andThen(Function&lt;? super R, ? extends V&gt; after) {    Objects. requireNonNull(after);    return (T t) -&gt; after. apply(apply(t));  }    // 函数将永远将输入参数作为输出参数  static &lt;T&gt; Function&lt;T, T&gt; identity() {    return t -&gt; t;  }Predicate：接受一个参数，返回Boolean 1234567891011121314151617181920212223242526272829303132@FunctionalInterfacepublic interface Predicate&lt;T&gt; {  // 接受一个参数，返回Boolean  boolean test(T t);  // 表示两个Predicate的与判断 this. test(t) and a. test(t)  default Predicate&lt;T&gt; and(Predicate&lt;? super T&gt; other) {    Objects. requireNonNull(other);    return (t) -&gt; test(t) &amp;&amp; other. test(t);  }    // 表示非Predicate的判断 !this. test(t)  default Predicate&lt;T&gt; negate() {    return (t) -&gt; !test(t);  }  // 表示两个Predicate的或判断 this. test(t) or a. test(t)  default Predicate&lt;T&gt; or(Predicate&lt;? super T&gt; other) {    Objects. requireNonNull(other);    return (t) -&gt; test(t) || other. test(t);  }  static &lt;T&gt; Predicate&lt;T&gt; isEqual(Object targetRef) {    return (null == targetRef)        ? Objects::isNull        : object -&gt; targetRef. equals(object);  Supplier：无参返回一个结果。该函数可以接受无参构造方法、无参方法来返回一个结果 1234567@FunctionalInterfacepublic interface Supplier&lt;T&gt; {  // 无参返回一个结果  T get();}Consumer：接受一个参数，并处理，无返回结果 12345678910111213@FunctionalInterfacepublic interface Consumer&lt;T&gt; {  // 接受一个参数，并处理，无返回结果  void accept(T t);  // 组合操作 表示消费的先后顺序，当前实例消费完成后，after才开始消费  default Consumer&lt;T&gt; andThen(Consumer&lt;? super T&gt; after) {    Objects. requireNonNull(after);    return (T t) -&gt; { accept(t); after. accept(t); };  }实例： 这一段内容只做简单介绍，在后文讲解过lambda表达式后，将使用这些函数式接口来实现一些功能。 12345678910111213141516171819202122232425public class FITest&lt;T, R&gt; {  public static void main(String[] args) {    // 判断输入的密码是否正确 正确时计算并返回结果    FITest&lt;String, String&gt; fiTest = new FITest&lt;&gt;();    Scanner sc = new Scanner(System. in);    System. out. print( 请输入密码：  );    String key = sc. next();    String result = fiTest. getIfTrue(key, // 输入数据        k1 -&gt; k1 +   Is Right KEY!  , // Predicate判断为真时的回调方法        k2 -&gt; k2. equals( KEY ) // 判断条件    );    System. out. println(result);  }  // 判断正确时打印输出  public R getIfTrue(T t, Function&lt;T, R&gt; function, Predicate&lt;T&gt; predicate) {    if (predicate. test(t)) {      return function. apply(t);    } else {      System. err. println( 密码错误！ );    }    return null;  }}Lambda表达式：Lambda Expressions: 概念： 即是一个匿名函数，即没有函数名的函数。Lambda表达式可以让我们不用实现函数式接口，而是通过函数体完成其接口方法。Lambda是实现回调函数（callback function）的一种方式。 结构： （输入 +） 函数体 （+ 输出） 12345678// 输入(String a)  //  -&gt;  符号后的部分都可以当作函数体 // 输出一个String类型的变量upper(String a) -&gt; {  String upper = a. toUpperCase();  System. out. println(upper);  return upper;}语法规则：  声明类型、不声明类型123456789(int a, int b) -&gt; a + b(a, b) -&gt; a - b// 前面两个表达式含义相同，相当于下面的方法int sum(int a, int b) { return a +b;注意：单个参数需要声明类型时，必须使用“(” “ )”圆括号。 1234// 一个入参(List&lt;String&gt; l) -&gt; { l. forEach(element -&gt; System. out. println(element));} 有输入参数、没有输入参数12345678910111213(String a) -&gt; new String(a)// 需要一个没有内容的括号表示无参() -&gt; new String()// 以上相当于一个是有参方法，一个是无参方法String newStr(String a) { return new String(a);}String newStr() { return new String(); 单条执行语句、多条执行语句1234567() -&gt;  lambda . toUpperCase()() -&gt; {  // other statement  return  lambda . toUpperCase();}注意：单个语句可以省去 { }  带有输出的Lambda表达式、不带有输出123456789101112131415161718// 有返回值(List&lt;String&gt; list) -&gt; {  return list;}(List&lt;String&gt; list) -&gt; list// 无返回值(List&lt;String&gt; list) -&gt; {  list. clear();}(List&lt;String&gt; list) -&gt; list. clea注意：  当函数体只有一条且为输出语句时，需要确保简写表达式语句有返回值 当无返回值的表达式只有一条时，需要确保简写表达式不会有返回值方法引用：Method Reference: 定义： 当使用一个Lambda表达式创建一个匿名函数时，如果该函数什么都不做，仅仅只是调用一个现有的方法时，就可以使用方法的名字来代表该方法的调用会让程序更为清晰，方法引用便可以让你实现此功能。 方法引用即使用现有方法的名字，来紧凑的表达一个易于阅读的Lambda表达式。 方法引用使用两个冒号 :: 表示 方法引用种类：       种类   句法   例子         引用静态方法   ContainingClass::staticMethodName   Person::compareByAgeMethodReferencesExamples::appendStrings       引用类的实例对象的方法   containingObject::instanceMethodName   myComparisonProvider::compareByNamemyApp::appendStrings2       引用特殊类型的任意对象的实例方法   ContainingType::methodName   String::compareToIgnoreCaseString::concat       引用构造函数   ClassName::new   HashSet::new   下面的代码是Oracle的一段代码实例： 1234567891011121314151617181920212223242526272829303132333435363738394041import java. util. function. BiFunction;public class MethodReferencesExamples {    public static &lt;T&gt; T mergeThings(T a, T b, BiFunction&lt;T, T, T&gt; merger) {    return merger. apply(a, b);  }    public static String appendStrings(String a, String b) {    return a + b;  }    public String appendStrings2(String a, String b) {    return a + b;  }  public static void main(String[] args) {        MethodReferencesExamples myApp = new MethodReferencesExamples();    // Calling the method mergeThings with a lambda expression    System. out. println(MethodReferencesExamples.       mergeThings( Hello  ,  World! , (a, b) -&gt; a + b));        // Reference to a static method    System. out. println(MethodReferencesExamples.       mergeThings( Hello  ,  World! , MethodReferencesExamples::appendStrings));    // Reference to an instance method of a particular object        System. out. println(MethodReferencesExamples.       mergeThings( Hello  ,  World! , myApp::appendStrings2));        // Reference to an instance method of an arbitrary object of a    // particular type    System. out. println(MethodReferencesExamples.       mergeThings( Hello  ,  World! , String::concat));  流式操作：Stream: "
    }, {
    "id": 6,
    "url": "http://localhost:4000/JAVA-reflection/",
    "title": "Java反射机制",
    "body": "2021/05/21 - 反射通常由需要检查或修改Java虚拟机中运行的应用程序的运行时行为的程序使用。这是一个相对高级的功能，只应由对语言基础有很深了解的开发人员使用。考虑到这一警告，反射是一种强大的技术，可以使应用程序执行原本不可能的操作。 Java反射机制: 参考：The Reflection API 反射原理：: Java在编译之后会生成一个class文件，反射通过字节码文件找到其类中的方法和属性等。 反射的用途：: 反射功能通常用于检查或修改Java虚拟机运行中（runtime）的应用程序的行为。反射是一种强大的技术，可以运行原本不可能的操作。  在运行中分析类的能力，可以通过完全限定类名创建类的对象实例。 在运行中查看和操作对象，可以遍历类的成员变量。 反射允许代码执行非反射代码中非法的操作，可以检索和访问类的私有成员变量，包括私有属性、方法等。注意：要有选择的使用反射功能，如果可以直接执行操作，那么最好不要使用反射。 反射的缺点：:  额外的性能开销（Performance Overhead）：由于反射涉及动态类型的解析，它无法执行某些Java虚拟机优化，因此反射操作的性能通常要比非反射操作慢。 安全限制（Security Restrictions）：反射需要运行时操作权限，此操作可能在一些安全管理器下不被允许。 内部泄露（Exposure of Internals）：由于反射允许代码执行非反射代码中非法的操作（例如访问私有字段和方法），因此使用反射可能会导致意外的副作用，这可能会使代码无法正常工作并可能破坏可移植性。反射性代码破坏了抽象，因此可能会随着平台的升级而改变行为。获取对象类的方式::  Object. getClass()。从一个实例对象中获取它的类。这仅适用于继承自Object的引用类型（当然Java的类默认继承于Object）。Map&lt;String, String&gt; hashMap = new HashMap&lt;&gt;();Class&lt;? extends Map&gt; aClass = hashMap. getClass();String text =  text ;Class&lt;? extends String&gt; aClass1 = text. getClass();// Object类public final native Class&lt;?&gt; getClass(); XXX. class。直接从未实例化的类获取类。12Class&lt;Integer&gt; integerClass = int. class;Class&lt;HashMap&gt; hashMapClass = HashMap. class; Class. forName()。通过完全限定类名获取类。即包名加类名（java. util. HashMap）。否则会报找不到类错误。1Class&lt;HashMap&gt; hashMapClass = Class. forName( java. util. HashMap );123456// class类public static Class&lt;?&gt; forName(String className)      throws ClassNotFoundException {  Class&lt;?&gt; caller = Reflection. getCallerClass();  return forName0(className, true, ClassLoader. getClassLoader(caller), caller);} Integer. TYPE。基本类型的包装类通过TYPE获取类。都是Java早期版本的产物，已过时。12345678// Integer@SuppressWarnings( unchecked )public static final Class&lt;Integer&gt; TYPE = (Class&lt;Integer&gt;) Class. getPrimitiveClass( int );// Double@SuppressWarnings( unchecked )public static final Class&lt;Double&gt;  TYPE = (Class&lt;Double&gt;) Class. getPrimitiveClass( double ); 通过反射类ClassAPI获取类。注意，只有在已经直接或间接获得一个类的情况下，才可以访问这些API。1234567891011try { Class&lt;?&gt; className = Class. forName( java. lang. String ); // 获取父类 Class&lt;?&gt; superclass = className. getSuperclass(); // 返回调用类的成员变量，包括所有公共的类、接口和枚举 Class&lt;?&gt;[] classes = className. getClasses(); // 返回调用类的依赖，包括所有类、接口和显式声明的枚举 Class&lt;?&gt;[] declaredClasses = className. getDeclaredClasses();} catch (ClassNotFoundException e) { e. printStackTrace();}获取类的成员变量：: 获取字段：       Class API   是否是列表   是否获取父类属性   能否能获取私有字段         getDeclaredField()   no   no   yes       getField()   no   yes   no       getDeclaredFields()   yes   no   yes       getFields()   yes   yes   no   获取方法：       Class API   List of members?   Inherited members?   Private members?         getDeclaredMethod()   no   no   yes       getMethod()   no   yes   no       getDeclaredMethods()   yes   no   yes       getMethods()   yes   yes   no   获取构造器：       Class API   List of members?   Inherited members?   Private members?         getDeclaredConstructor()   no   N/A1   yes       getConstructor()   no   N/A1   no       getDeclaredConstructors()   yes   N/A1   yes       getConstructors()   yes   N/A1   no   java. lang. reflect. Field: Field字段具有类型和值。Field提供访问属性对象类型信息的方法；以及获取和设置字段值的方法。 获取字段类型： 字段可以是原始类型或引用类型。 有八种基本类型：boolean，byte，short，int，long，char，float，和double。 引用类型是java. lang. Object类的直接或间接子类，包含接口，数组和枚举类型等 。 获取字段修饰符：  访问修饰符：public，protected，和private 仅用于字段的控制运行时行为的修饰符：transient和volatile 限制单实例的修饰符： static 禁止值修改的修饰符： final 注解123456789101112Class&lt;?&gt; className = Class. forName( java. util. HashMap );Field table = className. getDeclaredField( table );// 获取属性的名字String name = table. getName();// 获取属性的类型Class&lt;?&gt; type = table. getType();// 获取修饰符int modifiers = table. getModifiers();System. out. println(Modifier. toString(modifiers));// 获取注解Override annotation = table. getDeclaredAnnotation(Override. class);Annotation[] declaredAnnotations = table. getDeclaredAnnotations();获取和设置字段值： 给定一个类的实例，可以使用反射来设置该类中字段的值。通常仅在特殊情况下无法以常规方式设置值时才执行此操作。因为这样的访问通常会违反该类的设计意图，所以应绝对谨慎地使用它。 注意：通过反射设置字段的值会有一定的性能开销，因为必须进行各种操作，例如验证访问权限。从运行时的角度来看，效果是相同的，并且操作是原子的，就好像直接在类代码中更改了值一样。除此之外，反射会破坏Java原本的设定，列如可以重新设置final属性的值等。 反射修改final修饰的属性值到JVM对String的优化： 反射功能强大，能修改private以及final修饰的变量。如下代码中，展示了JVM的优化以及反射的一些劣势。 123456789101112131415161718192021222324252627282930313233343536373839404142434445@Datapublic class FieldReflectDemo { // 引用直接指向常量池中的常量值 private final String constantStr =  FinalConstantStringField ; // JVM优化了getter方法，直接将对constantStr引用全部替换成了常量// public String getConstantStr() {return  FinalConstantStringField ;} // 在堆中新建了一个对象 private final String newStr = new String( FinalNewStringField );  public FieldReflectDemo(){}    public static void main(String[] args) {  FieldReflectDemo fieldReflectDemo = new FieldReflectDemo();  try {   Class&lt;?&gt; className = fieldReflectDemo. getClass();   Field constantStr = className. getDeclaredField( constantStr );   Field newStr = className. getDeclaredField( newStr );   // 获取实例对象的字段值   System. out. println( constantStr原：  + constantStr. get(fieldReflectDemo));   System. out. println( newStr原：  + newStr. get(fieldReflectDemo));   constantStr. setAccessible(true);   newStr. setAccessible(true);   constantStr. set(fieldReflectDemo,  New Filed Name );   newStr. set(fieldReflectDemo,  New Filed Name );   System. out. println( constantStr反射修改：  + constantStr. get(fieldReflectDemo));   System. out. println( newStr反射修改：  + newStr. get(fieldReflectDemo));  } catch (NoSuchFieldException | IllegalAccessException e) {   e. printStackTrace();  }  System. out. println( constantStr实例对象值：  + fieldReflectDemo. getConstantStr());  System. out. println( newStr实例对象值：  + fieldReflectDemo. getNewStr()); }  /**  * 输出  * constantStr原：FinalConstantStringField  * newStr原：FinalNewStringField  * constantStr反射修改：New Filed Name  * newStr反射修改：New Filed Name  * constantStr实例对象值：FinalConstantStringField  * newStr实例对象值：New Filed Name  */}因为JVM在编译时期, 就把final类型的直接赋值的String进行了优化, 在编译时期就会把String处理成常量。反射成功将其值修改成功了，但是在它的get方法中，返回的不是当前变量，而是返回JVM优化好的一个常量值。 java. lang. reflect. Method: Method方法具有参数和返回值，并且方法可能抛出异常。Method提供获取参数信息、返回值的方法；它也可以调用（invoke）给定对象的方法。 获取方法类型的信息： 方法声明包含了方法名、修饰符、参数、返回类型以及抛出的多个异常。 123456789101112131415161718192021222324252627282930313233343536public class MethodReflectDemo {public MethodReflectDemo() { private void getNothing(String name) { public int getNumByName(String name) throws NullPointerException { if (StringUtils. isEmpty(name))  throw new NullPointerException( 名字为空 ); return name. length();} public static void main(String[] args) {  MethodReflectDemo methodReflectDemo = new MethodReflectDemo();  try {   Class&lt;? extends MethodReflectDemo&gt; demoClass = methodReflectDemo. getClass();   Method method = demoClass. getDeclaredMethod( getNumByName , String. class);   String name = method. getName();   System. out. println( 方法名：  + name);   // 修饰符   int modifiers = method. getModifiers();   System. out. println( 所有修饰符：  + Modifier. toString(modifiers));   // 参数   Parameter[] parameters = method. getParameters();   // 返回类型   Class&lt;?&gt; returnType = method. getReturnType();   System. out. println( 返回类型：  + returnType. getTypeName());   // 异常   Class&lt;?&gt;[] exceptionTypes = method. getExceptionTypes();   System. out. println(  );  } catch (NoSuchMethodException e) {   e. printStackTrace();  } }java. lang. reflect. Constructor: Constructor与Method相似，但有两个主要例外：第一，构造函数没有返回值；第二，构造函数的调用为给定的类创建对象的新实例。 "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});