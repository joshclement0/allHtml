#include <iostream>
#include <fstream>
#include <string>
#include <sstream>
#include <vector>
#include "Cdh.h"
#include "Cr.h"
#include "Csg.h"
#include "Snap.h"
using namespace std;

//#ifdef _MSC_VER
//#define _CRTDBG_MAP_ALLOC
//#include <crtdbg.h>
//#define VS_MEM_CHECK _CrtSetDbgFlag(_CRTDBG_ALLOC_MEM_DF | _CRTDBG_LEAK_CHECK_DF);
//#else
//#define VS_MEM_CHECK
//#endif


int main(int argc, char* argv[])
{
	//VS_MEM_CHECK
	
	if (argc < 3) {
		cerr << "Please provide name of input and output files";
		return 1;
	}
	cout << "Input file: " << argv[1] << endl;
	ifstream infile(argv[1]);
	if (!infile) {
		cerr << "Unable to open " << argv[1] << " for input";
		return 2;
	}
	cout << "Output file: " << argv[2] << " for input";
	ofstream outfile(argv[2]);
	if (!outfile) {
		infile.close();
		cerr << "Unable to open " << argv[2] << " for output";
		return 3;
	}
	string line;
	vector<School*> mySchool;
	//vector<School*> myCsg;
	//vector<School*> myCr;
	//vector<School*> myCdh;
	outfile << "Input Strings:\n";
	while (!infile.eof()) {
		getline(infile, line);
		string firstThree = line.substr(0, line.find("("));
		if (firstThree == "snap") {
			int stuNum=0;
			string pNum="";
			string name="";
			string a="";
			stringstream ss;
			ss<<line.substr(5, line.find(","));
			ss >> stuNum;
			int startPos = line.find(",") + 1;
			while (line.substr(startPos, 1)!=",") {
				name += line.substr(startPos, 1);
				startPos++;
			}
			startPos++;
			while (line.substr(startPos, 1) != ",") {
				a += line.substr(startPos, 1);
				startPos++;
			}
			startPos++;
			pNum= line.substr(startPos, 8);
			School* mySnap= new Snap(stuNum,name,a,pNum);
			mySchool.push_back(mySnap);
			outfile << line;
		}
		else if (firstThree == "csg") {
			int stuNum = 0;
			string grade = "";
			string className = "";
			stringstream ss;
			int startPos = 4;
			while (line.substr(startPos, 1) != ",") {
				className += line.substr(startPos, 1);
				startPos++;
			}
			startPos++;
			string stuNumString="";
			while (line.substr(startPos, 1) != ",") {
				stuNumString += line.substr(startPos, 1);
				startPos++;
			}
			ss << stuNumString;
			ss >> stuNum;
			startPos++;
			while (line.substr(startPos, 1) != ")") { //grab everything until the last )
				grade += line.substr(startPos, 1);
				startPos++;
			}
			School* mySnap = new Csg(className, stuNum,  grade);
			//myCsg.push_back(mySnap);
			mySchool.push_back(mySnap);
			outfile << line;
		}
		else if (firstThree == "cdh") {
			string className = "";
			string day = "";
			string hour = "";
			int startPos = 4;
			while (line.substr(startPos, 1) != ",") {
				className += line.substr(startPos, 1);
				startPos++;
			}
			startPos++;
			while (line.substr(startPos, 1) != ",") {
				day += line.substr(startPos, 1);
				startPos++;
			}
			startPos++;
			while (line.substr(startPos, 1) != ")") { //grab everything until the last )
				hour += line.substr(startPos, 1);
				startPos++;
			}
			School* mySnap = new Cdh(className, day, hour);
			//myCdh.push_back(mySnap);
			mySchool.push_back(mySnap);
			outfile << line;
		}
		else if (firstThree == "cr") {
			string className = "";
			string room = "";
			className = line.substr(3, line.find(",")-3);
			int startPos = line.find(",") + 1;
			while (line.substr(startPos, 1) != ")") {
				room += line.substr(startPos, 1);
				startPos++;
			}
			School* mySnap = new Cr(className, room);
			//myCr.push_back(mySnap);
			mySchool.push_back(mySnap);
			outfile << line;
		}
		else {
			if (line != "" && line != " ") {
				outfile << "**Error: " << line;
			}
		}
		outfile << endl;
	}
	//Concatonate all the separate vectors
	/*
	for (int i = 0; i < myCsg.size(); i++) {
		mySchool.push_back(myCsg[i]);
	}
	for (int i = 0; i < myCdh.size(); i++) {
		mySchool.push_back(myCdh[i]);
	}
	for (int i = 0; i < myCr.size(); i++) {
		mySchool.push_back(myCr[i]);
	}
	*/
	outfile << "Vectors:" << endl;
	for (int i = 0; i < mySchool.size(); i++) {
		outfile<< mySchool[i]->toString()<<endl;
	}
	outfile << "\nCourse Grades:" << endl;
	for (int i = 0; i < mySchool.size(); i++) {
		string courseName;
		string courseDay;
		string courseRoom;
		int studentNumber;
		string gradeGiven;

		if (mySchool[i]->getName()=="cr") {
			courseName = mySchool[i]->getClassName();
			courseRoom = mySchool[i]->getClassRoom();
			cout << "course name " << courseName;
			for (int j = 0; j < mySchool.size(); j++) {
				if (mySchool[j]->getName() == "cdh") {
					if (mySchool[j]->getClassName() == courseName) {
						string newdayofweek = mySchool[j]->getDayOfWeek();
						courseDay = courseDay + newdayofweek;
					}
					cout << "\nCourseday " << courseDay;
				}
			}
			for(int k=0;k<mySchool.size();k++){
				if ((mySchool[k]->getName() == "csg") && (mySchool[k]->getClassName() == courseName)) {
					studentNumber = mySchool[k]->getStuNum();
					gradeGiven = mySchool[k]->getGrade();
					cout << "\n StudentNumber" << studentNumber<<", "<<mySchool[k]->getName()<<mySchool[k]->getStuNum();
					for (int l = 0; l < mySchool.size(); l++) {
						if ((mySchool[l]->getName() == "snap")&&(mySchool[l]->getStuNum() == studentNumber)) {
							outfile << courseName << " " << courseDay << ", " << courseRoom << ", " << mySchool[l]->getStuName() << ", " << studentNumber << ", " << gradeGiven << endl;
						}
					}
				}
			}
			outfile << endl;
		}
	}
	outfile << "Student Schedules:\n";
	for (int i = 0; i < mySchool.size(); i++) {
		if (mySchool[i]->getName() == "snap") {
			int studentNumber = mySchool[i]->getStuNum();
			outfile << mySchool[i]->getStuName() << ", " << studentNumber << ", " << mySchool[i]->getStuA() << ", " << mySchool[i]->getStuPhoneNumber() << endl;
			for (int j = 0; j < mySchool.size(); j++) {
				if ((mySchool[j]->getName() == "csg") && (mySchool[j]->getStuNum() == studentNumber)) {
					string className = mySchool[j]->getClassName();
					string day;
					string hour;
					string location;
					for (int k = 0; k < mySchool.size(); k++) {
						if ((mySchool[k]->getName() == "cdh") && (mySchool[k]->getClassName() == className)) {
							day += mySchool[k]->getDayOfWeek();
							hour = mySchool[k]->getClassTime();
						}
						else if ((mySchool[k]->getName() == "cr") && (mySchool[k]->getClassName() == className)) {
							location = mySchool[k]->getClassRoom();
						}
					}
					outfile << "  " << className << " " << day << " " << hour << ", " << location << endl;
				}
			}
			outfile << endl;
		}
	}

	//Delete everything
	
	for (int i = 0; i < mySchool.size(); i++) {
		delete mySchool[i];
	}
	
	//delete[] mySchool;
	return 0;
} 