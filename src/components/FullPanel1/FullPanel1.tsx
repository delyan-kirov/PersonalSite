import React, {} from "react";
import "./Styles.css";
import { motion, useScroll } from "framer-motion";
import TopBar from "../TopBar/TopBar";
import TikzPicture from "./mytikzpicture.png"

const FullPanel1 = () => {
  return (
    <div className="blogBody">
      <div className="TopBar">
        <TopBar />
      </div>
        <div style={{ margin: '36px' }}></div>
      <div id="content" className="content">
        <h1 className="title">Using tikz in org</h1>
        <div id="outline-container-orgcc7d50f" className="outline-2">
          <h2 id="orgcc7d50f">
            <span className="section-number-2">1.</span> Haskell basics
          </h2>
          <div className="outline-text-2" id="text-1">
          </div>
          <div id="outline-container-org1a868d1" className="outline-3">
            <h3 id="org1a868d1">
              <span className="section-number-3">1.1.</span> Types and variables
            </h3>
            <div className="outline-text-3" id="text-1-1">
              <p>
                Haskell is simple, there are Types and variables of those types.
              </p>
              <div className="org-src-container">
                <pre className="src src-haskell"><span style={{color: '#51587a'}}>-- </span><span style={{color: '#51587a'}}>Assigning 1 to a</span>{"\n"}<span style={{color: '#7aa2f7'}}>a</span> <span style={{color: '#c0caf5'}}>=</span> <span style={{color: '#ff9e64', fontWeight: 'bold'}}>1</span> <span style={{color: '#c0caf5'}}>::</span> <span style={{color: '#c0caf5'}}>Int</span>{"\n"}<span style={{color: '#51587a'}}>-- </span><span style={{color: '#51587a'}}>We can omit the type declaration</span>{"\n"}<span style={{color: '#7aa2f7'}}>b</span> <span style={{color: '#c0caf5'}}>=</span> <span style={{color: '#ff9e64', fontWeight: 'bold'}}>1</span>{"\n"}<span style={{color: '#51587a'}}>-- </span><span style={{color: '#51587a'}}>We can also define the type</span>{"\n"}<span style={{color: '#7aa2f7'}}>c</span> <span style={{color: '#c0caf5'}}>::</span> <span style={{color: '#c0caf5'}}>Int</span>{"\n"}<span style={{color: '#51587a'}}>-- </span><span style={{color: '#51587a'}}>and assign latter</span>{"\n"}<span style={{color: '#7aa2f7'}}>c</span> <span style={{color: '#c0caf5'}}>=</span> <span style={{color: '#ff9e64', fontWeight: 'bold'}}>1</span>{"\n"}</pre>
              </div>
              <p>
                What about functions? Those are not too special, functions are
                values of type Input -&gt; Output
              </p>
              <div className="org-src-container">
                <pre className="src src-haskell"><span style={{color: '#51587a'}}>-- </span><span style={{color: '#51587a'}}>Anotate and define</span>{"\n"}<span style={{color: '#7aa2f7'}}>f</span> <span style={{color: '#c0caf5'}}>::</span> <span style={{color: '#c0caf5'}}>Int</span> <span style={{color: '#c0caf5'}}>-&gt;</span> <span style={{color: '#c0caf5'}}>Int</span>{"\n"}<span style={{color: '#7aa2f7'}}>f</span> x <span style={{color: '#c0caf5'}}>=</span> x <span style={{color: '#c0caf5'}}>+</span> <span style={{color: '#ff9e64', fontWeight: 'bold'}}>1</span>{"\n"}<span style={{color: '#51587a'}}>-- </span><span style={{color: '#51587a'}}>Define without anotating</span>{"\n"}<span style={{color: '#7aa2f7'}}>g</span> x <span style={{color: '#c0caf5'}}>=</span> x <span style={{color: '#c0caf5'}}>+</span> <span style={{color: '#ff9e64', fontWeight: 'bold'}}>1</span>{"\n"}</pre>
              </div>
              <p>
                You can think of -&gt; as a type constructor. Other type
                constructors pre-built are
              </p>
              <div className="org-src-container">
                <pre className="src src-haskell"><span style={{color: '#51587a'}}>-- </span><span style={{color: '#51587a'}}>The pair constructor</span>{"\n"}<span style={{color: '#7aa2f7'}}>a</span> <span style={{color: '#c0caf5'}}>=</span> <span style={{color: '#a9b1d6'}}>(</span><span style={{color: '#c0caf5'}}>,</span><span style={{color: '#a9b1d6'}}>)</span> <span style={{color: '#ff9e64', fontWeight: 'bold'}}>1</span>, <span style={{color: '#ff9e64', fontWeight: 'bold'}}>2</span>{"\n"}{"\n"}<span style={{color: '#51587a'}}>-- </span><span style={{color: '#51587a'}}>We can also use it to define triples</span>{"\n"}<span style={{color: '#7aa2f7'}}>b</span> <span style={{color: '#c0caf5'}}>=</span> <span style={{color: '#a9b1d6'}}>(</span><span style={{color: '#c0caf5'}}>,</span><span style={{color: '#a9b1d6'}}>)</span> <span style={{color: '#a9b1d6'}}>(</span> <span style={{color: '#7aa2f7'}}>(</span><span style={{color: '#c0caf5'}}>,</span><span style={{color: '#7aa2f7'}}>)</span> <span style={{color: '#ff9e64', fontWeight: 'bold'}}>1</span> <span style={{color: '#ff9e64', fontWeight: 'bold'}}>2</span><span style={{color: '#a9b1d6'}}>)</span> <span style={{color: '#ff9e64', fontWeight: 'bold'}}>3</span>{"\n"}{"\n"}<span style={{color: '#51587a'}}>-- </span><span style={{color: '#51587a'}}>These constructors also have sugarful declarations</span>{"\n"}<span style={{color: '#7aa2f7'}}>a'</span> <span style={{color: '#c0caf5'}}>=</span> <span style={{color: '#a9b1d6'}}>(</span><span style={{color: '#ff9e64', fontWeight: 'bold'}}>1</span>, <span style={{color: '#ff9e64', fontWeight: 'bold'}}>2</span><span style={{color: '#a9b1d6'}}>)</span>{"\n"}<span style={{color: '#7aa2f7'}}>b'</span> <span style={{color: '#c0caf5'}}>=</span> <span style={{color: '#a9b1d6'}}>(</span><span style={{color: '#ff9e64', fontWeight: 'bold'}}>1</span>, <span style={{color: '#ff9e64', fontWeight: 'bold'}}>2</span>, <span style={{color: '#ff9e64', fontWeight: 'bold'}}>3</span><span style={{color: '#a9b1d6'}}>)</span>{"\n"}{"\n"}<span style={{color: '#51587a'}}>-- </span><span style={{color: '#51587a'}}>Lists can be constructed with :</span>{"\n"}<span style={{color: '#7aa2f7'}}>foo</span> <span style={{color: '#c0caf5'}}>=</span> <span style={{color: '#ff9e64', fontWeight: 'bold'}}>1</span><span style={{color: '#c0caf5'}}>:</span><span style={{color: '#ff9e64', fontWeight: 'bold'}}>2</span><span style={{color: '#c0caf5'}}>:</span><span style={{color: '#ff9e64', fontWeight: 'bold'}}>3</span><span style={{color: '#c0caf5'}}>:</span><span style={{color: '#a9b1d6'}}>[]</span>{"\n"}<span style={{color: '#51587a'}}>-- </span><span style={{color: '#51587a'}}>We also have sugarful notation</span>{"\n"}<span style={{color: '#7aa2f7'}}>foo'</span> <span style={{color: '#c0caf5'}}>=</span> <span style={{color: '#a9b1d6'}}>[</span><span style={{color: '#ff9e64', fontWeight: 'bold'}}>1</span>, <span style={{color: '#ff9e64', fontWeight: 'bold'}}>2</span>, <span style={{color: '#ff9e64', fontWeight: 'bold'}}>3</span><span style={{color: '#a9b1d6'}}>]</span>{"\n"}</pre>
              </div>
              <p>
                In general we can define custom pairs, using the{" "}
                <b>
                  <b>data</b>
                </b>{" "}
                key word
              </p>
              <div className="org-src-container">
                <pre className="src src-haskell"><span style={{color: '#51587a'}}>-- </span><span style={{color: '#51587a'}}>Here we use data to start constructing</span>{"\n"}<span style={{color: '#bb9af7'}}>data</span> <span style={{color: '#c0caf5'}}>Person</span> <span style={{color: '#c0caf5'}}>=</span> <span style={{color: '#c0caf5'}}>Person</span> <span style={{color: '#c0caf5'}}>Int</span> <span style={{color: '#c0caf5'}}>String</span>{"\n"}<span style={{color: '#51587a'}}>-- </span><span style={{color: '#51587a'}}>The constructor of the type Person is a function called Person</span>{"\n"}<span style={{color: '#51587a'}}>-- </span><span style={{color: '#51587a'}}>It takes two parameters, an integer and a string and produces a person</span>{"\n"}{"\n"}<span style={{color: '#51587a'}}>-- </span><span style={{color: '#51587a'}}>We can of course create a variable of type person{"  "}</span>{"\n"}<span style={{color: '#7aa2f7'}}>newPerson</span> <span style={{color: '#c0caf5'}}>=</span> <span style={{color: '#c0caf5'}}>Person</span> <span style={{color: '#ff9e64', fontWeight: 'bold'}}>21</span> <span style={{color: '#9ece6a'}}>"John"</span>{"\n"}{"\n"}<span style={{color: '#51587a'}}>-- </span><span style={{color: '#51587a'}}>It's often convenient to give accessing functions, records can be used for this.</span>{"\n"}<span style={{color: '#51587a'}}>-- </span><span style={{color: '#51587a'}}>Instead of the following:</span>{"\n"}<span style={{color: '#7aa2f7'}}>person_name</span> <span style={{color: '#c0caf5'}}>Person</span> age name <span style={{color: '#c0caf5'}}>=</span> name{"\n"}<span style={{color: '#7aa2f7'}}>person_age</span> <span style={{color: '#c0caf5'}}>Person</span> age name <span style={{color: '#c0caf5'}}>=</span> age{"\n"}{"\n"}<span style={{color: '#51587a'}}>-- </span><span style={{color: '#51587a'}}>We can just define them right away:</span>{"\n"}<span style={{color: '#bb9af7'}}>data</span> <span style={{color: '#c0caf5'}}>Human</span> <span style={{color: '#c0caf5'}}>=</span> <span style={{color: '#c0caf5'}}>Human</span> <span style={{color: '#a9b1d6'}}>{"{"}</span>{"  "}age{"  "}<span style={{color: '#c0caf5'}}>::</span> <span style={{color: '#c0caf5'}}>Int</span>{"\n"}{"                          "}, name <span style={{color: '#c0caf5'}}>::</span> <span style={{color: '#c0caf5'}}>String</span> <span style={{color: '#a9b1d6'}}>{"}"}</span>{"\n"}</pre>
              </div>
              <p>
                Instead of just pairs, we can also define so called tagged
                unions. These are like a union of types, except that each type
                in the union needs it's own named constructor. For example,{" "}
                <b>
                  <b>Foo = Bar Int | Baz</b>
                </b>{" "}
                Double. In this examole, a variable{" "}
                <b>
                  <b>foo :: Foo</b>
                </b>{" "}
                is either a Bar Int or a Baz Double, not both. Note that the
                constructors Baz and Bar distinguish what is the left and right
                value. So{" "}
                <b>
                  <b>foo = Bar 1</b>
                </b>, does not mean that{" "}
                <b>
                  <b>foo</b>
                </b>{" "}
                is of type Int, or of type Bar Int. If you have{" "}
                <b>
                  <b>data Myvar = LeftVar Int | RightVar Int</b>
                </b>, then the left integer is distinct from the right.
                Therefore, it's better to think of tagged unions as generating
                multi-sets, where different values of the same type are
                distinguished by constructors. In haskell, types can be
                recursive, this makes it possible to define lists as follows:
              </p>
              <div className="org-src-container">
                <pre className="src src-haskell"><span style={{color: '#bb9af7'}}>data</span> <span style={{color: '#a9b1d6'}}>[</span><span style={{color: '#c0caf5'}}>A</span><span style={{color: '#a9b1d6'}}>]</span> <span style={{color: '#c0caf5'}}>=</span> <span style={{color: '#a9b1d6'}}>[]</span> <span style={{color: '#c0caf5'}}>|</span> cons <span style={{color: '#a9b1d6'}}>(</span>a <span style={{color: '#c0caf5'}}>::</span> <span style={{color: '#c0caf5'}}>A</span><span style={{color: '#a9b1d6'}}>)</span>{"\n"}<span style={{color: '#51587a'}}>-- </span><span style={{color: '#51587a'}}>The cons constructor is replaced by the operator :</span>{"\n"}<span style={{color: '#7aa2f7'}}>cons</span> a rest <span style={{color: '#c0caf5'}}>=</span> a<span style={{color: '#c0caf5'}}>:</span>rest{"\n"}<span style={{color: '#51587a'}}>-- </span><span style={{color: '#51587a'}}>Here are some examples</span>{"\n"}<span style={{color: '#7aa2f7'}}>myList1</span> <span style={{color: '#c0caf5'}}>=</span> <span style={{color: '#a9b1d6'}}>(</span>cons <span style={{color: '#ff9e64', fontWeight: 'bold'}}>1</span> <span style={{color: '#7aa2f7'}}>(</span>cons <span style={{color: '#ff9e64', fontWeight: 'bold'}}>2</span> <span style={{color: '#ff9e64'}}>(</span>cons <span style={{color: '#ff9e64', fontWeight: 'bold'}}>3</span> <span style={{color: '#73daca'}}>[]</span><span style={{color: '#ff9e64'}}>)</span><span style={{color: '#7aa2f7'}}>)</span><span style={{color: '#a9b1d6'}}>)</span>{"\n"}<span style={{color: '#7aa2f7'}}>myList2</span> <span style={{color: '#c0caf5'}}>=</span> <span style={{color: '#ff9e64', fontWeight: 'bold'}}>1</span><span style={{color: '#c0caf5'}}>:</span><span style={{color: '#ff9e64', fontWeight: 'bold'}}>2</span><span style={{color: '#c0caf5'}}>:</span><span style={{color: '#ff9e64', fontWeight: 'bold'}}>3</span><span style={{color: '#c0caf5'}}>:</span><span style={{color: '#a9b1d6'}}>[]</span>{"\n"}</pre>
              </div>
              <p>
                This does mean that we can construct values which can never
                resolve. For example: Void = Void VoidV:w
              </p>
              <p>
                In haskell, data constructors don't need to take any variables,
                they can be of arrity 0. Therefore, constants can be defied like
                this
              </p>
              <div className="org-src-container">
                <pre className="src src-haskell"><span style={{color: '#bb9af7'}}>data</span> <span style={{color: '#c0caf5'}}>New_Constants</span> <span style={{color: '#c0caf5'}}>=</span> <span style={{color: '#c0caf5'}}>A</span> <span style={{color: '#c0caf5'}}>|</span> <span style={{color: '#c0caf5'}}>B</span> <span style={{color: '#c0caf5'}}>|</span> <span style={{color: '#c0caf5'}}>C</span>{"\n"}<span style={{color: '#7aa2f7'}}>my_new_constant</span> <span style={{color: '#c0caf5'}}>=</span> <span style={{color: '#c0caf5'}}>A</span> <span style={{color: '#c0caf5'}}>::</span> <span style={{color: '#c0caf5'}}>New_Constants</span>{"\n"}</pre>
              </div>
              <p>
                That is basically it. To recap:
              </p>
              <ol className="org-ol">
                <li>
                  Data in haskell can be of two primitive types: pairs and
                  tagged-unions.
                </li>
                <li>
                  Pairs are declared using a single constructor and listing the
                  types.
                  <ul className="org-ul">
                    <li>data Person = Person Int String</li>
                    <li>data Machine = MkMachine Int Int String</li>
                  </ul>
                </li>
                <li>
                  Tagged unions are created using{" "}
                  <b>
                    <b>|</b>
                  </b>{" "}
                  and a constructor on the left and right of{" "}
                  <b>
                    <b>|</b>
                  </b>
                  <ul className="org-ul">
                    <li>data Car = Wheel String | Corpus Int</li>
                  </ul>
                </li>
                <li>Data can be recursive in haskell</li>
                <li>
                  Data constructors don't need to take any arguments, we can
                  regard such constructors as values themselves
                  <ul className="org-ul">
                    <li>data Bool = True | False</li>
                    <li>data Maybe T = Just T | Nothing</li>
                    <li>data Options = Opt1 | Opt2 | Opt3</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div id="outline-container-org48e4310" className="outline-2">
          <h2 id="org48e4310">
            <span className="section-number-2">2.</span>{" "}
            My Category Theory Diagram
          </h2>
          <div className="outline-text-2" id="text-2">
            <div className="org-src-container">
              <pre className="src src-ditaa">+---------+{"\n"}| cBLU{"    "}|{"\n"}|{"         "}|{"\n"}|{"    "}+----+{"\n"}|{"    "}|cPNK|{"\n"}|{"    "}|{"    "}|{"\n"}+----+----+{"\n"}</pre>
            </div>
          </div>
        </div>
        <div id="outline-container-org809995d" className="outline-2">
          <h2 id="org809995d">
            <span className="section-number-2">3.</span>{" "}
            Direct Sum Universal Property
          </h2>
          <div className="outline-text-2" id="text-3">
            <div className="org-src-container">
              <pre className="src src-ditaa">+-------+{"    "}+---------+{"    "}+-------+{"\n"}|{"   "}A{"   "}|{"    "}|{"    "}B{"    "}|{"    "}|{"   "}C{"   "}|{"\n"}+-------+{"    "}+---------+{"    "}+-------+{"\n"}{"     "}^{"            "}^{"             "}^{"\n"}{"     "}|{"            "}|{"             "}|{"\n"}{"     "}|{"            "}|{"             "}|{"\n"}{"     "}|{"            "}|{"             "}|{"\n"}{"     "}+---+{"   "}+----+----+{"   "}+----+{"\n"}{"     "}| ⊕ |{"   "}|{"         "}|{"   "}| ⊕ |{"\n"}{"     "}+---+{"   "}|{"    "}X{"    "}|{"   "}+---+{"\n"}{"             "}|{"         "}|{"\n"}{"             "}+---------+{"\n"}{"                "}D{"\n"}</pre>
            </div>
          </div>
        </div>
        <div id="outline-container-orga1a13d0" className="outline-2">
          <h2 id="orga1a13d0">
            <span className="section-number-2">4.</span> Using a tikz picture
          </h2>
          <div className="outline-text-2" id="text-4">
            <div id="org79d51e1" className="figure">
              <p>
                <img
                  src={TikzPicture}
                  alt="mytikzpicture.png"
                  width="200px"
                />
              </p>
            </div>
            <p>
              That's it! You can customize the diagram further by referring to
              the `tikz-cd` documentation and adjusting the options as needed.
            </p>
          </div>
        </div>
      </div>
      <div id="postamble" className="status">
        <p className="author">Author: Delyan Kirov</p>
        <p className="date">Created: 2023-12-21 Thu 18:21</p>
        <p className="validation">
          <a href="https://validator.w3.org/check?uri=referer">Validate</a>
        </p>
      </div>
    </div>
  );
};

export default FullPanel1;
