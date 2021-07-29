 
%{
    const {type} = require("../system/type") ;
    const { error, error_arr, error_type }= require("../system/error");

    const {arithmetic, arithmetic_type} = require('../expression/arithmetic');
    const {relational, relational_type} = require('../expression/relational');
    const {logic, logic_type} = require('../expression/logic');

    const {native} = require('../literal/native');
%}

%lex
%options case-sensitive

/*********************
        Regex 
**********************/

number      [0-9]+
decimal     [0-9]+("."[0-9]+)?
string      ([\"][^"]*[\"])
string2     ([\'][^\']*[\'])
id          ([a-zA-Z_])[a-zA-Z0-9_ñÑ]*

%%

/*********************
        Ignore 
**********************/

\s+                                     /* Skip Whitespace */
"//".*                                  /* Comments */
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]     /* Multiline Comments */

/*********************
        Tokens 
**********************/

{number}                return 'tk_int'
{decimal}               return 'tk_float'
{string}                return 'tk_string'
{string2}               return 'tk_string'
{id}                    return 'tk_id'
"true"                  return 'tk_bool'
"false"                 return 'tk_bool'
"^"                     return 'tk_power'
"*"                     return 'tk_times'
"/"                     return 'tk_division'
"+"                     return 'tk_plus'
"-"                     return 'tk_minus'
"%"                     return 'tk_mod'
"<="                    return 'tk_less_equal'
">="                    return 'tk_greater_equal'
"<"                     return 'tk_less'
">"                     return 'tk_greater'
"=="                    return 'tk_double_equal'
"!="                    return 'tk_not_equal'
"||"                    return 'tk_or'
"&&"                    return 'tk_and'
"!"                     return 'tk_not'
"="                     return 'tk_equal'
"("                     return 'tk_par_o'
")"                     return 'tk_par_c' 
"{"                     return 'tk_cbra_o'
"}"                     return 'tk_cbra_c'
"["                     return 'tk_bra_o'
"]"                     return 'tk_bra_c'
<<EOF>>		            return 'EOF'


/*********************
        Options 
**********************/
/* Lexical Errors */
.                   error_arr.push(new error(yylloc.first_line, yylloc.first_column, error_type.SINTACTICO,'Valor inesperado ' + yytext));  
/lex
/* Prede */
%left 'tk_or'
%left 'tk_and'
%left 'tk_double_equal', 'tk_not_equal'
%left 'tk_greater_equal', 'tk_less_equal', 'tk_less', 'tk_greater'
%left 'tk_plus' 'tk_minus'
%left 'tk_times' 'tk_division' 'tk_mod'
%left 'tk_power'
/* Start production */
%start pr_init

/*********************
      Productions 
**********************/
%%

pr_init    
    : pr_instr EOF {
        return $1;
    } 
;

pr_instr
    : pr_expr {
        $$ = $1
    }
;

pr_expr
    : pr_expr tk_plus pr_expr {
        $$ = new arithmetic($1, $3, arithmetic_type.PLUS, @1.first_line,@1.first_column);
    }       
    | pr_expr tk_minus pr_expr {
        $$ = new arithmetic($1, $3, arithmetic_type.MINUS, @1.first_line,@1.first_column);
    }
    | pr_expr tk_times pr_expr { 
        $$ = new arithmetic($1, $3, arithmetic_type.TIMES, @1.first_line,@1.first_column);
    }       
    | pr_expr tk_division pr_expr {
        $$ = new arithmetic($1, $3, arithmetic_type.DIV, @1.first_line,@1.first_column);
    }
    | pr_expr tk_power pr_expr {
        $$ = new arithmetic($1, $3, arithmetic_type.POWER, @1.first_line,@1.first_column);
    }
    | pr_expr tk_mod pr_expr {
        $$ = new arithmetic($1, $3, arithmetic_type.MOD, @1.first_line,@1.first_column);
    }
    | pr_expr tk_less_equal pr_expr {
        $$ = new relational($1, $3,relational_type.LESSOREQUAL ,@1.first_line, @1.first_column);
    }
    | pr_expr tk_greater_equal pr_expr {
        $$ = new relational($1, $3,relational_type.GREATEROREQUAL ,@1.first_line, @1.first_column);
    }
    | pr_expr tk_double_equal pr_expr {
        $$ = new relational($1, $3,relational_type.EQUAL ,@1.first_line, @1.first_column);
    }
    | pr_expr tk_not_equal pr_expr {
        $$ = new relational($1, $3,relational_type.NOTEQUAL ,@1.first_line, @1.first_column);
    }
    | pr_expr tk_greater pr_expr {
        $$ = new relational($1, $3,relational_type.GREATER ,@1.first_line, @1.first_column);
    }
    | pr_expr tk_less pr_expr {
        $$ = new relational($1, $3,relational_type.LESS, @1.first_line, @1.first_column);
    }
    | pr_expr tk_and pr_expr {
        $$ = new logic($1, $3,logic_type.AND ,@1.first_line, @1.first_column);
    }
    | pr_expr tk_or pr_expr {
        $$ = new logic($1, $3,logic_type.OR ,@1.first_line, @1.first_column);
    }
    | pr_native {
        $$ = $1
    }
;

pr_native :
    tk_float {
        $$ = new native($1, type.FLOAT ,@1.first_line, @1.first_column);
    }
    | tk_string {
        $$ = new native($1, type.STRING ,@1.first_line, @1.first_column);
    }
    | tk_int {
        $$ = new native($1, type.INTEGER ,@1.first_line, @1.first_column);
    }
    | tk_bool {
        $$ = new native($1, type.BOOLEAN ,@1.first_line, @1.first_column);
    }
;
