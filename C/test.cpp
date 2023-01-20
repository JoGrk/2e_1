#include <iostream>
#include <ctime>
#include <cstdlib>

using namespace std;

int main(){
    srand(time(NULL));
    int a;
    
    
    for(int i=0;i<200;i++){
        a=rand()%100;
        if(a%5==0){
            break;
        } 
        cout << a << " ";  
    }
    return 0;
}