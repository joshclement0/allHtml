#ifndef CR_H_
#define CR_H_
#include "School.h"
#include<string>
#include <sstream>
class Cr :public School {
private:
	std::string className;
	std::string classLocation;
	std::string name = "cr";
public:
	Cr() {}
	Cr(std::string name, std::string location):
		className(name), classLocation(location) {}
	~Cr() {}

	/*
	*Print out data members
	*/
	std::string toString() const {
		std::stringstream ss;
		ss << "cr(" << className << "," << classLocation << ")";
		return ss.str();
	}
	std::string getName() const {
		return name;
	}
	std::string getClassName() const {
		return className;
	}
	std::string getClassRoom() const {
		return classLocation;
	}
};
#endif // !CR_H_
