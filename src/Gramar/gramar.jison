/* description: Parses and executes mathematical expressions. */
%{
    /*this segment is for the get to requieres and use it in the gramar
     *for example: let expression = require(../AST/Expression);
    */
%}

/* lexical grammar */
%lex
/*options declaration this lex is sensitive or not for case*/
%options case-sensitive

%%
\s+                                     /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'   //it is a number
"*"                   return '*'        //it is a multiplication
"/"                   return '/'        //it is a division
"-"                   return '-'        //it is a subtraction
"+"                   return '+'        //it is a addition
"^"                   return '^'        //it is a power
"!"                   return '!'        //it is a factorial
"%"                   return '%'        //it is a modulo
"("                   return '('        //it is a open parenthesis
")"                   return ')'        //it is a close parenthesis
"PI"                  return 'PI'       //it is a pi
"E"                   return 'E'        //it is a e
<<EOF>>               return 'EOF'      //it is the end of the file
.                     return 'INVALID'  //it is invalid

/lex
    
/*Then we implement the grammar rules for the parser*/


/* operator associations and precedence */
%left '+' '-'
%left '*' '/'
%left '^'
%right '!'
%right '%'
%left UMINUS

%start expressions

%% /* language grammar */

expressions
    : e EOF
        { typeof console !== 'undefined' ? console.log($1) : print($1);
          return $1; }
    ;

e
    : e '+' e
        {$$ = $1+$3;}
    | e '-' e
        {$$ = $1-$3;}
    | e '*' e
        {$$ = $1*$3;}
    | e '/' e
        {$$ = $1/$3;}
    | e '^' e
        {$$ = Math.pow($1, $3);}
    | e '!'
        {{
          $$ = (function fact (n) { return n==0 ? 1 : fact(n-1) * n })($1);
        }}
    | e '%'
        {$$ = $1/100;}
    | '-' e %prec UMINUS
        {$$ = -$2;}
    | '(' e ')'
        {$$ = $2;}
    | NUMBER
        {$$ = Number(yytext);}
    | E
        {$$ = Math.E;}
    | PI
        {$$ = Math.PI;}
    ;