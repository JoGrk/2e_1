#include <iostream>

using namespace std;

main(){

    int a[]= {2,4,6,8,10};
    for(int b: a){
        cout << b << " ";
    }

    string znaki={'a' , 'o' , 'i'};
    for (auto g : znaki){
        cout << g << endl;
    }

    string imiona[]={"Alan", "Kuba", "Maks"};
    for (auto h: imiona){
        cout << h << endl;
    }
    

    return 0;
}